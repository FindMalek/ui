// Creates or replaces a person's registry token, and lets it in through Global Config.
//
//   pnpm invite <username>
//
// Writes `token_<username>`, the token's SHA-256 hex, to the registry's Global
// Config with the Vercel CLI (logged in, with the `global-config` command), then
// prints the token and the `.npmrc` lines to send. The token itself is stored
// nowhere: running this again replaces it, and deleting the item revokes it.
// The Global Config comes from `GLOBAL_CONFIG` (or `EDGE_CONFIG`) in
// `.env.local`, from `vercel env pull .env.local`.
import { parseConnectionString } from "@vercel/global-config"
import { execFileSync } from "node:child_process"
import { createHash, randomBytes } from "node:crypto"
import { existsSync, readFileSync } from "node:fs"
import path from "node:path"
import { parseArgs } from "node:util"

const appDir = path.resolve(import.meta.dirname, "..")
const envFile = path.join(appDir, ".env.local")
if (existsSync(envFile)) process.loadEnvFile(envFile)

const { positionals } = parseArgs({ allowPositionals: true })
const username = positionals[0]
// The registry reads the username back out of the token, up to the next `_`.
if (!username || !/^[a-z0-9-]{1,40}$/.test(username))
  throw new Error("Pass a username of lowercase letters, digits and dashes: pnpm invite alice")

// The registry answers at /npm on the docs site.
const site = process.env.SITE_URL?.replace(/\/$/, "")
if (!site) throw new Error("Pass the docs site's address: SITE_URL=https://example.com pnpm invite alice")
const registry = `${site}/npm`

// Global Config was called Edge Config, and older connections still set EDGE_CONFIG.
const connection = process.env.GLOBAL_CONFIG ?? process.env.EDGE_CONFIG
const globalConfigId = connection && parseConnectionString(connection)?.id
if (!globalConfigId)
  throw new Error(`No GLOBAL_CONFIG in ${envFile}. Run \`vercel env pull .env.local\` in apps/docs.`)

const token = `uisdk_${username}_${randomBytes(32).toString("base64url")}`
const key = `token_${username}`
const hash = createHash("sha256").update(token).digest("hex")
const patch = JSON.stringify({ items: [{ operation: "upsert", key, value: hash }] })
const scope = linkedTeam()

try {
  execFileSync(
    "vercel",
    ["global-config", "update", globalConfigId, "--patch", patch, ...(scope ? ["--scope", scope] : [])],
    {
      cwd: appDir,
      stdio: ["ignore", "ignore", "inherit"],
    },
  )
} catch {
  throw new Error(
    "The Vercel CLI couldn't update Global Config. It needs a version with `vercel global-config` (65 has it) and `vercel login`.",
  )
}

console.log(`Saved ${key} in Global Config, replacing any earlier token for ${username}.

Send ${username} these lines for ~/.npmrc:

  @ui-sdk:registry=${registry}/
  //${registry.replace(/^https?:\/\//, "")}/:_authToken=${token}
`)

// The team `vercel link` linked this app to, since Global Config lives in that team.
function linkedTeam() {
  const projectFile = path.join(appDir, ".vercel", "project.json")
  if (!existsSync(projectFile)) return
  const { orgId } = JSON.parse(readFileSync(projectFile, "utf8"))
  return typeof orgId === "string" && orgId.startsWith("team_") ? orgId : undefined
}

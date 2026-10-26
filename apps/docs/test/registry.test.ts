import { createHash } from "node:crypto"
import { beforeEach, describe, expect, it } from "vitest"
import { createRegistry } from "../lib/registry"

const token = "uisdk_alice_secret"
const files: Record<string, string> = {
  "packages/@ui-sdk/react/index.json": JSON.stringify({
    name: "@ui-sdk/react",
    "dist-tags": { latest: "0.0.0-1.gabc" },
    versions: {
      "0.0.0-1.gabc": { name: "@ui-sdk/react", dist: { tarball: "@ui-sdk/react/-/react-0.0.0-1.gabc.tgz" } },
    },
  }),
  "packages/@ui-sdk/react/react-0.0.0-1.gabc.tgz": "tarball bytes",
}
const downloads: { username: string; name: string; version: string }[] = []
const handle = createRegistry({
  base: "/npm",
  read: async (pathname) => (pathname in files ? new Response(files[pathname]).body : null),
  findTokenHash: async (username) =>
    username === "alice" ? createHash("sha256").update(token).digest("hex") : undefined,
  onDownload: async ({ username, name, version }) => {
    downloads.push({ username, name, version })
  },
})

function request(path: string, authorization: string | null = `Bearer ${token}`) {
  return handle(
    new Request(`https://docs.test/npm${path}`, authorization ? { headers: { authorization } } : {}),
  )
}

describe("registry", () => {
  beforeEach(() => {
    downloads.length = 0
  })

  it("rejects a request without a token", async () => {
    expect((await request("/@ui-sdk%2freact", null)).status).toBe(401)
  })

  it("rejects a token whose secret doesn't match its username's hash", async () => {
    expect((await request("/@ui-sdk%2freact", "Bearer uisdk_alice_guess")).status).toBe(401)
  })

  it("rejects a token for a username with no hash", async () => {
    expect((await request("/@ui-sdk%2freact", "Bearer uisdk_bob_secret")).status).toBe(401)
  })

  it("serves a package's versions with tarball URLs under its own path", async () => {
    const response = await request("/@ui-sdk%2freact")
    const body = (await response.json()) as {
      "dist-tags": { latest: string }
      versions: Record<string, { dist: { tarball: string } }>
    }
    expect(body["dist-tags"].latest).toBe("0.0.0-1.gabc")
    expect(body.versions["0.0.0-1.gabc"].dist.tarball).toBe(
      "https://docs.test/npm/@ui-sdk/react/-/react-0.0.0-1.gabc.tgz",
    )
  })

  it("reads the package name with an unescaped slash too", async () => {
    expect((await request("/@ui-sdk/react")).status).toBe(200)
  })

  it("streams a tarball", async () => {
    const response = await request("/@ui-sdk/react/-/react-0.0.0-1.gabc.tgz")
    expect(await response.text()).toBe("tarball bytes")
  })

  it("reports who downloaded which version", async () => {
    await request("/@ui-sdk/react/-/react-0.0.0-1.gabc.tgz")
    expect(downloads).toEqual([{ username: "alice", name: "react", version: "0.0.0-1.gabc" }])
  })

  it("reports nothing for version lists, missing tarballs or refused tokens", async () => {
    await request("/@ui-sdk%2freact")
    await request("/@ui-sdk/react/-/react-9.9.9.tgz")
    await request("/@ui-sdk/react/-/react-0.0.0-1.gabc.tgz", "Bearer uisdk_alice_guess")
    expect(downloads).toEqual([])
  })

  it("serves nothing outside the package layout", async () => {
    expect((await request("/@ui-sdk/react/-/..%2f..%2findex.json")).status).toBe(404)
    expect((await request("/@other%2freact")).status).toBe(404)
    expect((await request("/@ui-sdk/react/-/core-0.0.0-1.gabc.tgz")).status).toBe(404)
    expect((await request("/@ui-sdk%E0react")).status).toBe(404)
  })

  it("shows a plain Not Found at the root, token or not", async () => {
    for (const response of [await request("", null), await request("/", null), await request("/")]) {
      expect(response.status).toBe(404)
      expect(await response.text()).toBe("Not Found")
    }
  })

  it("answers npm whoami with the token's username", async () => {
    expect(await (await request("/-/whoami")).json()).toEqual({ username: "alice" })
  })
})

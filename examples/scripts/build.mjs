// Builds the examples the docs load, for every framework at once, or for the
// ones named: `node scripts/build.mjs react vue`.
import { build } from "vite"

const all = ["react", "vue", "svelte", "solid", "web"]
const named = process.argv.slice(2)
const unknown = named.filter((framework) => !all.includes(framework))
if (unknown.length) throw new Error(`No examples build for ${unknown.join(", ")}`)

const root = new URL("..", import.meta.url).pathname
await Promise.all((named.length ? named : all).map((mode) => build({ root, mode, logLevel: "warn" })))

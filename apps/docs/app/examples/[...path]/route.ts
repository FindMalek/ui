import { readFile, stat } from "node:fs/promises"
import path from "node:path"

// Serves the compiled examples in examples/dist, which ExamplePreview imports
// in the browser. Turbopack skips tracing the folder, as in component-example.
const dist = path.resolve(/* turbopackIgnore: true */ process.cwd(), "../../examples/dist")

export async function GET(request: Request, { params }: RouteContext<"/examples/[...path]">) {
  const file = path.join(dist, ...(await params).path)
  const info =
    file.startsWith(dist + path.sep) && file.endsWith(".js") ? await stat(file).catch(() => null) : null
  if (!info?.isFile()) return new Response("Not found", { status: 404 })

  // Shared chunks are named by their hash, so they never change. Examples and
  // `mount.js` keep their names across builds, so the browser checks for a
  // newer build each time.
  const etag = `"${info.size.toString(36)}-${info.mtimeMs.toString(36)}"`
  const headers = {
    "Content-Type": "text/javascript; charset=utf-8",
    "Cache-Control": file.includes(`${path.sep}chunks${path.sep}`)
      ? "public, max-age=31536000, immutable"
      : "no-cache",
    ETag: etag,
  }
  if (request.headers.get("if-none-match") === etag) return new Response(null, { status: 304, headers })
  return new Response(await readFile(file), { headers })
}

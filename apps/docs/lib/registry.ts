import { createHash, timingSafeEqual } from "node:crypto"

/**
 * A private npm registry for the `@ui-sdk` packages, as a fetch handler.
 *
 * `scripts/release.mjs` writes each package to the store as
 * `packages/@ui-sdk/<name>/index.json`, its versions and their manifests,
 * next to `packages/@ui-sdk/<name>/<name>-<version>.tgz`. npm, pnpm, yarn
 * and bun then install from it with a token in `.npmrc`, under `base`:
 *
 *   GET <base>/@ui-sdk%2f<name>               The package's versions, with tarball URLs on this host.
 *   GET <base>/@ui-sdk/<name>/-/<file>.tgz    A tarball, streamed from the store and reported to `onDownload`.
 *   GET <base>/-/whoami                       The token's username, for `npm whoami`.
 *
 * Every request needs `Authorization: Bearer uisdk_<username>_<secret>`. The
 * store holds a SHA-256 of each token, keyed by username, so removing a
 * username revokes that friend's token alone.
 */
function createRegistry(options: {
  /** The path the registry answers under, like `/npm`. */
  base: string
  /** Reads a file from the store, or `null` when there is none. */
  read: (pathname: string) => Promise<ReadableStream<Uint8Array> | null>
  /** The SHA-256 hex of the token issued to `username`, if any. */
  findTokenHash: (username: string) => Promise<string | undefined>
  /** Called for each tarball served, to record who downloaded which version. */
  onDownload?: (download: {
    username: string
    name: string
    version: string
    request: Request
  }) => Promise<void>
}) {
  return async (request: Request) => {
    const url = new URL(request.url)
    const path = decodePath(url.pathname).slice(options.base.length) || "/"
    // A browser visiting the registry sees a plain page, not its token error.
    if (path === "/")
      return new Response("Not Found", { status: 404, headers: { "content-type": "text/plain" } })

    const username = await findUsername(request.headers.get("authorization"), options.findTokenHash)
    if (!username)
      return json({ error: "Missing or unknown token. Add it to .npmrc as _authToken." }, 401, {
        "www-authenticate": 'Bearer realm="ui-sdk"',
      })

    if (path === "/-/whoami") return json({ username })

    const packument = path.match(/^\/@ui-sdk\/([a-z0-9-]+)$/)
    if (packument) {
      const index = await options.read(`packages/@ui-sdk/${packument[1]}/index.json`)
      if (!index) return json({ error: "Not found." }, 404)
      // The index is ours, written by `scripts/release.mjs`.
      const versions = (await new Response(index).json()) as Parameters<typeof withTarballUrls>[0]
      return json(withTarballUrls(versions, url.origin + options.base))
    }

    const tarball = path.match(/^\/@ui-sdk\/([a-z0-9-]+)\/-\/\1-([0-9A-Za-z.-]+)\.tgz$/)
    if (tarball) {
      const [, name, version] = tarball
      const file = await options.read(`packages/@ui-sdk/${name}/${name}-${version}.tgz`)
      if (!file) return json({ error: "Not found." }, 404)
      await options.onDownload?.({ username, name, version, request })
      return new Response(file, {
        headers: {
          "content-type": "application/octet-stream",
          // A version's tarball never changes, but only token holders may keep a copy.
          "cache-control": "private, max-age=31536000, immutable",
        },
      })
    }

    return json({ error: "Not found." }, 404)
  }
}

async function findUsername(
  authorization: string | null,
  findTokenHash: (username: string) => Promise<string | undefined>,
) {
  const token = authorization?.match(/^Bearer (\S+)$/)?.[1]
  const username = token?.match(/^uisdk_([a-z0-9-]+)_/)?.[1]
  if (!token || !username) return
  const expected = await findTokenHash(username)
  if (!expected) return
  const actual = createHash("sha256").update(token).digest("hex")
  if (actual.length !== expected.length) return
  return timingSafeEqual(Buffer.from(actual), Buffer.from(expected)) ? username : undefined
}

// The index stores tarball paths relative to the registry, so it doesn't depend on the host.
function withTarballUrls(
  index: { name: string; versions: Record<string, { dist: { tarball: string } }> },
  registry: string,
) {
  for (const manifest of Object.values(index.versions))
    manifest.dist = { ...manifest.dist, tarball: `${registry}/${manifest.dist.tarball}` }
  return index
}

// A malformed escape like `%E0` would throw, so it reads as a path nothing matches.
function decodePath(pathname: string) {
  try {
    return decodeURIComponent(pathname)
  } catch {
    return pathname
  }
}

function json(body: unknown, status = 200, headers: Record<string, string> = {}) {
  return Response.json(body, { status, headers: { "cache-control": "private, no-store", ...headers } })
}

export { createRegistry }

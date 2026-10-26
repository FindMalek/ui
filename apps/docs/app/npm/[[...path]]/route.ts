import { track } from "@vercel/analytics/server"
import { createRegistry } from "@/lib/registry"
import { registryStore } from "@/lib/registry-store"

// The private npm registry for the `@ui-sdk` packages, at /npm. Every request
// needs a token from `pnpm invite`; see REGISTRY.md.
const handle = createRegistry({
  base: "/npm",
  ...registryStore,
  // A Web Analytics custom event, under Events in the project's Analytics tab.
  onDownload: ({ username, name, version, request }) =>
    track("download", { user: username, package: name, version }, { request }),
})

export function GET(request: Request) {
  return handle(request)
}

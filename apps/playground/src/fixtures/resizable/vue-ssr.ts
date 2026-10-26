import { renderToString } from "@vue/server-renderer"
import { createSSRApp } from "vue"
import ResizableFixture from "./ResizableFixture.vue"

// Server renders, then the client hydrates. Every mismatch Vue reports is
// recorded. With ?hydrate=manual, the page stays server markup until
// window.hydrate() runs, so specs can measure the server's layout.
async function mount(root: HTMLElement) {
  const errors: string[] = []
  ;(window as unknown as { __hydrationErrors: string[] }).__hydrationErrors = errors
  root.innerHTML = await renderToString(createSSRApp(ResizableFixture))
  const hydrate = () => {
    const warn = console.warn
    const error = console.error
    console.warn = (...args: unknown[]) => {
      errors.push(args.map(String).join(" "))
      warn(...args)
    }
    console.error = (...args: unknown[]) => {
      errors.push(args.map(String).join(" "))
      error(...args)
    }
    createSSRApp(ResizableFixture).mount(root)
  }
  if (new URLSearchParams(location.search).get("hydrate") === "manual")
    (window as unknown as { hydrate: () => void }).hydrate = hydrate
  else hydrate()
}

export { mount }

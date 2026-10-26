import { renderToString } from "@vue/server-renderer"
import { createSSRApp } from "vue"
import NumberInputFixture from "./NumberInputFixture.vue"

// Server renders, then the client hydrates. Every mismatch Vue reports is
// recorded. With ?hydrate=manual, the page stays server markup until
// window.hydrate() runs, so specs can use the fields before hydration.
async function mount(root: HTMLElement) {
  const errors: string[] = []
  ;(window as unknown as { __hydrationErrors: string[] }).__hydrationErrors = errors
  root.innerHTML = await renderToString(createSSRApp(NumberInputFixture))
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
    createSSRApp(NumberInputFixture).mount(root)
  }
  if (new URLSearchParams(location.search).get("hydrate") === "manual")
    (window as unknown as { hydrate: () => void }).hydrate = hydrate
  else hydrate()
}

export { mount }

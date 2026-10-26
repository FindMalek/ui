import { renderToString } from "@vue/server-renderer"
import { createSSRApp } from "vue"
import NavigationMenuFixture from "./NavigationMenuFixture.vue"

// Server renders, then the client hydrates. Every mismatch Vue reports is recorded.
async function mount(root: HTMLElement) {
  const errors: string[] = []
  ;(window as unknown as { __hydrationErrors: string[] }).__hydrationErrors = errors
  root.innerHTML = await renderToString(createSSRApp(NavigationMenuFixture))
  ;(window as unknown as { __serverHTML: string }).__serverHTML = root.innerHTML
  // Whether open content shows before any script runs on it, as server HTML would.
  ;(window as unknown as { __visibleBeforeHydration: boolean }).__visibleBeforeHydration = !!root
    .querySelector<HTMLElement>('[data-slot$="-content"]')
    ?.checkVisibility()
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
  createSSRApp(NavigationMenuFixture).mount(root)
}

export { mount }

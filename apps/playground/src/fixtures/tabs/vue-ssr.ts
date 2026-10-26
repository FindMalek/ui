import { renderToString } from "@vue/server-renderer"
import { createSSRApp } from "vue"
import TabsFixture from "./TabsFixture.vue"

// Server renders, then the client hydrates. Every mismatch Vue reports is recorded.
async function mount(root: HTMLElement) {
  const errors: string[] = []
  ;(window as unknown as { __hydrationErrors: string[] }).__hydrationErrors = errors
  root.innerHTML = await renderToString(createSSRApp(TabsFixture))
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
  createSSRApp(TabsFixture).mount(root)
}

export { mount }

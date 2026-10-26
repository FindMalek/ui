import { renderToString } from "@vue/server-renderer"
import { createSSRApp } from "vue"
import MenubarFixture from "./MenubarFixture.vue"

// Server renders, then the client hydrates. Every mismatch Vue reports is
// recorded, and the server's markup is kept for specs that read it.
async function mount(root: HTMLElement) {
  const errors: string[] = []
  const page = window as unknown as { __hydrationErrors: string[]; __serverMarkup: string }
  page.__hydrationErrors = errors
  root.innerHTML = page.__serverMarkup = await renderToString(createSSRApp(MenubarFixture))
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
  createSSRApp(MenubarFixture).mount(root)
}

export { mount }

import { renderToString } from "@vue/server-renderer"
import { createSSRApp } from "vue"
import { serializeForm } from "tests/fixtures/select.ts"
import ComboboxFixture from "./ComboboxFixture.vue"

// Server renders, then the client hydrates. Every mismatch Vue reports is recorded.
async function mount(root: HTMLElement) {
  const errors: string[] = []
  ;(window as unknown as { __hydrationErrors: string[] }).__hydrationErrors = errors
  // ?data renders the same combobox from `items`.
  const props = { data: new URLSearchParams(location.search).has("data") }
  root.innerHTML = await renderToString(createSSRApp(ComboboxFixture, props))
  // What the page shows before hydration.
  ;(window as unknown as { __serverHtml: string }).__serverHtml = root.innerHTML
  const form = root.querySelector("form")
  ;(window as unknown as { __serverForm: string }).__serverForm = form ? serializeForm(form) : ""
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
  createSSRApp(ComboboxFixture, props).mount(root)
}

export { mount }

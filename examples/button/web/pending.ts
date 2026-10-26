import "@ui-sdk/web/button"
import { createElement, LoaderCircle } from "lucide"

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-button pending-announcement="Saving">
      <button class="group inline-flex h-8 shrink-0 cursor-default appearance-none items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-clip-padding px-3 py-0 text-sm leading-5 font-medium whitespace-nowrap outline-none select-none transition-all focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 data-disabled:opacity-50 motion-reduce:transition-none bg-secondary text-secondary-foreground hover:not-aria-disabled:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] enabled:active:not-aria-disabled:translate-y-px data-pending:cursor-progress"><span data-spinner></span>Save</button>
    </ui-button>
  `
  const spinner = createElement(LoaderCircle, { "aria-hidden": "true" })
  spinner.setAttribute(
    "class",
    "invisible pointer-events-none size-4 shrink-0 animate-spin group-data-pending:visible motion-reduce:animate-none",
  )
  root.querySelector("[data-spinner]")!.replaceWith(spinner)
  root.querySelector("ui-button")!.addEventListener("action", (event) => event.detail.waitUntil(wait(1500)))
}

export { mount }

import "@ui-sdk/web/toolbar"
import { Check, createElement, ExternalLink, File, MessageCircle } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-start gap-3">
      <ui-toolbar aria-label="Pull request" class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1">
        <ui-toolbar-button>
          <button aria-label="Approve" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none">
            ${createElement(Check, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-toolbar-button>
        <ui-toolbar-button>
          <button aria-label="Comment" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none">
            ${createElement(MessageCircle, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-toolbar-button>
        <ui-toolbar-separator class="mx-1 h-5 w-px shrink-0 bg-border"></ui-toolbar-separator>
        <ui-toolbar-link>
          <a href="#files" class="inline-flex h-8 items-center gap-1.5 rounded-2xl px-3 text-sm font-medium whitespace-nowrap text-foreground underline-offset-4 cursor-default outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">
            ${createElement(File, { class: "size-4", "aria-hidden": "true" }).outerHTML}
            Files changed
          </a>
        </ui-toolbar-link>
        <ui-toolbar-link>
          <a aria-label="Checks" href="#checks" class="inline-flex size-8 items-center justify-center gap-1.5 rounded-2xl text-sm font-medium whitespace-nowrap text-foreground underline-offset-4 cursor-default outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">
            ${createElement(ExternalLink, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </a>
        </ui-toolbar-link>
      </ui-toolbar>
      <p class="text-sm text-muted-foreground">Showing: <span data-page>conversation</span></p>
    </div>
  `
  const page = root.querySelector("[data-page]")!
  root.querySelector("ui-toolbar")!.addEventListener("click", (event) => {
    const link = (event.target as Element).closest("a")
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return
    }
    event.preventDefault()
    page.textContent = link.hash.slice(1)
  })
}

export { mount }

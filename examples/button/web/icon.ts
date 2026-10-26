import "@ui-sdk/web/button"
import { createElement, Download } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-button>
      <button aria-label="Download" class="inline-flex size-8 shrink-0 items-center justify-center rounded-2xl border border-border bg-background bg-clip-padding outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">
        ${createElement(Download, { class: "size-4", "aria-hidden": "true" }).outerHTML}
      </button>
    </ui-button>
  `
}

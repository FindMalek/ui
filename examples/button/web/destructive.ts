import "@ui-sdk/web/button"
import { createElement, Trash } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-button>
      <button class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-destructive/10 bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-destructive outline-none select-none transition-[color,background-color,box-shadow] hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-3 focus-visible:ring-destructive/20 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40">
        ${createElement(Trash, { class: "size-4", "aria-hidden": "true" }).outerHTML}
        Delete
      </button>
    </ui-button>
  `
}

import "@ui-sdk/web/toggle"
import { Bold, createElement, Italic } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-wrap items-center gap-2">
      <ui-toggle>
        <button class="inline-flex h-8 min-w-8 shrink-0 items-center justify-center gap-1 rounded-2xl border border-input bg-transparent ps-2 pe-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50">
          <ui-toggle-icon class="flex">${createElement(Italic, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-toggle-icon>
          Italic
        </button>
      </ui-toggle>
      <ui-toggle>
        <button class="inline-flex h-8 min-w-8 shrink-0 items-center justify-center gap-1 rounded-2xl border border-input bg-transparent ps-2 pe-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50">
          <ui-toggle-icon class="flex">${createElement(Bold, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-toggle-icon>
          Bold
        </button>
      </ui-toggle>
    </div>
  `
}

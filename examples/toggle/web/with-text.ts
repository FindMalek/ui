import "@ui-sdk/web/toggle"
import { createElement, Italic } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-toggle>
      <button class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none">
        <ui-toggle-icon class="flex">${createElement(Italic, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-toggle-icon>
        Italic
      </button>
    </ui-toggle>
  `
}

export { mount }

import "@ui-sdk/web/toggle"
import { createElement, Pin } from "lucide"

function mount(root: HTMLElement) {
  const hint = `pin-${crypto.randomUUID()}`
  root.innerHTML = `
    <div class="flex flex-col items-start gap-2">
      <ui-toggle disabled focusable-when-disabled>
        <button aria-describedby="${hint}" class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none">
          <ui-toggle-icon class="flex">${createElement(Pin, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-toggle-icon>
          Pin to top
        </button>
      </ui-toggle>
      <p id="${hint}" class="text-sm text-muted-foreground">Only owners can pin messages.</p>
    </div>
  `
}

export { mount }

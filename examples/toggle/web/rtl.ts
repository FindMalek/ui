import "@ui-sdk/web/toggle"
import { Bookmark, createElement } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div dir="rtl">
      <ui-toggle>
        <button class="group inline-flex h-8 min-w-8 shrink-0 items-center justify-center gap-1 rounded-2xl ps-2 pe-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50">
          <ui-toggle-icon class="flex">${createElement(Bookmark, { class: "size-4 group-data-pressed:fill-current", "aria-hidden": "true" }).outerHTML}</ui-toggle-icon>
          إشارة مرجعية
        </button>
      </ui-toggle>
    </div>
  `
}

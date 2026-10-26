import "@ui-sdk/web/toolbar"
import "@ui-sdk/web/toggle"
import { Bold, createElement, Italic } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div dir="rtl">
      <ui-toolbar aria-label="تنسيق" class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1">
        <ui-toggle-group multiple aria-label="نمط النص" class="flex items-center gap-1">
          <ui-toggle value="bold">
            <button aria-label="غامق" class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2 text-sm font-medium outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none">
              ${createElement(Bold, { class: "size-4", "aria-hidden": "true" }).outerHTML}
            </button>
          </ui-toggle>
          <ui-toggle value="italic">
            <button aria-label="مائل" class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2 text-sm font-medium outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none">
              ${createElement(Italic, { class: "size-4", "aria-hidden": "true" }).outerHTML}
            </button>
          </ui-toggle>
        </ui-toggle-group>
        <ui-toolbar-separator class="mx-1 h-5 w-px shrink-0 bg-border"></ui-toolbar-separator>
        <ui-toolbar-button>
          <button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none">حفظ</button>
        </ui-toolbar-button>
      </ui-toolbar>
    </div>
  `
}

export { mount }

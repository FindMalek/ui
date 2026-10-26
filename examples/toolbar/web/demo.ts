import "@ui-sdk/web/toolbar"
import "@ui-sdk/web/toggle"
import "@ui-sdk/web/menu"
import { Bold, ChevronDown, createElement, Italic, Underline } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-toolbar aria-label="Formatting" class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1">
      <ui-toggle-group multiple aria-label="Text style" class="flex items-center gap-1">
        <ui-toggle value="bold">
          <button aria-label="Bold" class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2 text-sm font-medium outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none">
            ${createElement(Bold, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-toggle>
        <ui-toggle value="italic">
          <button aria-label="Italic" class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2 text-sm font-medium outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none">
            ${createElement(Italic, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-toggle>
        <ui-toggle value="underline">
          <button aria-label="Underline" class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2 text-sm font-medium outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none">
            ${createElement(Underline, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-toggle>
      </ui-toggle-group>
      <ui-toolbar-separator class="mx-1 h-5 w-px shrink-0 bg-border"></ui-toolbar-separator>
      <ui-menu>
        <ui-toolbar-button>
          <ui-menu-trigger>
            <button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none data-open:bg-muted">
              Sans
              ${createElement(ChevronDown, { class: "size-4 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
            </button>
          </ui-menu-trigger>
        </ui-toolbar-button>
        <ui-menu-content class="max-h-(--available-height) overflow-x-hidden overflow-y-auto rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none min-w-36">
          ${["Sans", "Serif", "Mono"].map((font) => `<ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 leading-5">${font}</ui-menu-item>`).join("")}
        </ui-menu-content>
      </ui-menu>
    </ui-toolbar>
  `
}

export { mount }

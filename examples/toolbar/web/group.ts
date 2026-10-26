import "@ui-sdk/web/toolbar"
import { Copy, createElement, Download, Redo, Undo } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-toolbar aria-label="Editor" class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1">
      <ui-toolbar-group aria-label="Clipboard" class="flex items-center gap-1">
        <ui-toolbar-button>
          <button aria-label="Copy" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none">
            ${createElement(Copy, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-toolbar-button>
        <ui-toolbar-button>
          <button aria-label="Download" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none">
            ${createElement(Download, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-toolbar-button>
      </ui-toolbar-group>
      <ui-toolbar-separator class="mx-1 h-5 w-px shrink-0 bg-border"></ui-toolbar-separator>
      <ui-toolbar-group disabled aria-label="History" class="flex items-center gap-1">
        <ui-toolbar-button>
          <button aria-label="Undo" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none">
            ${createElement(Undo, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-toolbar-button>
        <ui-toolbar-button>
          <button aria-label="Redo" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none">
            ${createElement(Redo, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-toolbar-button>
      </ui-toolbar-group>
    </ui-toolbar>
  `
}

export { mount }

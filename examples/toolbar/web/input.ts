import "@ui-sdk/web/toolbar"
import "@ui-sdk/web/number-input"
import { Bold, createElement, Search } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-toolbar aria-label="Text" class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1">
      <ui-toolbar-button>
        <button aria-label="Bold" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none">
          ${createElement(Bold, { class: "size-4", "aria-hidden": "true" }).outerHTML}
        </button>
      </ui-toolbar-button>
      <ui-number-input default-value="14" min="8" max="72">
        <ui-toolbar-input>
          <ui-number-input-control>
            <input aria-label="Font size" class="h-8 w-14 min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base tabular-nums outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm motion-reduce:transition-none" />
          </ui-number-input-control>
        </ui-toolbar-input>
      </ui-number-input>
      <ui-toolbar-input>
        <input aria-label="Find" placeholder="Find…" class="h-8 w-28 min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm motion-reduce:transition-none" />
      </ui-toolbar-input>
      <ui-toolbar-button>
        <button aria-label="Search" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none">
          ${createElement(Search, { class: "size-4", "aria-hidden": "true" }).outerHTML}
        </button>
      </ui-toolbar-button>
    </ui-toolbar>
  `
}

export { mount }

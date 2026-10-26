import "@ui-sdk/web/number-input"
import { createElement, Minus, Plus } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-number-input default-value="1" min="0">
      <ui-number-input-group class="flex h-8 w-40 items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 px-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30">
        <ui-number-input-decrement>
          <button aria-label="Decrease" class="flex size-6 shrink-0 items-center justify-center rounded-xl text-muted-foreground outline-none select-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50">
            ${createElement(Minus, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-number-input-decrement>
        <ui-number-input-control>
          <input aria-label="Quantity" class="h-full w-full min-w-0 bg-transparent px-1 text-center text-base tabular-nums outline-none data-disabled:opacity-50 md:text-sm" />
        </ui-number-input-control>
        <ui-number-input-increment>
          <button aria-label="Increase" class="flex size-6 shrink-0 items-center justify-center rounded-xl text-muted-foreground outline-none select-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50">
            ${createElement(Plus, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-number-input-increment>
      </ui-number-input-group>
    </ui-number-input>
  `
}

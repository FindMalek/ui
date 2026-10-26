import "@ui-sdk/web/number-input"
import "@ui-sdk/web/field"
import { createElement, Minus, Plus } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-field class="flex flex-col gap-2">
      <ui-field-label class="text-sm leading-none font-medium">Temperature</ui-field-label>
      <ui-number-input default-value="-2" min="-20" max="40">
        <ui-number-input-group class="flex h-8 w-40 items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 px-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30">
          <ui-number-input-decrement>
            <button aria-label="Colder" title="Colder" class="flex size-6 shrink-0 items-center justify-center rounded-xl text-muted-foreground outline-none select-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50">
              ${createElement(Minus, { class: "size-4", "aria-hidden": "true" }).outerHTML}
            </button>
          </ui-number-input-decrement>
          <ui-number-input-control>
            <input class="h-full w-full min-w-0 bg-transparent px-1 text-center text-base font-medium tabular-nums outline-none md:text-sm text-foreground data-negative:text-muted-foreground" />
          </ui-number-input-control>
          <ui-number-input-increment>
            <button aria-label="Warmer" class="group flex h-6 min-w-6 shrink-0 items-center justify-center rounded-xl text-muted-foreground outline-none select-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50">
              ${createElement(Plus, { class: "size-4 group-data-at-bound:hidden", "aria-hidden": "true" }).outerHTML}
              <span class="hidden text-xs group-data-at-bound:inline">Max</span>
            </button>
          </ui-number-input-increment>
        </ui-number-input-group>
      </ui-number-input>
    </ui-field>
  `
  const field = root.querySelector("ui-number-input") as HTMLElement & {
    format: Intl.NumberFormatOptions
    value: number | null
  }
  field.format = { style: "unit", unit: "celsius" }
  const input = root.querySelector("input")!
  const mark = (value: number | null) => input.toggleAttribute("data-negative", value !== null && value < 0)
  field.addEventListener("valuechange", (event) =>
    mark((event as CustomEvent<{ value: number | null }>).detail.value),
  )
  mark(field.value)
}

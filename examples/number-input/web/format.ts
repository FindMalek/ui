import "@ui-sdk/web/number-input"
import "@ui-sdk/web/field"
import { createElement, Minus, Plus } from "lucide"

const fields = [
  {
    label: "Price",
    defaultValue: 19.99,
    step: 0.01,
    format: { style: "currency", currency: "USD" },
  },
  { label: "Discount", defaultValue: 0.15, step: 0.01, format: { style: "percent" } },
  { label: "Weight", defaultValue: 2.5, step: 0.1, format: { style: "unit", unit: "kilogram" } },
] satisfies { label: string; defaultValue: number; step: number; format: Intl.NumberFormatOptions }[]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col gap-5">
      ${fields
        .map(
          (field) => `
            <ui-field class="flex min-w-0 flex-col gap-2 text-foreground">
              <ui-field-label class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">${field.label}</ui-field-label>
              <ui-number-input default-value="${field.defaultValue}" step="${field.step}" min="0">
                <ui-number-input-group class="flex h-8 w-40 items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 px-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 motion-reduce:transition-none">
                  <ui-number-input-decrement>
                    <button aria-label="Decrease" class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none select-none data-disabled:pointer-events-none data-disabled:opacity-50">
                      ${createElement(Minus, { class: "size-4 shrink-0", "aria-hidden": "true" }).outerHTML}
                    </button>
                  </ui-number-input-decrement>
                  <ui-number-input-control>
                    <input class="h-full w-full min-w-0 border-0 bg-transparent px-1 py-0 text-center text-base text-foreground tabular-nums outline-none data-disabled:opacity-50 md:text-sm" />
                  </ui-number-input-control>
                  <ui-number-input-increment>
                    <button aria-label="Increase" class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none select-none data-disabled:pointer-events-none data-disabled:opacity-50">
                      ${createElement(Plus, { class: "size-4 shrink-0", "aria-hidden": "true" }).outerHTML}
                    </button>
                  </ui-number-input-increment>
                </ui-number-input-group>
              </ui-number-input>
            </ui-field>`,
        )
        .join("")}
    </div>
  `
  root
    .querySelectorAll<HTMLElement & { format: Intl.NumberFormatOptions }>("ui-number-input")
    .forEach((el, index) => {
      el.format = fields[index].format
    })
}

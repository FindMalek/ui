import "@ui-sdk/web/number-input"
import "@ui-sdk/web/field"
import { createElement, Minus, Plus } from "lucide"

let count = 0

export function mount(root: HTMLElement) {
  const formId = `order-${++count}`
  root.innerHTML = `
    <div class="flex flex-col gap-4">
      <form id="${formId}" class="flex flex-col gap-4">
        <ui-field class="flex min-w-0 flex-col gap-2 text-foreground">
          <ui-field-label class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">Quantity</ui-field-label>
          <ui-number-input name="quantity" default-value="2" min="1">
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
        </ui-field>
        <ui-field class="flex min-w-0 flex-col gap-2 text-foreground">
          <ui-field-label class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">Tip</ui-field-label>
          <ui-number-input id="tip" name="tip" default-value="1234.5" min="0" step="0.01">
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
        </ui-field>
        <div class="flex flex-wrap gap-2">
          <button type="submit" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none">Save</button>
          <button type="reset" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none">Reset</button>
        </div>
      </form>
      <ui-field class="flex flex-col gap-2 border-t border-border pt-4">
        <ui-field-label class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">Gift cards</ui-field-label>
        <ui-number-input name="gift-cards" form="${formId}" default-value="0" min="0">
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
      </ui-field>
      <output class="min-h-5 text-sm text-muted-foreground"></output>
    </div>
  `
  const tip = root.querySelector("#tip") as HTMLElement & { format: Intl.NumberFormatOptions }
  tip.format = { style: "currency", currency: "USD" }
  const form = root.querySelector("form")!
  const submitted = root.querySelector("output")!
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    const data = [...new FormData(form)].map(([name, value]) => `${name}=${value}`)
    submitted.textContent = `Submitted: ${data.join(", ")}`
  })
  form.addEventListener("reset", () => (submitted.textContent = ""))
}

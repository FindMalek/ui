import "@ui-sdk/web/number-input"
import "@ui-sdk/web/field"
import { createElement, Minus, Plus } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <form class="flex flex-col gap-4">
      <ui-field class="flex min-w-0 flex-col gap-2 text-foreground">
        <ui-field-label class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">Age</ui-field-label>
        <ui-number-input name="age" required min="18" max="120">
          <ui-number-input-group class="flex h-8 w-40 items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 px-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 motion-reduce:transition-none has-aria-invalid:border-foreground/50 has-aria-invalid:ring-3 has-aria-invalid:ring-foreground/10">
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
        <div class="min-h-5"><ui-field-error class="min-h-5 text-sm text-foreground" match="valueMissing">Enter your age.</ui-field-error></div>
      </ui-field>
      <button type="submit" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none">Continue</button>
      <output class="min-h-5 text-sm text-muted-foreground"></output>
    </form>
  `
  const form = root.querySelector("form")!
  const output = root.querySelector("output")!
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    output.textContent = `Submitted: age=${new FormData(form).get("age")}`
  })
  root.querySelector("ui-number-input")!.addEventListener("valuechange", () => (output.textContent = ""))
}

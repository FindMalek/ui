import "@ui-sdk/web/checkbox"
import { Check, createElement } from "lucide"

const toppings = [
  { value: "cheese", label: "Cheese" },
  { value: "mushrooms", label: "Mushrooms" },
  { value: "olives", label: "Olives" },
  { value: "peppers", label: "Peppers" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-xs flex-col gap-3">
      <h3 id="form-toppings" class="m-0 text-sm font-medium text-foreground">Toppings</h3>
      <p class="m-0 -mt-2 text-sm text-muted-foreground">Choose at least one.</p>
      <ui-checkbox-group
        class="flex flex-col gap-3"
        aria-labelledby="form-toppings"
        name="toppings"
        form="toppings-form"
        default-value="cheese"
        required
      >
        ${toppings
          .map(
            (topping) => `
              <label class="flex w-fit items-center gap-3 text-sm">
                <ui-checkbox class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none" value="${topping.value}">
                  <ui-checkbox-indicator class="grid place-content-center">
                    ${createElement(Check, { class: "size-3.5", "aria-hidden": "true" }).outerHTML}
                  </ui-checkbox-indicator>
                </ui-checkbox>
                ${topping.label}
              </label>
            `,
          )
          .join("")}
      </ui-checkbox-group>
      <form id="toppings-form" class="mt-2 flex gap-2">
        <button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-colors hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30" type="submit">
          Submit
        </button>
        <button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30" type="reset">
          Reset
        </button>
      </form>
      <output class="block min-h-5 text-sm text-muted-foreground"></output>
    </div>
  `
  const form = root.querySelector("form")!
  const result = root.querySelector("output")!
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    result.textContent = `toppings: ${new FormData(form).getAll("toppings").join(", ")}`
  })
  form.addEventListener("reset", () => (result.hidden = true))
}

export { mount }

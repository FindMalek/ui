import "@ui-sdk/web/select"
import "@ui-sdk/web/field"
import { Check, ChevronDown, createElement } from "lucide"

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes" },
  { value: "pineapple", label: "Pineapple" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <form class="flex w-64 max-w-full flex-col gap-4">
      <ui-field name="fruit" class="flex flex-col gap-2">
        <ui-field-label class="text-sm leading-none font-medium">
          Fruit
        </ui-field-label>
        <ui-select name="fruit" required placeholder="Select a fruit">
          <ui-select-trigger>
            <button class="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent data-invalid:border-foreground data-invalid:ring-3 data-invalid:ring-foreground/20">
              <ui-select-value class="min-w-0 flex-1 truncate text-start"></ui-select-value>
              ${createElement(ChevronDown, { class: "pointer-events-none block size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
            </button>
          </ui-select-trigger>
          <ui-select-content class="max-h-(--available-height) scroll-py-1 overflow-x-hidden overflow-y-auto box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none">
            ${fruits
              .map(
                (fruit) => `
                  <ui-select-item value="${fruit.value}" class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
                    ${fruit.label}
                    <ui-select-item-indicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">${createElement(Check, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-select-item-indicator>
                  </ui-select-item>
                `,
              )
              .join("")}
          </ui-select-content>
        </ui-select>
        <ui-field-description class="m-0 min-h-5 text-sm leading-5 text-muted-foreground">
          We deliver it tomorrow.
        </ui-field-description>
        <div class="min-h-5"><ui-field-error match="valueMissing" class="m-0 text-sm leading-5 font-medium">
          Pick a fruit to order.
        </ui-field-error></div>
      </ui-field>
      <button type="submit" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-primary-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-primary/80 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50">
        Order
      </button>
      <output class="block min-h-10 text-sm leading-5 break-all text-muted-foreground"></output>
    </form>
  `
  const form = root.querySelector("form")!
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    root.querySelector("output")!.textContent = `Ordered ${new FormData(form).get("fruit")}.`
  })
}

export { mount }

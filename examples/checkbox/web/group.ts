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
      <h3 id="basic-toppings" class="m-0 text-sm font-medium text-foreground">Toppings</h3>
      <ui-checkbox-group class="flex flex-col gap-3" aria-labelledby="basic-toppings" default-value="cheese">
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
    </div>
  `
}

export { mount }

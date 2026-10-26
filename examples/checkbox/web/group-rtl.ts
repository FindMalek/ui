import "@ui-sdk/web/checkbox"
import { Check, createElement } from "lucide"

const toppings = [
  { value: "cheese", label: "جبن" },
  { value: "mushrooms", label: "فطر" },
  { value: "olives", label: "زيتون" },
  { value: "peppers", label: "فلفل" },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div dir="rtl" class="flex w-full max-w-xs flex-col gap-3">
      <h3 id="rtl-toppings" class="text-sm font-medium">الإضافات</h3>
      <ui-checkbox-group class="flex flex-col gap-3" aria-labelledby="rtl-toppings" default-value="cheese">
        ${toppings
          .map(
            (topping) => `
              <label class="flex w-fit items-center gap-3 text-sm">
                <ui-checkbox class="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:opacity-50" value="${topping.value}">
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

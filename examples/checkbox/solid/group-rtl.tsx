import { Checkbox, CheckboxGroup, CheckboxIndicator } from "@ui-sdk/solid/checkbox"
import { For } from "solid-js"

const toppings = [
  { value: "cheese", label: "جبن" },
  { value: "mushrooms", label: "فطر" },
  { value: "olives", label: "زيتون" },
  { value: "peppers", label: "فلفل" },
]

export function Example() {
  return (
    <div dir="rtl" class="flex w-full max-w-xs flex-col gap-3">
      <h3 id="rtl-toppings" class="text-sm font-medium">
        الإضافات
      </h3>
      <CheckboxGroup class="flex flex-col gap-3" aria-labelledby="rtl-toppings" defaultValue={["cheese"]}>
        <For each={toppings}>
          {(topping) => (
            <label class="flex w-fit items-center gap-3 text-sm">
              <Checkbox
                class="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:opacity-50"
                value={topping.value}
              >
                <CheckboxIndicator class="grid place-content-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                    class="size-3.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </CheckboxIndicator>
              </Checkbox>
              {topping.label}
            </label>
          )}
        </For>
      </CheckboxGroup>
    </div>
  )
}

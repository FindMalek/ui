import { Checkbox, CheckboxGroup, CheckboxIndicator } from "@ui-sdk/solid/checkbox"
import { For } from "solid-js"

const toppings = [
  { value: "cheese", label: "Cheese" },
  { value: "mushrooms", label: "Mushrooms" },
  { value: "olives", label: "Olives" },
  { value: "peppers", label: "Peppers" },
]

function Example() {
  return (
    <div class="flex w-full max-w-xs flex-col gap-3">
      <h3 id="basic-toppings" class="m-0 text-sm font-medium text-foreground">
        Toppings
      </h3>
      <CheckboxGroup class="flex flex-col gap-3" aria-labelledby="basic-toppings" defaultValue={["cheese"]}>
        <For each={toppings}>
          {(topping) => (
            <label class="flex w-fit items-center gap-3 text-sm">
              <Checkbox
                class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
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

export { Example }

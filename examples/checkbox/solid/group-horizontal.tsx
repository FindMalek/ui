import { Checkbox, CheckboxGroup, CheckboxIndicator } from "@ui-sdk/solid/checkbox"
import { For } from "solid-js"

const days = [
  { value: "mon", label: "Mon" },
  { value: "tue", label: "Tue" },
  { value: "wed", label: "Wed" },
  { value: "thu", label: "Thu" },
  { value: "fri", label: "Fri" },
  { value: "sat", label: "Sat" },
  { value: "sun", label: "Sun" },
]

export function Example() {
  return (
    <div class="flex w-full max-w-md flex-col gap-3">
      <h3 id="horizontal-days" class="text-sm font-medium">
        Repeat on
      </h3>
      <CheckboxGroup
        class="flex flex-wrap gap-x-5 gap-y-3"
        aria-labelledby="horizontal-days"
        defaultValue={["mon", "wed", "fri"]}
      >
        <For each={days}>
          {(day) => (
            <label class="flex w-fit items-center gap-3 text-sm">
              <Checkbox
                class="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:opacity-50"
                value={day.value}
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
              {day.label}
            </label>
          )}
        </For>
      </CheckboxGroup>
    </div>
  )
}

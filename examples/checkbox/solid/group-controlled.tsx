import { createCheckboxGroupController } from "@ui-sdk/core/checkbox"
import { Checkbox, CheckboxGroup, CheckboxIndicator } from "@ui-sdk/solid/checkbox"
import { createSignal, For } from "solid-js"

type Day = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun"

const days: { value: Day; label: string }[] = [
  { value: "mon", label: "Mon" },
  { value: "tue", label: "Tue" },
  { value: "wed", label: "Wed" },
  { value: "thu", label: "Thu" },
  { value: "fri", label: "Fri" },
  { value: "sat", label: "Sat" },
  { value: "sun", label: "Sun" },
]

const weekdays: Day[] = ["mon", "tue", "wed", "thu", "fri"]

function Example() {
  const schedule = createCheckboxGroupController<Day>()
  const [value, setValue] = createSignal<Day[]>(["mon", "tue"])
  const [reason, setReason] = createSignal("")

  return (
    <div class="flex w-full max-w-md flex-col gap-3">
      <h3 id="controlled-days" class="m-0 text-sm font-medium text-foreground">
        Working days
      </h3>
      <CheckboxGroup
        class="flex flex-wrap gap-x-5 gap-y-3"
        aria-labelledby="controlled-days"
        value={value()}
        onValueChange={(next, details) => {
          setValue(next)
          setReason(details.reason)
        }}
        controller={schedule}
      >
        <For each={days}>
          {(day) => (
            <label class="flex w-fit items-center gap-3 text-sm">
              <Checkbox
                class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
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
      <div class="mt-1 flex flex-wrap gap-2">
        <button
          type="button"
          class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
          onClick={() => schedule.setValue(weekdays)}
        >
          Select weekdays
        </button>
        <button
          type="button"
          class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
          onClick={() => schedule.setValue([])}
        >
          Clear
        </button>
      </div>

      <output class="block min-h-5 text-sm text-muted-foreground">
        Value: {JSON.stringify(value())}
        {reason() && `, last change: ${reason()}`}
      </output>
    </div>
  )
}

export { Example }

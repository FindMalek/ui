import { createUniqueId } from "solid-js"
import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/solid/radio"
import { For } from "solid-js"

const plans = [
  { value: "free", label: "Free" },
  { value: "pro", label: "Pro" },
  { value: "team", label: "Team" },
]

function Example() {
  const id = createUniqueId()
  return (
    <div class="flex flex-col gap-3">
      <div class="flex flex-col gap-1.5">
        <span class="text-sm font-medium" id={`${id}-current-plan`}>
          Your plan
        </span>
        <p class="text-sm text-muted-foreground" id={`${id}-current-plan-hint`}>
          Ask an admin to change plans.
        </p>
      </div>
      <RadioGroup
        class="flex flex-col gap-3"
        defaultValue="pro"
        readOnly
        aria-labelledby={`${id}-current-plan`}
        aria-describedby={`${id}-current-plan-hint`}
      >
        <For each={plans}>
          {(plan) => (
            <label class="flex w-fit items-center gap-3 text-sm">
              <Radio
                class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
                value={plan.value}
              >
                <RadioIndicator class="size-2 rounded-full bg-primary-foreground" />
              </Radio>
              {plan.label}
            </label>
          )}
        </For>
      </RadioGroup>
    </div>
  )
}

export { Example }

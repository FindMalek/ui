import { Field, FieldDescription, FieldLabel } from "@ui-sdk/solid/field"
import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/solid/radio"
import { For } from "solid-js"

const plans = [
  { value: "monthly", label: "Monthly ($9.99/month)" },
  { value: "yearly", label: "Yearly ($99.99/year)" },
  { value: "lifetime", label: "Lifetime ($299.99)" },
]

export function Example() {
  return (
    <Field class="flex w-full max-w-sm flex-col gap-3">
      <FieldLabel class="text-sm leading-snug font-medium">Subscription plan</FieldLabel>
      <FieldDescription class="text-sm text-muted-foreground">
        Yearly and lifetime plans offer significant savings.
      </FieldDescription>
      <RadioGroup class="flex flex-col gap-3" name="plan" defaultValue="monthly">
        <For each={plans}>
          {(plan) => (
            <label class="flex w-fit items-center gap-3 text-sm">
              <Radio
                class="flex size-4 shrink-0 items-center justify-center rounded-full border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50"
                value={plan.value}
              >
                <RadioIndicator class="size-2 rounded-full bg-primary-foreground" />
              </Radio>
              {plan.label}
            </label>
          )}
        </For>
      </RadioGroup>
    </Field>
  )
}

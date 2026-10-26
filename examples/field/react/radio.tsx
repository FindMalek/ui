import { Field, FieldDescription, FieldLabel } from "@ui-sdk/react/field"
import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/react/radio"

const plans = [
  { value: "monthly", label: "Monthly ($9.99/month)" },
  { value: "yearly", label: "Yearly ($99.99/year)" },
  { value: "lifetime", label: "Lifetime ($299.99)" },
]

export function Example() {
  return (
    <Field className="flex w-full max-w-sm flex-col gap-3">
      <FieldLabel className="text-sm leading-snug font-medium">Subscription plan</FieldLabel>
      <FieldDescription className="text-sm text-muted-foreground">
        Yearly and lifetime plans offer significant savings.
      </FieldDescription>
      <RadioGroup className="flex flex-col gap-3" name="plan" defaultValue="monthly">
        {plans.map((plan) => (
          <label key={plan.value} className="flex w-fit items-center gap-3 text-sm">
            <Radio
              className="flex size-4 shrink-0 items-center justify-center rounded-full border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50"
              value={plan.value}
            >
              <RadioIndicator className="size-2 rounded-full bg-primary-foreground" />
            </Radio>
            {plan.label}
          </label>
        ))}
      </RadioGroup>
    </Field>
  )
}

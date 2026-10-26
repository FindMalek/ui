import { FieldLegend, FieldSet } from "@ui-sdk/react/field"
import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/react/radio"

const plans = [
  { value: "monthly", label: "Monthly", price: "$12 a month" },
  { value: "yearly", label: "Yearly", price: "$120 a year" },
]

export function Example() {
  return (
    <FieldSet className="flex w-full max-w-sm min-w-0 flex-col gap-3 text-foreground m-0 min-w-0 border-0 p-0">
      <FieldLegend render={<div />} className="m-0 p-0 text-base font-medium data-disabled:opacity-50">
        Billing period
      </FieldLegend>
      <RadioGroup
        name="period"
        defaultValue="monthly"
        className="flex min-w-0 flex-col gap-3 text-foreground"
      >
        {plans.map((plan) => (
          <label
            key={plan.value}
            className="flex cursor-default items-center justify-between gap-3 rounded-2xl border border-border p-3 text-sm hover:bg-input/40 has-data-checked:bg-input/30"
          >
            <span className="flex items-center gap-3">
              <Radio
                value={plan.value}
                className="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
              >
                <RadioIndicator className="size-2 rounded-full bg-primary-foreground" />
              </Radio>
              {plan.label}
            </span>
            <span className="text-muted-foreground">{plan.price}</span>
          </label>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}

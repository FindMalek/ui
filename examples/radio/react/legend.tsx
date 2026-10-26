"use client"

import * as React from "react"
import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/react/radio"

const plans = [
  { value: "monthly", label: "Monthly", price: "$9.99/month" },
  { value: "yearly", label: "Yearly", price: "$99.99/year" },
  { value: "lifetime", label: "Lifetime", price: "$299.99" },
]

function Example() {
  const id = React.useId()
  return (
    <fieldset className="flex w-full max-w-sm flex-col gap-3">
      <legend className="mb-1.5 text-sm font-medium" id={`${id}-subscription-legend`}>
        Subscription plan
      </legend>
      <p className="text-sm text-muted-foreground" id={`${id}-subscription-hint`}>
        Yearly and lifetime plans offer significant savings.
      </p>
      <RadioGroup
        className="flex flex-col gap-3"
        defaultValue="monthly"
        aria-labelledby={`${id}-subscription-legend`}
        aria-describedby={`${id}-subscription-hint`}
      >
        {plans.map((plan) => (
          <label key={plan.value} className="flex w-fit items-center gap-3 text-sm">
            <Radio
              className="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
              value={plan.value}
            >
              <RadioIndicator className="size-2 rounded-full bg-primary-foreground" />
            </Radio>
            {plan.label} <span className="text-muted-foreground">{plan.price}</span>
          </label>
        ))}
      </RadioGroup>
    </fieldset>
  )
}

export { Example }

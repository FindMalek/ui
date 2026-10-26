"use client"

import * as React from "react"
import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/react/radio"

const plans = [
  { value: "free", label: "Free" },
  { value: "pro", label: "Pro" },
  { value: "team", label: "Team" },
]

function Example() {
  const id = React.useId()
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium" id={`${id}-current-plan`}>
          Your plan
        </span>
        <p className="text-sm text-muted-foreground" id={`${id}-current-plan-hint`}>
          Ask an admin to change plans.
        </p>
      </div>
      <RadioGroup
        className="flex flex-col gap-3"
        defaultValue="pro"
        readOnly
        aria-labelledby={`${id}-current-plan`}
        aria-describedby={`${id}-current-plan-hint`}
      >
        {plans.map((plan) => (
          <label key={plan.value} className="flex w-fit items-center gap-3 text-sm">
            <Radio
              className="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
              value={plan.value}
            >
              <RadioIndicator className="size-2 rounded-full bg-primary-foreground" />
            </Radio>
            {plan.label}
          </label>
        ))}
      </RadioGroup>
    </div>
  )
}

export { Example }

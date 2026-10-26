"use client"

import { createRadioGroupController } from "@ui-sdk/react/radio"
import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/react/radio"
import * as React from "react"

type Plan = "starter" | "pro" | "team"

const plans: { value: Plan; label: string }[] = [
  { value: "starter", label: "Starter" },
  { value: "pro", label: "Pro" },
  { value: "team", label: "Team" },
]

function Example() {
  const [planGroup] = React.useState(() => createRadioGroupController<Plan>())
  const [value, setValue] = React.useState<Plan | null>("pro")
  const [reason, setReason] = React.useState("")

  return (
    <div className="flex w-full max-w-sm flex-col items-start gap-4">
      <RadioGroup
        className="flex flex-col gap-3"
        aria-label="Plan"
        value={value}
        onValueChange={(next, details) => {
          setValue(next)
          setReason(details.reason)
        }}
        controller={planGroup}
      >
        {plans.map((plan) => (
          <label key={plan.value} className="flex w-fit items-center gap-3 text-sm font-medium">
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
      <button
        className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px motion-reduce:transform-none motion-reduce:transition-none"
        type="button"
        onClick={() => planGroup.setValue("team")}
      >
        Choose Team
      </button>
      <div className="flex flex-col gap-2">
        <output className="text-sm text-muted-foreground">
          Value: {value ?? "none"}
          {reason && `, last change: ${reason}`}
        </output>
      </div>
    </div>
  )
}

export { Example }

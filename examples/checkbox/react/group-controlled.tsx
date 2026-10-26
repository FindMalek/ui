"use client"

import * as React from "react"
import { createCheckboxGroupController } from "@ui-sdk/core/checkbox"
import { Checkbox, CheckboxGroup, CheckboxIndicator } from "@ui-sdk/react/checkbox"
import { Check } from "lucide-react"

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
  const [schedule] = React.useState(() => createCheckboxGroupController<Day>())
  const [value, setValue] = React.useState<Day[]>(["mon", "tue"])
  const [reason, setReason] = React.useState("")

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <h3 id="controlled-days" className="m-0 text-sm font-medium text-foreground">
        Working days
      </h3>
      <CheckboxGroup
        className="flex flex-wrap gap-x-5 gap-y-3"
        aria-labelledby="controlled-days"
        value={value}
        onValueChange={(next, details) => {
          setValue(next)
          setReason(details.reason)
        }}
        controller={schedule}
      >
        {days.map((day) => (
          <label key={day.value} className="flex w-fit items-center gap-3 text-sm">
            <Checkbox
              className="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
              value={day.value}
            >
              <CheckboxIndicator className="grid place-content-center">
                <Check aria-hidden="true" className="size-3.5" />
              </CheckboxIndicator>
            </Checkbox>
            {day.label}
          </label>
        ))}
      </CheckboxGroup>
      <div className="mt-1 flex flex-wrap gap-2">
        <button
          type="button"
          className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
          onClick={() => schedule.setValue(weekdays)}
        >
          Select weekdays
        </button>
        <button
          type="button"
          className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
          onClick={() => schedule.setValue([])}
        >
          Clear
        </button>
      </div>

      <output className="block min-h-5 text-sm text-muted-foreground">
        Value: {JSON.stringify(value)}
        {reason && `, last change: ${reason}`}
      </output>
    </div>
  )
}

export { Example }

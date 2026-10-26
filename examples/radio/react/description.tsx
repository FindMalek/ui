"use client"

import * as React from "react"
import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/react/radio"

const options = [
  { value: "default", label: "Default", description: "Standard spacing for most use cases." },
  { value: "comfortable", label: "Comfortable", description: "More space between elements." },
  { value: "compact", label: "Compact", description: "Minimal spacing for dense layouts." },
]

function Example() {
  const id = React.useId()
  return (
    <RadioGroup
      className="flex w-full max-w-sm flex-col gap-4"
      defaultValue="comfortable"
      aria-label="Density"
    >
      {options.map((option) => (
        <div key={option.value} className="flex items-start gap-3">
          <Radio
            className="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
            value={option.value}
            id={`${id}-density-${option.value}`}
            aria-describedby={`${id}-density-${option.value}-description`}
          >
            <RadioIndicator className="size-2 rounded-full bg-primary-foreground" />
          </Radio>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm leading-4 font-medium" htmlFor={`${id}-density-${option.value}`}>
              {option.label}
            </label>
            <p className="text-sm text-muted-foreground" id={`${id}-density-${option.value}-description`}>
              {option.description}
            </p>
          </div>
        </div>
      ))}
    </RadioGroup>
  )
}

export { Example }

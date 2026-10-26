"use client"

import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/react/radio"
import * as React from "react"

const methods = [
  { value: "standard", label: "Standard", detail: "Free, 5 to 7 days" },
  { value: "express", label: "Express", detail: "$9, 2 days" },
  { value: "overnight", label: "Overnight", detail: "$24, next day" },
]

function Example() {
  const id = React.useId()
  const [submitted, setSubmitted] = React.useState("")

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <RadioGroup
        className="flex flex-col gap-3"
        aria-label="Shipping"
        name="shipping"
        form={`${id}-shipping-form`}
        required
        defaultValue="standard"
      >
        {methods.map((method) => (
          <label key={method.value} className="flex w-fit items-center gap-3 text-sm">
            <Radio
              className="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
              value={method.value}
            >
              <RadioIndicator className="size-2 rounded-full bg-primary-foreground" />
            </Radio>
            {method.label} <span className="text-muted-foreground">{method.detail}</span>
          </label>
        ))}
      </RadioGroup>
      <form
        id={`${id}-shipping-form`}
        className="flex gap-2"
        onSubmit={(event) => {
          event.preventDefault()
          setSubmitted(JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))))
        }}
        onReset={() => setSubmitted("")}
      >
        <button
          className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px motion-reduce:transform-none motion-reduce:transition-none"
          type="submit"
        >
          Submit
        </button>
        <button
          className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px motion-reduce:transform-none motion-reduce:transition-none"
          type="reset"
        >
          Reset
        </button>
      </form>
      {submitted && <output className="text-sm text-muted-foreground">Submitted: {submitted}</output>}
    </div>
  )
}

export { Example }

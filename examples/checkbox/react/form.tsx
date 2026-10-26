"use client"

import * as React from "react"
import { Checkbox, CheckboxIndicator } from "@ui-sdk/react/checkbox"
import { Check } from "lucide-react"

const formId = "checkbox-signup"

function Example() {
  const [submitted, setSubmitted] = React.useState("")

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <form
        id={formId}
        className="flex flex-col gap-4 rounded-2xl border border-border p-4"
        onSubmit={(event) => {
          event.preventDefault()
          const entries = [...new FormData(event.currentTarget)].map(([name, value]) => `${name}=${value}`)
          setSubmitted(entries.join(", ") || "nothing")
        }}
        onReset={() => setSubmitted("")}
      >
        <label className="flex items-center gap-3 text-sm font-medium">
          <Checkbox
            className="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
            name="terms"
            value="yes"
            required
          >
            <CheckboxIndicator className="grid place-content-center">
              <Check aria-hidden="true" className="size-3.5" />
            </CheckboxIndicator>
          </Checkbox>
          I agree to the terms
        </label>
        <div className="flex gap-2">
          <button
            className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-colors hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
            type="submit"
          >
            Submit
          </button>
          <button
            className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
            type="reset"
          >
            Reset
          </button>
        </div>
      </form>
      <label className="flex items-center gap-3 text-sm font-medium">
        <Checkbox
          className="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
          form={formId}
          name="newsletter"
          value="weekly"
          defaultChecked
        >
          <CheckboxIndicator className="grid place-content-center">
            <Check aria-hidden="true" className="size-3.5" />
          </CheckboxIndicator>
        </Checkbox>
        Send me the weekly newsletter
      </label>
      <output className="block min-h-5 text-sm text-muted-foreground">
        {submitted && `Submitted: ${submitted}`}
      </output>
    </div>
  )
}

export { Example }

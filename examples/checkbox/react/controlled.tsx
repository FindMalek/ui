"use client"

import * as React from "react"
import { createCheckboxController, type CheckedState } from "@ui-sdk/core/checkbox"
import { Checkbox, CheckboxIndicator } from "@ui-sdk/react/checkbox"
import { Check } from "lucide-react"

function Example() {
  const [updates] = React.useState(() => createCheckboxController())
  const [checked, setChecked] = React.useState<CheckedState>(false)
  const [reason, setReason] = React.useState("")

  return (
    <div className="flex w-full max-w-sm flex-col items-start gap-4">
      <label className="flex items-center gap-3 text-sm font-medium">
        <Checkbox
          className="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
          checked={checked}
          onCheckedChange={(next, details) => {
            setChecked(next)
            setReason(details.reason)
          }}
          controller={updates}
        >
          <CheckboxIndicator className="grid place-content-center">
            <Check aria-hidden="true" className="size-3.5" />
          </CheckboxIndicator>
        </Checkbox>
        Email me about product updates
      </label>
      <button
        type="button"
        className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
        onClick={() => updates.toggle()}
      >
        Toggle from outside
      </button>
      <output className="block min-h-5 text-sm text-muted-foreground">
        Checked: {String(checked)}
        {reason && `, last change: ${reason}`}
      </output>
    </div>
  )
}

export { Example }

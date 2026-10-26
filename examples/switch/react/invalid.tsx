"use client"

import * as React from "react"
import { Field, FieldError, FieldLabel } from "@ui-sdk/react/field"
import { Switch, SwitchThumb } from "@ui-sdk/react/switch"

function Example() {
  const [submitted, setSubmitted] = React.useState(false)

  return (
    <form
      className="flex w-full max-w-sm flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <Field className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Switch
            className="relative inline-flex h-5 w-8 shrink-0 cursor-default appearance-none items-center rounded-2xl border-2 border-transparent bg-input/90 p-0 outline-none transition-colors after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
            name="terms"
            required
            onCheckedChange={() => setSubmitted(false)}
          >
            <SwitchThumb className="pointer-events-none block size-4 shrink-0 rounded-2xl bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] motion-reduce:transition-none" />
          </Switch>
          <FieldLabel className="text-sm font-medium">I agree to the terms</FieldLabel>
        </div>
        <div className="min-h-10">
          <FieldError className="m-0 text-sm text-muted-foreground" match="valueMissing">
            You must agree to the terms to continue.
          </FieldError>
        </div>
      </Field>
      <button
        className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-colors hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 w-fit"
        type="submit"
      >
        Continue
      </button>
      <output className="m-0 block min-h-5 text-sm text-muted-foreground">
        {submitted ? "Thanks, you're all set." : ""}
      </output>
    </form>
  )
}

export { Example }

"use client"

import * as React from "react"
import { Switch, SwitchThumb } from "@ui-sdk/react/switch"

function Example() {
  const [submitted, setSubmitted] = React.useState("")

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <form
        id="email-preferences"
        className="flex flex-col gap-4"
        onSubmit={(event) => {
          event.preventDefault()
          const data = [...new FormData(event.currentTarget)].map(([name, value]) => `${name}=${value}`)
          setSubmitted(data.join(", ") || "nothing")
        }}
        onReset={() => setSubmitted("")}
      >
        <fieldset className="m-0 flex min-w-0 flex-col gap-3 border-0 p-0">
          <legend className="m-0 mb-3 p-0 text-sm font-medium">Email notifications</legend>
          <label className="flex items-center justify-between gap-6 text-sm">
            Marketing emails
            <Switch
              className="relative inline-flex h-5 w-8 shrink-0 cursor-default appearance-none items-center rounded-2xl border-2 border-transparent bg-input/90 p-0 outline-none transition-colors after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
              name="marketing"
            >
              <SwitchThumb className="pointer-events-none block size-4 shrink-0 rounded-2xl bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] motion-reduce:transition-none" />
            </Switch>
          </label>
          <label className="flex items-center justify-between gap-6 text-sm">
            Security alerts
            <Switch
              className="relative inline-flex h-5 w-8 shrink-0 cursor-default appearance-none items-center rounded-2xl border-2 border-transparent bg-input/90 p-0 outline-none transition-colors after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
              name="security"
              defaultChecked
            >
              <SwitchThumb className="pointer-events-none block size-4 shrink-0 rounded-2xl bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] motion-reduce:transition-none" />
            </Switch>
          </label>
          <label className="flex items-center justify-between gap-6 text-sm">
            Weekly digest
            <Switch
              className="relative inline-flex h-5 w-8 shrink-0 cursor-default appearance-none items-center rounded-2xl border-2 border-transparent bg-input/90 p-0 outline-none transition-colors after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
              name="digest"
              value="weekly"
              defaultChecked
            >
              <SwitchThumb className="pointer-events-none block size-4 shrink-0 rounded-2xl bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] motion-reduce:transition-none" />
            </Switch>
          </label>
        </fieldset>
        <div className="flex gap-2">
          <button
            className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-colors hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
            type="submit"
          >
            Save
          </button>
          <button
            className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
            type="reset"
          >
            Reset
          </button>
        </div>
      </form>
      <div className="border-t border-border pt-4">
        <label className="flex items-center justify-between gap-6 text-sm">
          Join the beta
          <Switch
            className="relative inline-flex h-5 w-8 shrink-0 cursor-default appearance-none items-center rounded-2xl border-2 border-transparent bg-input/90 p-0 outline-none transition-colors after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
            name="beta"
            form="email-preferences"
          >
            <SwitchThumb className="pointer-events-none block size-4 shrink-0 rounded-2xl bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] motion-reduce:transition-none" />
          </Switch>
        </label>
      </div>
      <output className="m-0 block min-h-5 text-sm text-muted-foreground">
        {submitted ? `Submitted: ${submitted}` : ""}
      </output>
    </div>
  )
}

export { Example }

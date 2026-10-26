import { Field, FieldLabel, FieldLegend, FieldSet } from "@ui-sdk/react/field"
import { Input } from "@ui-sdk/react/input"
import { Switch, SwitchThumb } from "@ui-sdk/react/switch"
import * as React from "react"

export function Example() {
  const [same, setSame] = React.useState(true)
  return (
    <div className="flex w-full max-w-sm min-w-0 flex-col gap-6 text-foreground">
      <label className="flex cursor-default items-center gap-3 text-sm">
        <Switch
          checked={same}
          onCheckedChange={setSame}
          className="relative inline-flex h-5 w-8 shrink-0 cursor-default appearance-none items-center rounded-2xl border-2 border-transparent bg-input/90 p-0 outline-none transition-colors after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
        >
          <SwitchThumb className="pointer-events-none block size-4 shrink-0 rounded-2xl bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] motion-reduce:transition-none" />
        </Switch>
        Billing address is the same as shipping
      </label>
      <FieldSet disabled={same} className="flex min-w-0 flex-col gap-6 m-0 min-w-0 border-0 p-0">
        <FieldLegend className="mb-3 p-0 text-base font-medium data-disabled:opacity-50">
          Billing address
        </FieldLegend>
        <Field name="billing-street" className="flex min-w-0 flex-col gap-3 text-foreground">
          <FieldLabel className="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">
            Street address
          </FieldLabel>
          <Input
            autoComplete="billing street-address"
            className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50"
          />
        </Field>
        <Field name="billing-city" className="flex min-w-0 flex-col gap-3 text-foreground">
          <FieldLabel className="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">
            City
          </FieldLabel>
          <Input
            autoComplete="billing address-level2"
            className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50"
          />
        </Field>
      </FieldSet>
    </div>
  )
}

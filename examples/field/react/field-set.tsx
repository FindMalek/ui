import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@ui-sdk/react/field"
import { Input } from "@ui-sdk/react/input"

export function Example() {
  return (
    <FieldSet className="flex w-full max-w-sm min-w-0 flex-col gap-6 text-foreground m-0 min-w-0 border-0 p-0">
      <FieldLegend className="mb-3 p-0 text-base font-medium data-disabled:opacity-50">Address</FieldLegend>
      <FieldDescription className="-mt-1.5 text-sm text-muted-foreground">
        We need your address to deliver your order.
      </FieldDescription>
      <FieldGroup className="flex min-w-0 flex-col gap-6">
        <Field name="street" className="flex min-w-0 flex-col gap-3 text-foreground">
          <FieldLabel className="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">
            Street address
          </FieldLabel>
          <Input
            autoComplete="street-address"
            className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50"
          />
        </Field>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field name="city" className="flex min-w-0 flex-col gap-3 text-foreground">
            <FieldLabel className="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">
              City
            </FieldLabel>
            <Input
              autoComplete="address-level2"
              className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50"
            />
          </Field>
          <Field name="postal-code" className="flex min-w-0 flex-col gap-3 text-foreground">
            <FieldLabel className="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">
              Postal code
            </FieldLabel>
            <Input
              autoComplete="postal-code"
              className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50"
            />
          </Field>
        </div>
      </FieldGroup>
    </FieldSet>
  )
}

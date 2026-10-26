import { Field, FieldControl, FieldDescription, FieldLabel } from "@ui-sdk/react/field"

export function Example() {
  return (
    <div className="flex w-full max-w-sm min-w-0 flex-col gap-6 text-foreground">
      <Field className="flex min-w-0 flex-col gap-3 text-foreground">
        <FieldLabel className="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">
          Username
        </FieldLabel>
        <FieldControl
          className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50"
          name="username"
          placeholder="ada"
          autoComplete="username"
        />
        <FieldDescription className="m-0 text-sm text-muted-foreground">
          Choose a unique username for your account.
        </FieldDescription>
      </Field>
    </div>
  )
}

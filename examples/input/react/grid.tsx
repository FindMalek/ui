import { Field, FieldLabel } from "@ui-sdk/react/field"
import { Input } from "@ui-sdk/react/input"

export function Example() {
  return (
    <div className="grid w-full max-w-sm grid-cols-2 gap-4">
      <Field name="first-name" className="flex flex-col gap-2">
        <FieldLabel className="text-sm leading-none font-medium data-disabled:opacity-50 data-invalid:text-destructive">
          First name
        </FieldLabel>
        <Input
          autoComplete="given-name"
          placeholder="Ada"
          className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40"
        />
      </Field>
      <Field name="last-name" className="flex flex-col gap-2">
        <FieldLabel className="text-sm leading-none font-medium data-disabled:opacity-50 data-invalid:text-destructive">
          Last name
        </FieldLabel>
        <Input
          autoComplete="family-name"
          placeholder="Lovelace"
          className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40"
        />
      </Field>
    </div>
  )
}

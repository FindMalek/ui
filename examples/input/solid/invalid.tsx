import { Field, FieldError, FieldLabel } from "@ui-sdk/solid/field"
import { Input } from "@ui-sdk/solid/input"

export function Example() {
  return (
    <Field invalid class="flex w-full max-w-sm flex-col gap-2 text-foreground">
      <FieldLabel class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">
        Email
      </FieldLabel>
      <Input
        type="email"
        defaultValue="ada@example"
        class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm"
      />
      <FieldError match class="min-h-5 text-sm text-foreground">
        Enter an email address like ada@example.com.
      </FieldError>
    </Field>
  )
}

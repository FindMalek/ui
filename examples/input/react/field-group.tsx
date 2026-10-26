import { Field, FieldDescription, FieldLabel } from "@ui-sdk/react/field"
import { Input } from "@ui-sdk/react/input"

export function Example() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Field name="name" className="flex flex-col gap-2">
        <FieldLabel className="text-sm leading-none font-medium data-disabled:opacity-50 data-invalid:text-destructive">
          Name
        </FieldLabel>
        <Input
          placeholder="Ada Lovelace"
          autoComplete="name"
          className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40"
        />
      </Field>
      <Field name="email" className="flex flex-col gap-2">
        <FieldLabel className="text-sm leading-none font-medium data-disabled:opacity-50 data-invalid:text-destructive">
          Email
        </FieldLabel>
        <Input
          type="email"
          placeholder="ada@example.com"
          autoComplete="email"
          className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40"
        />
        <FieldDescription className="text-sm text-muted-foreground">
          We'll never share your email.
        </FieldDescription>
      </Field>
      <Field name="password" className="flex flex-col gap-2">
        <FieldLabel className="text-sm leading-none font-medium data-disabled:opacity-50 data-invalid:text-destructive">
          Password
        </FieldLabel>
        <Input
          type="password"
          autoComplete="new-password"
          className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40"
        />
        <FieldDescription className="text-sm text-muted-foreground">At least 8 characters.</FieldDescription>
      </Field>
    </div>
  )
}

import { Field, FieldControl, FieldDescription, FieldLabel } from "@ui-sdk/solid/field"

export function Example() {
  return (
    <Field class="flex w-full max-w-sm min-w-0 flex-col gap-3 text-foreground">
      <FieldLabel class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">
        Feedback
      </FieldLabel>
      <FieldControl
        render={(props) => <textarea {...props} rows={4} />}
        class="h-28 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm resize-none data-disabled:opacity-50"
        name="feedback"
        placeholder="Your feedback helps us improve."
      />
      <FieldDescription class="m-0 text-sm text-muted-foreground">
        Share your thoughts about our service.
      </FieldDescription>
    </Field>
  )
}

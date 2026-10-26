import { Field, FieldControl, FieldDescription, FieldLabel, FieldLegend, FieldSet } from "@ui-sdk/solid/field"

export function Example() {
  return (
    <FieldSet dir="rtl" class="flex w-full max-w-sm flex-col gap-6">
      <FieldLegend class="mb-3 text-base font-medium data-disabled:opacity-50">العنوان</FieldLegend>
      <FieldDescription class="-mt-1.5 text-sm text-muted-foreground">
        نحتاج عنوانك لتوصيل طلبك.
      </FieldDescription>
      <Field name="street" class="flex flex-col gap-3">
        <FieldLabel class="text-sm leading-snug font-medium data-disabled:opacity-50 data-invalid:text-destructive">
          الشارع
        </FieldLabel>
        <FieldControl class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 md:text-sm dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40" />
      </Field>
      <Field name="city" class="flex flex-col gap-3">
        <FieldLabel class="text-sm leading-snug font-medium data-disabled:opacity-50 data-invalid:text-destructive">
          المدينة
        </FieldLabel>
        <FieldControl class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 md:text-sm dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40" />
      </Field>
    </FieldSet>
  )
}

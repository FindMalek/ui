import { Field, FieldDescription, FieldLabel, FieldLegend, FieldSet } from "@ui-sdk/react/field"
import { Input } from "@ui-sdk/react/input"

export function Example() {
  return (
    <FieldSet dir="rtl" className="flex w-full max-w-sm flex-col gap-6">
      <FieldLegend className="mb-3 text-base font-medium data-disabled:opacity-50">العنوان</FieldLegend>
      <FieldDescription className="-mt-1.5 text-sm text-muted-foreground">
        نحتاج عنوانك لتوصيل طلبك.
      </FieldDescription>
      <Field name="street" className="flex flex-col gap-3">
        <FieldLabel className="text-sm leading-snug font-medium data-disabled:opacity-50 data-invalid:text-destructive">
          الشارع
        </FieldLabel>
        <Input className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 md:text-sm dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40" />
      </Field>
      <Field name="city" className="flex flex-col gap-3">
        <FieldLabel className="text-sm leading-snug font-medium data-disabled:opacity-50 data-invalid:text-destructive">
          المدينة
        </FieldLabel>
        <Input className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 md:text-sm dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40" />
      </Field>
    </FieldSet>
  )
}

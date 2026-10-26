import { Field, FieldDescription, FieldLabel } from "@ui-sdk/react/field"
import { Textarea } from "@ui-sdk/react/textarea"

export function Example() {
  return (
    <Field dir="rtl" name="feedback" className="flex w-full max-w-sm flex-col gap-2">
      <FieldLabel className="text-sm leading-none font-medium data-disabled:opacity-50 data-invalid:text-destructive">
        ملاحظاتك
      </FieldLabel>
      <Textarea
        autoResize
        placeholder="أخبرنا برأيك…"
        className="min-h-16 w-full min-w-0 resize-none rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40 max-h-40"
      />
      <FieldDescription className="text-sm text-muted-foreground">نقرأ كل رسالة.</FieldDescription>
    </Field>
  )
}

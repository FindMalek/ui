import { Checkbox, CheckboxIndicator } from "@ui-sdk/react/checkbox"
import { Field, FieldDescription, FieldLabel } from "@ui-sdk/react/field"
import { Check } from "lucide-react"

export function Example() {
  return (
    <Field className="flex w-full max-w-sm flex-row items-start gap-3">
      <Checkbox
        className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:opacity-50"
        name="usage"
      >
        <CheckboxIndicator className="grid place-content-center">
          <Check className="size-3.5" />
        </CheckboxIndicator>
      </Checkbox>
      <div className="flex flex-col gap-1.5">
        <FieldLabel className="text-sm leading-snug font-medium">Share usage data</FieldLabel>
        <FieldDescription className="text-sm text-muted-foreground">
          Help us improve by sending anonymous crash reports and usage statistics.
        </FieldDescription>
      </div>
    </Field>
  )
}

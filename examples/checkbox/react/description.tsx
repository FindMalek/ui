import { Checkbox, CheckboxIndicator } from "@ui-sdk/react/checkbox"
import { Field, FieldDescription, FieldLabel } from "@ui-sdk/react/field"
import { Check } from "lucide-react"

function Example() {
  return (
    <Field className="flex max-w-sm items-start gap-3">
      <Checkbox className="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none">
        <CheckboxIndicator className="grid place-content-center">
          <Check aria-hidden="true" className="size-3.5" />
        </CheckboxIndicator>
      </Checkbox>
      <div className="flex flex-col gap-1.5">
        <FieldLabel className="text-sm leading-4 font-medium">Accept terms and conditions</FieldLabel>
        <FieldDescription className="text-sm text-muted-foreground">
          By clicking this checkbox, you agree to the terms and conditions.
        </FieldDescription>
      </div>
    </Field>
  )
}

export { Example }

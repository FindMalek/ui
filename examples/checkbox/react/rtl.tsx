import { Checkbox, CheckboxIndicator } from "@ui-sdk/react/checkbox"
import { Check } from "lucide-react"

export function Example() {
  return (
    <div dir="rtl" className="flex flex-col gap-3">
      <label className="flex items-center gap-3 text-sm font-medium">
        <Checkbox className="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:opacity-50">
          <CheckboxIndicator className="grid place-content-center">
            <Check className="size-3.5" />
          </CheckboxIndicator>
        </Checkbox>
        قبول الشروط والأحكام
      </label>
      <label className="flex items-center gap-3 text-sm font-medium">
        <Checkbox
          className="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:opacity-50"
          defaultChecked
        >
          <CheckboxIndicator className="grid place-content-center">
            <Check className="size-3.5" />
          </CheckboxIndicator>
        </Checkbox>
        تفعيل الإشعارات
      </label>
    </div>
  )
}

import { Checkbox, CheckboxGroup, CheckboxIndicator } from "@ui-sdk/react/checkbox"
import { Check } from "lucide-react"

const toppings = [
  { value: "cheese", label: "جبن" },
  { value: "mushrooms", label: "فطر" },
  { value: "olives", label: "زيتون" },
  { value: "peppers", label: "فلفل" },
]

export function Example() {
  return (
    <div dir="rtl" className="flex w-full max-w-xs flex-col gap-3">
      <h3 id="rtl-toppings" className="text-sm font-medium">
        الإضافات
      </h3>
      <CheckboxGroup className="flex flex-col gap-3" aria-labelledby="rtl-toppings" defaultValue={["cheese"]}>
        {toppings.map((topping) => (
          <label key={topping.value} className="flex w-fit items-center gap-3 text-sm">
            <Checkbox
              className="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:opacity-50"
              value={topping.value}
            >
              <CheckboxIndicator className="grid place-content-center">
                <Check className="size-3.5" />
              </CheckboxIndicator>
            </Checkbox>
            {topping.label}
          </label>
        ))}
      </CheckboxGroup>
    </div>
  )
}

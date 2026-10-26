import { Checkbox, CheckboxGroup, CheckboxIndicator } from "@ui-sdk/react/checkbox"
import { FieldDescription, FieldLegend, FieldSet } from "@ui-sdk/react/field"
import { Check } from "lucide-react"

const items = [
  { value: "comments", label: "Comments on your posts" },
  { value: "mentions", label: "Mentions" },
  { value: "follows", label: "New followers" },
]

export function Example() {
  return (
    <FieldSet className="flex w-full max-w-sm min-w-0 flex-col gap-3 text-foreground m-0 min-w-0 border-0 p-0">
      <FieldLegend className="mb-3 p-0 text-base font-medium data-disabled:opacity-50">
        Notifications
      </FieldLegend>
      <FieldDescription className="-mt-1.5 text-sm text-muted-foreground">
        Choose what we email you about.
      </FieldDescription>
      <CheckboxGroup
        name="notify"
        defaultValue={["mentions"]}
        className="flex min-w-0 flex-col gap-3 text-foreground"
      >
        {items.map((item) => (
          <label key={item.value} className="flex cursor-default items-center gap-3 text-sm">
            <Checkbox
              value={item.value}
              className="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
            >
              <CheckboxIndicator className="grid place-content-center">
                <Check aria-hidden="true" className="size-3.5 shrink-0" />
              </CheckboxIndicator>
            </Checkbox>
            {item.label}
          </label>
        ))}
      </CheckboxGroup>
    </FieldSet>
  )
}

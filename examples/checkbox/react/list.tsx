import { Checkbox, CheckboxIndicator } from "@ui-sdk/react/checkbox"
import { Check } from "lucide-react"

const items = [
  { value: "hard-disks", label: "Hard disks", checked: false },
  { value: "external-disks", label: "External disks", checked: true },
  { value: "media", label: "CDs, DVDs and iPods", checked: true },
  { value: "servers", label: "Connected servers", checked: false },
]

function Example() {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="mb-1.5 text-sm font-medium">Show these items on the desktop</legend>
      <p className="m-0 mb-1 text-sm text-muted-foreground">
        Select the items you want to show on the desktop.
      </p>
      {items.map((item) => (
        <label key={item.value} className="flex w-fit items-center gap-3 text-sm">
          <Checkbox
            className="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
            name="desktop"
            value={item.value}
            defaultChecked={item.checked}
          >
            <CheckboxIndicator className="grid place-content-center">
              <Check aria-hidden="true" className="size-3.5" />
            </CheckboxIndicator>
          </Checkbox>
          {item.label}
        </label>
      ))}
    </fieldset>
  )
}

export { Example }

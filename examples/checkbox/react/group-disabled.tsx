import { Checkbox, CheckboxGroup, CheckboxIndicator } from "@ui-sdk/react/checkbox"
import { Check, Minus } from "lucide-react"

const backups = [
  { value: "photos", label: "Photos" },
  { value: "documents", label: "Documents" },
  { value: "messages", label: "Messages" },
]

const folders = [
  { value: "desktop", label: "Desktop", disabled: true },
  { value: "projects", label: "Projects", disabled: false },
  { value: "downloads", label: "Downloads", disabled: false },
]

function Example() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h3 id="disabled-backups" className="m-0 text-sm font-medium text-foreground">
          Backups
        </h3>
        <p className="m-0 -mt-2 text-sm text-muted-foreground">Managed by your organization.</p>
        <CheckboxGroup
          className="flex flex-col gap-3"
          aria-labelledby="disabled-backups"
          defaultValue={["photos", "documents"]}
          disabled
        >
          {backups.map((item) => (
            <label key={item.value} className="flex w-fit items-center gap-3 text-sm text-muted-foreground">
              <Checkbox
                className="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
                value={item.value}
              >
                <CheckboxIndicator className="grid place-content-center">
                  <Check aria-hidden="true" className="size-3.5" />
                </CheckboxIndicator>
              </Checkbox>
              {item.label}
            </label>
          ))}
        </CheckboxGroup>
      </div>
      <div className="flex flex-col gap-3">
        <h3 id="disabled-folders" className="m-0 text-sm font-medium text-foreground">
          Sync folders
        </h3>
        <CheckboxGroup
          className="flex flex-col gap-3"
          aria-labelledby="disabled-folders"
          defaultValue={["desktop"]}
          allValues={folders.map((item) => item.value)}
        >
          <label className="flex w-fit items-center gap-3 text-sm text-muted-foreground">
            <Checkbox
              className="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
              parent
            >
              <CheckboxIndicator className="group grid place-content-center">
                <Check aria-hidden="true" className="size-3.5 group-data-indeterminate:hidden" />
                <Minus aria-hidden="true" className="hidden size-3.5 group-data-indeterminate:block" />
              </CheckboxIndicator>
            </Checkbox>
            Select all
          </label>
          <div className="flex flex-col gap-3 ps-7">
            {folders.map((item) => (
              <label key={item.value} className="flex w-fit items-center gap-3 text-sm text-muted-foreground">
                <Checkbox
                  className="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
                  value={item.value}
                  disabled={item.disabled}
                >
                  <CheckboxIndicator className="grid place-content-center">
                    <Check aria-hidden="true" className="size-3.5" />
                  </CheckboxIndicator>
                </Checkbox>
                {item.label}
              </label>
            ))}
          </div>
        </CheckboxGroup>
      </div>
    </div>
  )
}

export { Example }

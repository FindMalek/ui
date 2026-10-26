import { Checkbox, CheckboxGroup, CheckboxIndicator } from "@ui-sdk/solid/checkbox"
import { For } from "solid-js"

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
    <div class="flex w-full max-w-xs flex-col gap-8">
      <div class="flex flex-col gap-3">
        <h3 id="disabled-backups" class="m-0 text-sm font-medium text-foreground">
          Backups
        </h3>
        <p class="m-0 -mt-2 text-sm text-muted-foreground">Managed by your organization.</p>
        <CheckboxGroup
          class="flex flex-col gap-3"
          aria-labelledby="disabled-backups"
          defaultValue={["photos", "documents"]}
          disabled
        >
          <For each={backups}>
            {(item) => (
              <label class="flex w-fit items-center gap-3 text-sm text-muted-foreground">
                <Checkbox
                  class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
                  value={item.value}
                >
                  <CheckboxIndicator class="grid place-content-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                      class="size-3.5"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </CheckboxIndicator>
                </Checkbox>
                {item.label}
              </label>
            )}
          </For>
        </CheckboxGroup>
      </div>
      <div class="flex flex-col gap-3">
        <h3 id="disabled-folders" class="m-0 text-sm font-medium text-foreground">
          Sync folders
        </h3>
        <CheckboxGroup
          class="flex flex-col gap-3"
          aria-labelledby="disabled-folders"
          defaultValue={["desktop"]}
          allValues={folders.map((item) => item.value)}
        >
          <label class="flex w-fit items-center gap-3 text-sm text-muted-foreground">
            <Checkbox
              class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
              parent
            >
              <CheckboxIndicator class="group grid place-content-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  class="size-3.5 group-data-indeterminate:hidden"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  class="hidden size-3.5 group-data-indeterminate:block"
                >
                  <path d="M5 12h14" />
                </svg>
              </CheckboxIndicator>
            </Checkbox>
            Select all
          </label>
          <div class="flex flex-col gap-3 ps-7">
            <For each={folders}>
              {(item) => (
                <label class="flex w-fit items-center gap-3 text-sm text-muted-foreground">
                  <Checkbox
                    class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
                    value={item.value}
                    disabled={item.disabled}
                  >
                    <CheckboxIndicator class="grid place-content-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                        class="size-3.5"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </CheckboxIndicator>
                  </Checkbox>
                  {item.label}
                </label>
              )}
            </For>
          </div>
        </CheckboxGroup>
      </div>
    </div>
  )
}

export { Example }

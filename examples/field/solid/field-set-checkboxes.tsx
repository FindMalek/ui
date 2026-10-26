import { Checkbox, CheckboxGroup, CheckboxIndicator } from "@ui-sdk/solid/checkbox"
import { FieldDescription, FieldLegend, FieldSet } from "@ui-sdk/solid/field"
import { For } from "solid-js"

const items = [
  { value: "comments", label: "Comments on your posts" },
  { value: "mentions", label: "Mentions" },
  { value: "follows", label: "New followers" },
]

export function Example() {
  return (
    <FieldSet class="flex w-full max-w-sm min-w-0 flex-col gap-3 text-foreground m-0 min-w-0 border-0 p-0">
      <FieldLegend class="mb-3 p-0 text-base font-medium data-disabled:opacity-50">Notifications</FieldLegend>
      <FieldDescription class="-mt-1.5 text-sm text-muted-foreground">
        Choose what we email you about.
      </FieldDescription>
      <CheckboxGroup
        name="notify"
        defaultValue={["mentions"]}
        class="flex min-w-0 flex-col gap-3 text-foreground"
      >
        <For each={items}>
          {(item) => (
            <label class="flex cursor-default items-center gap-3 text-sm">
              <Checkbox
                value={item.value}
                class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
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
                    class="size-3.5 shrink-0"
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
    </FieldSet>
  )
}

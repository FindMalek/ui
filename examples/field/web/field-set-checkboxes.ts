import "@ui-sdk/web/checkbox"
import "@ui-sdk/web/field"
import { Check, createElement } from "lucide"

const items = [
  { value: "comments", label: "Comments on your posts" },
  { value: "mentions", label: "Mentions" },
  { value: "follows", label: "New followers" },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-field-set>
      <fieldset class="flex w-full max-w-sm min-w-0 flex-col gap-3 text-foreground">
        <legend class="mb-3 p-0 text-base font-medium data-disabled:opacity-50">Notifications</legend>
        <ui-field-description class="-mt-1.5 text-sm text-muted-foreground">Choose what we email you about.</ui-field-description>
        <ui-checkbox-group name="notify" default-value="mentions" class="flex min-w-0 flex-col gap-3 text-foreground">
          ${items
            .map(
              (item) => `
                <label class="flex cursor-default items-center gap-3 text-sm">
                  <ui-checkbox value="${item.value}" class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none">
                    <ui-checkbox-indicator class="grid place-content-center">
                      ${createElement(Check, { class: "size-3.5 shrink-0", "aria-hidden": "true" }).outerHTML}
                    </ui-checkbox-indicator>
                  </ui-checkbox>
                  ${item.label}
                </label>`,
            )
            .join("")}
        </ui-checkbox-group>
      </fieldset>
    </ui-field-set>
  `
}

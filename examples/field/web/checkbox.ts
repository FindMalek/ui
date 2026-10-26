import "@ui-sdk/web/checkbox"
import "@ui-sdk/web/field"
import { Check, createElement } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-field class="flex w-full max-w-sm flex-row items-start gap-3">
      <ui-checkbox class="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:opacity-50" name="usage">
        <ui-checkbox-indicator class="grid place-content-center">
          ${createElement(Check, { class: "size-3.5", "aria-hidden": "true" }).outerHTML}
        </ui-checkbox-indicator>
      </ui-checkbox>
      <div class="flex flex-col gap-1.5">
        <ui-field-label class="text-sm leading-snug font-medium">Share usage data</ui-field-label>
        <ui-field-description class="text-sm text-muted-foreground">
          Help us improve by sending anonymous crash reports and usage statistics.
        </ui-field-description>
      </div>
    </ui-field>
  `
}

import "@ui-sdk/web/checkbox"
import { Check, createElement } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div dir="rtl" class="flex flex-col gap-3">
      <label class="flex items-center gap-3 text-sm font-medium">
        <ui-checkbox class="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:opacity-50">
          <ui-checkbox-indicator class="grid place-content-center">
            ${createElement(Check, { class: "size-3.5", "aria-hidden": "true" }).outerHTML}
          </ui-checkbox-indicator>
        </ui-checkbox>
        قبول الشروط والأحكام
      </label>
      <label class="flex items-center gap-3 text-sm font-medium">
        <ui-checkbox class="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:opacity-50" default-checked>
          <ui-checkbox-indicator class="grid place-content-center">
            ${createElement(Check, { class: "size-3.5", "aria-hidden": "true" }).outerHTML}
          </ui-checkbox-indicator>
        </ui-checkbox>
        تفعيل الإشعارات
      </label>
    </div>
  `
}

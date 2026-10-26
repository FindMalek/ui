import "@ui-sdk/web/checkbox"
import "@ui-sdk/web/field"
import { Check, createElement } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div dir="rtl" class="flex w-full max-w-sm flex-col gap-6">
      <ui-field class="flex flex-col gap-3">
        <ui-field-label class="text-sm leading-snug font-medium">الاسم على البطاقة</ui-field-label>
        <input class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm" name="card-name" autocomplete="cc-name" placeholder="ليلى حسن" />
      </ui-field>
      <ui-field class="flex flex-col gap-3">
        <ui-field-label class="text-sm leading-snug font-medium">رقم البطاقة</ui-field-label>
        <input class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm" name="card-number" inputmode="numeric" autocomplete="cc-number" placeholder="1234 5678 9012 3456" />
        <ui-field-description class="text-sm text-muted-foreground">أدخل الرقم المكون من 16 خانة.</ui-field-description>
      </ui-field>
      <ui-field class="flex flex-row items-center gap-3">
        <ui-checkbox class="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:opacity-50" name="save-card" default-checked>
          <ui-checkbox-indicator class="grid place-content-center">
            ${createElement(Check, { class: "size-3.5", "aria-hidden": "true" }).outerHTML}
          </ui-checkbox-indicator>
        </ui-checkbox>
        <ui-field-label class="text-sm leading-snug font-medium">احفظ البطاقة للمدفوعات القادمة</ui-field-label>
      </ui-field>
    </div>
  `
}

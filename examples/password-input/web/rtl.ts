import "@ui-sdk/web/password-input"
import "@ui-sdk/web/field"
import { createElement, Eye, EyeOff } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div dir="rtl" class="w-full max-w-sm">
      <ui-field class="flex w-full flex-col gap-2">
        <ui-field-label class="text-sm leading-none font-medium data-disabled:opacity-50">كلمة المرور</ui-field-label>
        <ui-password-input name="password" class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50">
          <input class="h-full min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground md:text-sm" />
          <ui-password-input-toggle>
            <button aria-label="إظهار كلمة المرور" class="group inline-flex size-6 shrink-0 items-center justify-center rounded-xl text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:text-foreground data-disabled:pointer-events-none dark:hover:bg-muted/50">
              ${createElement(Eye, { class: "size-4 group-aria-pressed:hidden", "aria-hidden": "true" }).outerHTML}
              ${createElement(EyeOff, { class: "hidden size-4 group-aria-pressed:block", "aria-hidden": "true" }).outerHTML}
            </button>
          </ui-password-input-toggle>
        </ui-password-input>
        <ui-field-description class="text-sm text-muted-foreground">ثمانية أحرف على الأقل.</ui-field-description>
      </ui-field>
    </div>
  `
}

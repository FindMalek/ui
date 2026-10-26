import "@ui-sdk/web/field"
import "@ui-sdk/web/input"
import { Search, X, createElement } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div dir="rtl" class="flex w-full max-w-sm flex-col gap-6">
      <ui-field name="name" class="flex flex-col gap-2">
        <ui-field-label class="text-sm leading-none font-medium data-disabled:opacity-50 data-invalid:text-destructive">الاسم الكامل</ui-field-label>
        <ui-input>
          <input placeholder="ليلى حسن" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40" />
        </ui-input>
        <ui-field-description class="text-sm text-muted-foreground">كما يظهر في ملفك الشخصي.</ui-field-description>
      </ui-field>
      <ui-input-group class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 px-2.5 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50">
        ${createElement(Search, { class: "size-4 shrink-0", "aria-hidden": "true" }).outerHTML}
        <ui-input>
          <input type="search" aria-label="بحث" value="حسن" class="h-full min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm [&::-webkit-search-cancel-button]:hidden" />
        </ui-input>
        <ui-input-clear>
          <button type="button" aria-label="مسح البحث" class="-me-1.5 inline-flex size-6 shrink-0 items-center justify-center rounded-xl outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 dark:hover:bg-muted/50">
            ${createElement(X, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-input-clear>
      </ui-input-group>
    </div>
  `
}

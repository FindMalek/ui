import "@ui-sdk/web/field"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-field-set>
      <fieldset dir="rtl" class="flex w-full max-w-sm flex-col gap-6">
        <legend class="mb-3 text-base font-medium data-disabled:opacity-50">العنوان</legend>
        <ui-field-description class="-mt-1.5 text-sm text-muted-foreground">نحتاج عنوانك لتوصيل طلبك.</ui-field-description>
        <ui-field name="street" class="flex flex-col gap-3">
          <ui-field-label class="text-sm leading-snug font-medium data-disabled:opacity-50 data-invalid:text-destructive">الشارع</ui-field-label>
          <input class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 md:text-sm dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40" />
        </ui-field>
        <ui-field name="city" class="flex flex-col gap-3">
          <ui-field-label class="text-sm leading-snug font-medium data-disabled:opacity-50 data-invalid:text-destructive">المدينة</ui-field-label>
          <input class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 md:text-sm dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40" />
        </ui-field>
      </fieldset>
    </ui-field-set>
  `
}

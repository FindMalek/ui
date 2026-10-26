import "@ui-sdk/web/field"
import "@ui-sdk/web/input"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-field name="avatar" class="flex w-full max-w-sm flex-col gap-2">
      <ui-field-label class="text-sm leading-none font-medium data-disabled:opacity-50 data-invalid:text-destructive">Picture</ui-field-label>
      <ui-input>
        <input type="file" accept="image/*" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground file:me-3 file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40" />
      </ui-input>
      <ui-field-description class="text-sm text-muted-foreground">PNG or JPG, up to 2 MB.</ui-field-description>
    </ui-field>
  `
}

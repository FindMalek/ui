import "@ui-sdk/web/field"
import "@ui-sdk/web/input"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="grid w-full max-w-sm grid-cols-2 gap-4">
      <ui-field name="first-name" class="flex flex-col gap-2">
        <ui-field-label class="text-sm leading-none font-medium data-disabled:opacity-50 data-invalid:text-destructive">First name</ui-field-label>
        <ui-input>
          <input autocomplete="given-name" placeholder="Ada" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40" />
        </ui-input>
      </ui-field>
      <ui-field name="last-name" class="flex flex-col gap-2">
        <ui-field-label class="text-sm leading-none font-medium data-disabled:opacity-50 data-invalid:text-destructive">Last name</ui-field-label>
        <ui-input>
          <input autocomplete="family-name" placeholder="Lovelace" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40" />
        </ui-input>
      </ui-field>
    </div>
  `
}

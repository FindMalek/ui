import "@ui-sdk/web/field"
import "@ui-sdk/web/input"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-sm flex-col gap-6">
      <ui-field name="name" class="flex flex-col gap-2">
        <ui-field-label class="text-sm leading-none font-medium data-disabled:opacity-50 data-invalid:text-destructive">Name</ui-field-label>
        <ui-input>
          <input placeholder="Ada Lovelace" autocomplete="name" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40" />
        </ui-input>
      </ui-field>
      <ui-field name="email" class="flex flex-col gap-2">
        <ui-field-label class="text-sm leading-none font-medium data-disabled:opacity-50 data-invalid:text-destructive">Email</ui-field-label>
        <ui-input>
          <input type="email" placeholder="ada@example.com" autocomplete="email" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40" />
        </ui-input>
        <ui-field-description class="text-sm text-muted-foreground">We'll never share your email.</ui-field-description>
      </ui-field>
      <ui-field name="password" class="flex flex-col gap-2">
        <ui-field-label class="text-sm leading-none font-medium data-disabled:opacity-50 data-invalid:text-destructive">Password</ui-field-label>
        <ui-input>
          <input type="password" autocomplete="new-password" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40" />
        </ui-input>
        <ui-field-description class="text-sm text-muted-foreground">At least 8 characters.</ui-field-description>
      </ui-field>
    </div>
  `
}

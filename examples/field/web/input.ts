import "@ui-sdk/web/field"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-sm min-w-0 flex-col gap-6 text-foreground">
      <ui-field class="flex min-w-0 flex-col gap-3 text-foreground">
        <ui-field-label class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">Username</ui-field-label>
        <input class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50" name="username" placeholder="ada" autocomplete="username" />
        <ui-field-description class="m-0 text-sm text-muted-foreground">Choose a unique username for your account.</ui-field-description>
      </ui-field>

    </div>
  `
}

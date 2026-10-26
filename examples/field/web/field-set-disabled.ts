import "@ui-sdk/web/field"
import "@ui-sdk/web/switch"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-sm min-w-0 flex-col gap-6 text-foreground">
      <label class="flex cursor-default items-center gap-3 text-sm">
        <ui-switch checked class="relative inline-flex h-5 w-8 shrink-0 cursor-default appearance-none items-center rounded-2xl border-2 border-transparent bg-input/90 p-0 outline-none transition-colors after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50 motion-reduce:transition-none">
          <ui-switch-thumb class="pointer-events-none block size-4 shrink-0 rounded-2xl bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] motion-reduce:transition-none"></ui-switch-thumb>
        </ui-switch>
        Billing address is the same as shipping
      </label>
      <ui-field-set disabled>
        <fieldset class="flex min-w-0 flex-col gap-6">
          <legend class="mb-3 p-0 text-base font-medium data-disabled:opacity-50">Billing address</legend>
          <ui-field name="billing-street" class="flex min-w-0 flex-col gap-3 text-foreground">
            <ui-field-label class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">Street address</ui-field-label>
            <input autocomplete="billing street-address" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50" />
          </ui-field>
          <ui-field name="billing-city" class="flex min-w-0 flex-col gap-3 text-foreground">
            <ui-field-label class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">City</ui-field-label>
            <input autocomplete="billing address-level2" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50" />
          </ui-field>
        </fieldset>
      </ui-field-set>
    </div>
  `
  const set = root.querySelector("ui-field-set")!
  root.querySelector("ui-switch")!.addEventListener("checkedchange", (event) => {
    set.toggleAttribute("disabled", event.detail.value === true)
  })
}

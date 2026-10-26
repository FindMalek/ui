import "@ui-sdk/web/field"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-field-set>
      <fieldset class="flex w-full max-w-sm min-w-0 flex-col gap-6 text-foreground">
        <legend class="mb-3 p-0 text-base font-medium data-disabled:opacity-50">Address</legend>
        <ui-field-description class="-mt-1.5 text-sm text-muted-foreground">We need your address to deliver your order.</ui-field-description>
        <ui-field-group class="flex min-w-0 flex-col gap-6">
          <ui-field name="street" class="flex min-w-0 flex-col gap-3 text-foreground">
            <ui-field-label class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">Street address</ui-field-label>
            <input autocomplete="street-address" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50" />
          </ui-field>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ui-field name="city" class="flex min-w-0 flex-col gap-3 text-foreground">
              <ui-field-label class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">City</ui-field-label>
              <input autocomplete="address-level2" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50" />
            </ui-field>
            <ui-field name="postal-code" class="flex min-w-0 flex-col gap-3 text-foreground">
              <ui-field-label class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">Postal code</ui-field-label>
              <input autocomplete="postal-code" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50" />
            </ui-field>
          </div>
        </ui-field-group>
      </fieldset>
    </ui-field-set>
  `
}

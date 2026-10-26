import "@ui-sdk/web/field"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <form class="flex w-full max-w-sm min-w-0 flex-col gap-6 text-foreground">
      <ui-field class="flex min-w-0 flex-col gap-3 text-foreground" name="email">
        <ui-field-label class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">Email</ui-field-label>
        <input class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50" type="email" required placeholder="m@example.com" />
        <ui-field-description class="m-0 text-sm text-muted-foreground">
          <span class="in-data-valid:hidden">We'll send you a confirmation link.</span>
          <span class="hidden in-data-valid:inline">Looks good.</span>
        </ui-field-description>
        <div class="min-h-10"><ui-field-error class="m-0 text-sm text-foreground" match="valueMissing">Enter your email address.</ui-field-error>
        <ui-field-error class="m-0 text-sm text-foreground" match="typeMismatch">Enter an email address like m@example.com.</ui-field-error>
      </div></ui-field>
      <ui-field class="flex min-w-0 flex-col gap-3 text-foreground" name="website">
        <ui-field-label class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">Website</ui-field-label>
        <input class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50" type="url" required placeholder="https://example.com" />
        <div class="min-h-10"><ui-field-error class="m-0 text-sm text-foreground"></ui-field-error>
      </div></ui-field>
      <button type="submit" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50">Subscribe</button>
      <output class="block min-h-10 text-sm text-muted-foreground"></output>
    </form>
  `
  const form = root.querySelector("form")!
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    root.querySelector("output")!.textContent = `Subscribed ${new FormData(form).get("email")}.`
  })
}

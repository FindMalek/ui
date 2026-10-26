import "@ui-sdk/web/field"
import "@ui-sdk/web/input"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-field name="code" class="flex w-full max-w-sm flex-col gap-2 text-foreground">
      <ui-field-label class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">Verification code</ui-field-label>
      <ui-input>
        <input inputmode="numeric" autocomplete="one-time-code" maxlength="6" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm font-mono tracking-widest" />
      </ui-input>
      <ui-field-description class="min-h-5 text-sm text-muted-foreground">Six digits from the text we sent.</ui-field-description>
    </ui-field>
  `
  root.querySelector("ui-input")!.addEventListener("valuechange", (event) => {
    if (!/^\d*$/.test(event.detail.value)) event.preventDefault()
  })
}

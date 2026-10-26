import "@ui-sdk/web/file-input"
import "@ui-sdk/web/field"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <form class="flex w-full max-w-md min-w-0 flex-col gap-4 text-foreground">
      <ui-field class="flex min-w-0 flex-col gap-2">
        <ui-field-label class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">Proof of address</ui-field-label>
        <ui-file-input name="proof" required accept="image/*,.pdf">
          <ui-file-input-dropzone class="flex min-w-0 flex-wrap items-center justify-between gap-3 p-4 rounded-3xl border border-dashed border-border transition-colors duration-200 data-dragging:border-ring data-dragging:bg-muted/50 data-drag-reject:border-foreground data-drag-reject:bg-muted data-disabled:opacity-50 motion-reduce:transition-none">
            <span class="min-w-0 flex-1 truncate text-sm text-muted-foreground">Drop a scan here</span>
            <ui-file-input-trigger><button class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">Choose a file</button></ui-file-input-trigger>
          </ui-file-input-dropzone>
        </ui-file-input>
        <ui-field-description class="min-h-5 text-sm text-muted-foreground">A utility bill or bank statement from the last 3 months.</ui-field-description>
        <div class="min-h-5"><ui-field-error match="valueMissing" class="min-h-5 text-sm text-foreground">Add a scan to continue.</ui-field-error></div>
      </ui-field>
      <div class="flex flex-wrap gap-2">
        <button type="submit" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">Continue</button>
        <button type="reset" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">Reset</button>
        <span data-result class="min-h-5 basis-full text-sm text-muted-foreground"></span>
      </div>
    </form>
  `
  const form = root.querySelector("form")!
  const input = form.querySelector("ui-file-input")!
  const status = input.querySelector("span")!
  const trigger = input.querySelector("button")!
  const sent = form.querySelector<HTMLElement>("[data-result]")!

  input.addEventListener("valuechange", (event) => {
    const [file] = event.detail.value
    status.textContent = file?.name ?? "Drop a scan here"
    trigger.textContent = file ? "Replace" : "Choose a file"
  })
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    sent.textContent = "Sent."
  })
  form.addEventListener("reset", () => {
    sent.textContent = ""
  })
}

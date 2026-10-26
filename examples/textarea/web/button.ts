import "@ui-sdk/web/field"
import "@ui-sdk/web/textarea"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <form class="flex min-h-72 w-full max-w-sm flex-col gap-2 text-foreground">
      <ui-field name="message" class="flex flex-col gap-2">
        <ui-field-label class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">Message</ui-field-label>
        <ui-textarea auto-resize>
          <textarea required class="min-h-16 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 resize-none px-2.5 py-2 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm field-sizing-content max-h-40"></textarea>
        </ui-textarea>
      </ui-field>
      <button type="submit" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none">Send message</button>
      <p class="min-h-5 text-sm text-muted-foreground">Nothing sent yet.</p>
    </form>
  `
  const message = root.querySelector("ui-textarea")!
  const sent: string[] = []
  root.querySelector("form")!.addEventListener("submit", (event) => {
    event.preventDefault()
    sent.push(String(new FormData(event.currentTarget as HTMLFormElement).get("message")))
    root.querySelector("p")!.textContent = `Sent: ${sent.at(-1)}`
    message.api.clear()
  })
}

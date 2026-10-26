import "@ui-sdk/web/field"
import "@ui-sdk/web/textarea"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-field name="bio" class="flex w-full max-w-sm flex-col gap-2 text-foreground">
      <ui-field-label class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">Bio</ui-field-label>
      <ui-textarea>
        <textarea maxlength="160" required class="min-h-16 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 resize-none px-2.5 py-2 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm"></textarea>
      </ui-textarea>
      <ui-field-description class="min-h-5 text-sm text-muted-foreground tabular-nums">0 / 160</ui-field-description>
    </ui-field>
  `
  const count = root.querySelector("ui-field-description")!
  root.querySelector("ui-textarea")!.addEventListener("valuechange", (event) => {
    count.textContent = `${event.detail.value.length} / 160`
  })
}

import "@ui-sdk/web/field"

const limit = 280

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-field class="flex w-full max-w-sm min-w-0 flex-col gap-3 text-foreground">
      <ui-field-label class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">Bio</ui-field-label>
      <textarea class="h-28 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm resize-none data-disabled:opacity-50" rows="4" name="bio" maxlength="${limit}">Designer and engineer. I build tools for people who make things on the web.</textarea>
      <ui-field-description class="flex justify-between gap-4 text-sm text-muted-foreground">
        <span>Shown on your public profile.</span>
        <span></span>
      </ui-field-description>
    </ui-field>
  `
  const bio = root.querySelector("textarea")!
  const counter = root.querySelector<HTMLElement>("ui-field-description span:last-child")!
  const update = () => {
    counter.textContent = `${bio.value.length} / ${limit}`
    counter.className = "shrink-0 text-foreground tabular-nums"
  }
  bio.addEventListener("input", update)
  update()
}

import "@ui-sdk/web/field"
import "@ui-sdk/web/input"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-sm flex-col gap-6 text-foreground">
      <ui-field class="flex flex-col gap-2">
        <ui-field-label class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">Display name</ui-field-label>
        <ui-input>
          <input value="Ada" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm" />
        </ui-input>
        <ui-field-description class="min-h-5 text-sm text-muted-foreground">Type to change it.</ui-field-description>
      </ui-field>
      <ui-field class="flex flex-col gap-2">
        <ui-field-label class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">Profile URL</ui-field-label>
        <ui-input>
          <input readonly value="example.com/ada" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm read-only:border-input read-only:bg-transparent" />
        </ui-input>
      </ui-field>
    </div>
  `
  const description = root.querySelector("ui-field-description")!
  const profile = root.querySelector<HTMLInputElement>("input[readonly]")!
  root.querySelector("ui-input")!.addEventListener("valuechange", (event) => {
    const { value, reason } = event.detail
    profile.value = `example.com/${value.toLowerCase()}`
    description.textContent = `Changed by ${reason}.`
  })
}

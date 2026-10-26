import "@ui-sdk/web/field"
import "@ui-sdk/web/input"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-sm flex-col gap-6 text-foreground">

      <ui-field name="website" class="flex flex-col gap-2">
        <ui-field-label class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">Website</ui-field-label>
        <ui-input-group class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 px-2.5 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50 motion-reduce:transition-none">
          <span>https://</span>
          <ui-input>
            <input placeholder="example" class="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm" />
          </ui-input>
          <span>.com</span>
        </ui-input-group>
      </ui-field>

    </div>
  `
}

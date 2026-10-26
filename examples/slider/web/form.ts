import "@ui-sdk/web/slider"
import "@ui-sdk/web/field"

function mount(root: HTMLElement) {
  const formId = `slider-form-${crypto.randomUUID()}`
  root.innerHTML = `
    <div class="flex w-full max-w-xs flex-col gap-4">
      <form id="${formId}" class="flex flex-col gap-4">
        <ui-field>
          <ui-slider name="price" default-value="200/800" max="1000" step="10" class="flex flex-col gap-2">
            <div class="flex items-center justify-between text-sm">
              <ui-field-label class="font-medium">Price</ui-field-label>
              <ui-slider-value class="text-muted-foreground tabular-nums"></ui-slider-value>
            </div>
            <ui-slider-control class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
              <ui-slider-track class="h-1 w-full rounded-2xl bg-input/90">
                <ui-slider-indicator class="rounded-2xl bg-primary"></ui-slider-indicator>
                <ui-slider-thumb aria-label="Minimum price" class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"></ui-slider-thumb>
                <ui-slider-thumb aria-label="Maximum price" class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"></ui-slider-thumb>
              </ui-slider-track>
            </ui-slider-control>
          </ui-slider>
        </ui-field>
        <ui-field>
          <ui-slider name="rating" default-value="3" min="1" max="5" class="flex flex-col gap-2">
            <div class="flex items-center justify-between text-sm">
              <ui-field-label class="font-medium">Minimum rating</ui-field-label>
              <ui-slider-value class="text-muted-foreground tabular-nums"></ui-slider-value>
            </div>
            <ui-slider-control class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
              <ui-slider-track class="h-1 w-full rounded-2xl bg-input/90">
                <ui-slider-indicator class="rounded-2xl bg-primary"></ui-slider-indicator>
                <ui-slider-thumb class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"></ui-slider-thumb>
              </ui-slider-track>
            </ui-slider-control>
          </ui-slider>
        </ui-field>
        <div class="flex gap-2">
          <button type="submit" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none">Save</button>
          <button type="reset" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none">Reset</button>
        </div>
      </form>
      <ui-field class="border-t border-border pt-4">
        <ui-slider name="distance" form="${formId}" default-value="25" max="100" step="5" class="flex flex-col gap-2">
          <div class="flex items-center justify-between text-sm">
            <ui-field-label class="font-medium">Distance</ui-field-label>
            <ui-slider-value class="text-muted-foreground tabular-nums"></ui-slider-value>
          </div>
          <ui-slider-control class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
            <ui-slider-track class="h-1 w-full rounded-2xl bg-input/90">
              <ui-slider-indicator class="rounded-2xl bg-primary"></ui-slider-indicator>
              <ui-slider-thumb class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"></ui-slider-thumb>
            </ui-slider-track>
          </ui-slider-control>
        </ui-slider>
      </ui-field>
      <output class="text-sm text-muted-foreground" hidden></output>
    </div>
  `
  const distance = root.querySelector('ui-slider[name="distance"]') as HTMLElement & {
    format: Intl.NumberFormatOptions
  }
  distance.format = { style: "unit", unit: "kilometer" }
  const form = root.querySelector("form")!
  const submitted = root.querySelector("output")!
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    const data = [...new FormData(form)].map(([name, value]) => `${name}=${value}`)
    submitted.textContent = `Submitted: ${data.join(", ")}`
    submitted.hidden = false
  })
  form.addEventListener("reset", () => (submitted.hidden = true))
}

export { mount }

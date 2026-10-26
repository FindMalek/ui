import "@ui-sdk/web/slider"
import "@ui-sdk/web/field"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-field class="flex w-full max-w-xs flex-col gap-3">
      <div class="flex items-center justify-between text-sm">
        <ui-field-label class="font-medium">Temperature</ui-field-label>
        <span class="text-muted-foreground tabular-nums">0.3, 0.7</span>
      </div>
      <ui-slider default-value="0.3/0.7" min="0" max="1" step="0.1">
        <ui-slider-control class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
          <ui-slider-track class="h-1 w-full rounded-2xl bg-input/90">
            <ui-slider-indicator class="rounded-2xl bg-primary"></ui-slider-indicator>
            <ui-slider-thumb aria-label="Minimum temperature" class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"></ui-slider-thumb>
            <ui-slider-thumb aria-label="Maximum temperature" class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"></ui-slider-thumb>
          </ui-slider-track>
        </ui-slider-control>
      </ui-slider>
      <div class="flex gap-2">
        <button type="button" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none">Reset</button>
      </div>
      <output class="text-sm text-muted-foreground">Drag a thumb.</output>
    </ui-field>
  `
  const slider = root.querySelector("ui-slider") as HTMLElement & { value: number[] }
  const shown = root.querySelector("span")!
  const output = root.querySelector("output")!
  slider.addEventListener("valuechange", (event) => {
    const { value, reason } = (event as CustomEvent<{ value: number[]; reason: string }>).detail
    shown.textContent = value.join(", ")
    output.textContent = `Last change: ${reason}`
  })
  root.querySelector("button")!.addEventListener("click", () => {
    slider.value = [0.3, 0.7]
    output.textContent = "Drag a thumb."
  })
}

export { mount }

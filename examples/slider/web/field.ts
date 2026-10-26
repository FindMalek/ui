import "@ui-sdk/web/slider"
import "@ui-sdk/web/field"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-field class="flex w-full max-w-xs flex-col gap-2">
      <ui-slider default-value="0.3" min="0" max="1" step="0.01" class="flex flex-col gap-2">
        <div class="flex items-center justify-between text-sm">
          <ui-field-label class="font-medium">Volume</ui-field-label>
          <ui-slider-value class="text-muted-foreground tabular-nums"></ui-slider-value>
        </div>
        <ui-slider-control class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
          <ui-slider-track class="h-1 w-full rounded-2xl bg-input/90">
            <ui-slider-indicator class="rounded-2xl bg-primary"></ui-slider-indicator>
            <ui-slider-thumb class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"></ui-slider-thumb>
          </ui-slider-track>
        </ui-slider-control>
      </ui-slider>
      <ui-field-description class="text-sm text-muted-foreground">How loud notifications play.</ui-field-description>
    </ui-field>
  `
  const slider = root.querySelector("ui-slider") as HTMLElement & { format: Intl.NumberFormatOptions }
  slider.format = { style: "percent" }
}

export { mount }

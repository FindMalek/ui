import "@ui-sdk/web/slider"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-slider default-value="60" aria-label="Brightness" class="flex w-full max-w-xs flex-col gap-2">
      <span class="text-sm text-muted-foreground tabular-nums">Brightness <ui-slider-value class="inline"></ui-slider-value>%</span>
      <ui-slider-control class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
        <ui-slider-track class="h-1 w-full rounded-2xl bg-input/90">
          <ui-slider-indicator class="rounded-2xl bg-primary/70 transition-colors data-dragging:bg-primary"></ui-slider-indicator>
          <ui-slider-thumb aria-label="Brightness" class="group block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md transition-[color,box-shadow] duration-200 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 ring-1 ring-black/10 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none">
            <ui-slider-value class="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-xl bg-foreground px-2 py-1 text-xs text-background tabular-nums opacity-0 transition-opacity group-has-focus-visible:opacity-100 group-data-dragging:opacity-100"></ui-slider-value>
          </ui-slider-thumb>
        </ui-slider-track>
      </ui-slider-control>
    </ui-slider>
  `
}

export { mount }

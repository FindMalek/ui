import "@ui-sdk/web/slider"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-slider default-value="75" class="w-full max-w-xs">
      <ui-slider-control class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
        <ui-slider-track class="h-1 w-full rounded-2xl bg-input/90">
          <ui-slider-indicator class="rounded-2xl bg-primary"></ui-slider-indicator>
          <ui-slider-thumb aria-label="Volume" class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"></ui-slider-thumb>
        </ui-slider-track>
      </ui-slider-control>
    </ui-slider>
  `
}

export { mount }

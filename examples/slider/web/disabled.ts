import "@ui-sdk/web/slider"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-slider default-value="50" disabled class="w-full max-w-xs">
      <ui-slider-control class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
        <ui-slider-track class="h-1 w-full rounded-2xl bg-input/90">
          <ui-slider-indicator class="rounded-2xl bg-primary"></ui-slider-indicator>
          <ui-slider-thumb aria-label="Disabled" class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 motion-reduce:transition-none"></ui-slider-thumb>
        </ui-slider-track>
      </ui-slider-control>
    </ui-slider>
  `
}

export { mount }

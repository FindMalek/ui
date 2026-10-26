import "@ui-sdk/web/slider"

const channels = [
  { label: "Bass", value: 50 },
  { label: "Treble", value: 25 },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex h-40 items-stretch gap-8">
      ${channels
        .map(
          (channel) => `
            <ui-slider orientation="vertical" default-value="${channel.value}">
              <ui-slider-control class="flex items-center select-none data-disabled:opacity-50 data-[orientation=horizontal]:w-full data-[orientation=horizontal]:py-2 data-[orientation=vertical]:h-full data-[orientation=vertical]:justify-center data-[orientation=vertical]:px-2">
                <ui-slider-track class="rounded-2xl bg-input/90 data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1">
                  <ui-slider-indicator class="rounded-2xl bg-primary"></ui-slider-indicator>
                  <ui-slider-thumb aria-label="${channel.label}" class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"></ui-slider-thumb>
                </ui-slider-track>
              </ui-slider-control>
            </ui-slider>`,
        )
        .join("")}
    </div>
  `
}

export { mount }

import { Slider, SliderControl, SliderIndicator, SliderThumb, SliderTrack } from "@ui-sdk/solid/slider"

function Example() {
  return (
    <Slider defaultValue={50} disabled class="w-full max-w-xs">
      <SliderControl class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
        <SliderTrack class="h-1 w-full rounded-2xl bg-input/90">
          <SliderIndicator class="rounded-2xl bg-primary" />
          <SliderThumb
            aria-label="Disabled"
            class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 motion-reduce:transition-none"
          />
        </SliderTrack>
      </SliderControl>
    </Slider>
  )
}

export { Example }

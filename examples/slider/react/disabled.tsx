"use client"

import { Slider, SliderControl, SliderIndicator, SliderThumb, SliderTrack } from "@ui-sdk/react/slider"

function Example() {
  return (
    <Slider defaultValue={50} disabled className="w-full max-w-xs">
      <SliderControl className="flex w-full items-center py-2 select-none data-disabled:opacity-50">
        <SliderTrack className="h-1 w-full rounded-2xl bg-input/90">
          <SliderIndicator className="rounded-2xl bg-primary" />
          <SliderThumb
            aria-label="Disabled"
            className="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 motion-reduce:transition-none"
          />
        </SliderTrack>
      </SliderControl>
    </Slider>
  )
}

export { Example }

"use client"

import {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from "@ui-sdk/react/slider"

function Example() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
      <Slider
        defaultValue={2010}
        min={1990}
        max={2030}
        step={5}
        format={{ useGrouping: false }}
        className="flex flex-col gap-2"
      >
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">Year</span>
          <SliderValue className="text-muted-foreground tabular-nums" />
        </div>
        <SliderControl className="flex w-full items-center py-2 select-none data-disabled:opacity-50">
          <SliderTrack className="h-1 w-full rounded-2xl bg-input/90">
            <SliderIndicator className="rounded-2xl bg-primary" />
            <SliderThumb
              aria-label="Year"
              className="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
            />
          </SliderTrack>
        </SliderControl>
      </Slider>
      <Slider defaultValue={0.5} min={0} max={1} step={0.05} className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">Opacity</span>
          <SliderValue className="text-muted-foreground tabular-nums" />
        </div>
        <SliderControl className="flex w-full items-center py-2 select-none data-disabled:opacity-50">
          <SliderTrack className="h-1 w-full rounded-2xl bg-input/90">
            <SliderIndicator className="rounded-2xl bg-primary" />
            <SliderThumb
              aria-label="Opacity"
              className="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
            />
          </SliderTrack>
        </SliderControl>
      </Slider>
    </div>
  )
}

export { Example }

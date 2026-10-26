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
    <Slider
      defaultValue={100}
      min={25}
      max={400}
      largeStep={25}
      format={{ style: "unit", unit: "percent" }}
      className="flex w-full max-w-xs flex-col gap-2"
    >
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">Zoom</span>
        <SliderValue className="text-muted-foreground tabular-nums" />
      </div>
      <SliderControl className="flex w-full items-center py-2 select-none data-disabled:opacity-50">
        <SliderTrack className="h-1 w-full rounded-2xl bg-input/90">
          <SliderIndicator className="rounded-2xl bg-primary" />
          <SliderThumb
            aria-label="Zoom"
            className="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
          />
        </SliderTrack>
      </SliderControl>
      <p className="text-sm text-muted-foreground">Focus the thumb and press Page Up to zoom by 25%.</p>
    </Slider>
  )
}

export { Example }

"use client"

import {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from "@ui-sdk/react/slider"

const time = (minutes: number) => `${Math.floor(minutes / 60)}:${String(minutes % 60).padStart(2, "0")}`

function Example() {
  return (
    <Slider
      defaultValue={[540, 1020]}
      min={0}
      max={1440}
      step={15}
      minStepsBetweenThumbs={4}
      format={time}
      aria-label="Opening hours"
      className="flex w-full max-w-xs flex-col gap-2"
    >
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">Opening hours</span>
        <SliderValue className="text-muted-foreground tabular-nums" />
      </div>
      <SliderControl className="flex w-full items-center py-2 select-none data-disabled:opacity-50">
        <SliderTrack className="h-1 w-full rounded-2xl bg-input/90">
          <SliderIndicator className="rounded-2xl bg-primary" />
          <SliderThumb
            index={0}
            aria-label="Opens"
            className="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
          />
          <SliderThumb
            index={1}
            aria-label="Closes"
            className="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
          />
        </SliderTrack>
      </SliderControl>
    </Slider>
  )
}

export { Example }

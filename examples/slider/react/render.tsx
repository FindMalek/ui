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
    <Slider defaultValue={60} aria-label="Brightness" className="flex w-full max-w-xs flex-col gap-2">
      <SliderValue className="text-sm text-muted-foreground tabular-nums">
        {(state) => `Brightness ${state.text}%`}
      </SliderValue>
      <SliderControl className="flex w-full items-center py-2 select-none data-disabled:opacity-50">
        <SliderTrack className="h-1 w-full rounded-2xl bg-input/90">
          <SliderIndicator
            className={(state) =>
              state.dragging
                ? "rounded-2xl bg-primary transition-colors"
                : "rounded-2xl bg-primary/70 transition-colors"
            }
          />
          <SliderThumb
            aria-label="Brightness"
            render={<span />}
            className={(state) =>
              state.dragging
                ? "group block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md transition-[color,box-shadow] duration-200 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 ring-4 ring-ring/30 motion-reduce:transition-none"
                : "group block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md transition-[color,box-shadow] duration-200 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 ring-1 ring-black/10 motion-reduce:transition-none"
            }
          >
            {(state) => (
              <span
                className={`${state.percent > 90 ? "end-0" : state.percent < 10 ? "start-0" : "left-1/2 -translate-x-1/2"} pointer-events-none absolute bottom-full mb-2 rounded-xl bg-foreground px-2 py-1 text-xs text-background tabular-nums opacity-0 transition-opacity group-has-focus-visible:opacity-100 group-data-dragging:opacity-100`}
              >
                {state.thumbValue}
              </span>
            )}
          </SliderThumb>
        </SliderTrack>
      </SliderControl>
    </Slider>
  )
}

export { Example }

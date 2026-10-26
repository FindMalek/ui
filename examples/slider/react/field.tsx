"use client"

import { Field, FieldDescription, FieldLabel } from "@ui-sdk/react/field"
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
    <Field className="flex w-full max-w-xs flex-col gap-2">
      <Slider
        defaultValue={0.3}
        format={{ style: "percent" }}
        min={0}
        max={1}
        step={0.01}
        className="flex flex-col gap-2"
      >
        <div className="flex items-center justify-between text-sm">
          <FieldLabel className="font-medium">Volume</FieldLabel>
          <SliderValue className="text-muted-foreground tabular-nums" />
        </div>
        <SliderControl className="flex w-full items-center py-2 select-none data-disabled:opacity-50">
          <SliderTrack className="h-1 w-full rounded-2xl bg-input/90">
            <SliderIndicator className="rounded-2xl bg-primary" />
            <SliderThumb className="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none" />
          </SliderTrack>
        </SliderControl>
      </Slider>
      <FieldDescription className="text-sm text-muted-foreground">
        How loud notifications play.
      </FieldDescription>
    </Field>
  )
}

export { Example }

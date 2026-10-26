"use client"

import { Field, FieldLabel } from "@ui-sdk/react/field"
import {
  createSliderController,
  Slider,
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from "@ui-sdk/react/slider"
import * as React from "react"

function Example() {
  const [volume] = React.useState(() => createSliderController<number>())
  const [reading, setReading] = React.useState("")

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Field>
        <Slider defaultValue={40} controller={volume} className="flex flex-col gap-2">
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
      </Field>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
          onClick={() => volume.setValue(0)}
        >
          Mute
        </button>
        <button
          type="button"
          className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
          onClick={() => volume.setValue(volume.getValue() + 10)}
        >
          Louder
        </button>
        <button
          type="button"
          className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
          onClick={() => setReading(`Volume is ${volume.getValue()}.`)}
        >
          Read
        </button>
        <button
          type="button"
          className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
          onClick={() => volume.focus()}
        >
          Focus
        </button>
      </div>
      {reading && <output className="text-sm text-muted-foreground">{reading}</output>}
    </div>
  )
}

export { Example }

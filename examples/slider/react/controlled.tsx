"use client"

import { Field, FieldLabel } from "@ui-sdk/react/field"
import { Slider, SliderControl, SliderIndicator, SliderThumb, SliderTrack } from "@ui-sdk/react/slider"
import * as React from "react"

function Example() {
  const [value, setValue] = React.useState([0.3, 0.7])
  const [reason, setReason] = React.useState("")

  return (
    <Field className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center justify-between text-sm">
        <FieldLabel className="font-medium">Temperature</FieldLabel>
        <span className="text-muted-foreground tabular-nums">{value.join(", ")}</span>
      </div>
      <Slider
        value={value}
        onValueChange={(next, details) => {
          setValue(next)
          setReason(details.reason)
        }}
        min={0}
        max={1}
        step={0.1}
      >
        <SliderControl className="flex w-full items-center py-2 select-none data-disabled:opacity-50">
          <SliderTrack className="h-1 w-full rounded-2xl bg-input/90">
            <SliderIndicator className="rounded-2xl bg-primary" />
            <SliderThumb
              index={0}
              aria-label="Minimum temperature"
              className="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
            />
            <SliderThumb
              index={1}
              aria-label="Maximum temperature"
              className="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
            />
          </SliderTrack>
        </SliderControl>
      </Slider>
      <div className="flex gap-2">
        <button
          type="button"
          className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
          onClick={() => {
            setValue([0.3, 0.7])
            setReason("")
          }}
        >
          Reset
        </button>
      </div>
      <output className="text-sm text-muted-foreground">
        {reason ? `Last change: ${reason}` : "Drag a thumb."}
      </output>
    </Field>
  )
}

export { Example }

"use client"

import { Field, FieldLabel } from "@ui-sdk/react/field"
import {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from "@ui-sdk/react/slider"
import * as React from "react"

const save = () => new Promise((resolve) => setTimeout(resolve, 600))

function Example() {
  const [changes, setChanges] = React.useState(0)
  const [status, setStatus] = React.useState("Drag to change the brightness.")

  return (
    <Field className="flex w-full max-w-xs flex-col gap-3">
      <Slider
        defaultValue={50}
        onValueChange={() => setChanges((count) => count + 1)}
        onValueCommit={async (value, details) => {
          setStatus("Saving…")
          await save()
          setStatus(`Saved ${value} (${details.reason}).`)
        }}
        className="flex flex-col gap-2"
      >
        <div className="flex items-center justify-between text-sm">
          <FieldLabel className="font-medium">Brightness</FieldLabel>
          <SliderValue className="text-muted-foreground tabular-nums" />
        </div>
        <SliderControl className="flex w-full items-center py-2 select-none data-disabled:opacity-50">
          <SliderTrack className="h-1 w-full rounded-2xl bg-input/90">
            <SliderIndicator className="rounded-2xl bg-primary" />
            <SliderThumb className="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none" />
          </SliderTrack>
        </SliderControl>
      </Slider>
      <output className="flex flex-col text-sm text-muted-foreground">
        <span>Changes: {changes}</span>
        <span>{status}</span>
      </output>
    </Field>
  )
}

export { Example }

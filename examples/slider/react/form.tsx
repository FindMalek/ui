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

function Example() {
  const formId = React.useId()
  const [submitted, setSubmitted] = React.useState("")

  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <form
        id={formId}
        className="flex flex-col gap-4"
        onSubmit={(event) => {
          event.preventDefault()
          const data = [...new FormData(event.currentTarget)].map(([name, value]) => `${name}=${value}`)
          setSubmitted(data.join(", "))
        }}
        onReset={() => setSubmitted("")}
      >
        <Field>
          <Slider name="price" defaultValue={[200, 800]} max={1000} step={10} className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-sm">
              <FieldLabel className="font-medium">Price</FieldLabel>
              <SliderValue className="text-muted-foreground tabular-nums" />
            </div>
            <SliderControl className="flex w-full items-center py-2 select-none data-disabled:opacity-50">
              <SliderTrack className="h-1 w-full rounded-2xl bg-input/90">
                <SliderIndicator className="rounded-2xl bg-primary" />
                <SliderThumb
                  index={0}
                  aria-label="Minimum price"
                  className="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
                />
                <SliderThumb
                  index={1}
                  aria-label="Maximum price"
                  className="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
                />
              </SliderTrack>
            </SliderControl>
          </Slider>
        </Field>
        <Field>
          <Slider name="rating" defaultValue={3} min={1} max={5} className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-sm">
              <FieldLabel className="font-medium">Minimum rating</FieldLabel>
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
        <div className="flex gap-2">
          <button
            type="submit"
            className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
          >
            Save
          </button>
          <button
            type="reset"
            className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
          >
            Reset
          </button>
        </div>
      </form>
      <Field className="border-t border-border pt-4">
        <Slider
          name="distance"
          form={formId}
          defaultValue={25}
          max={100}
          step={5}
          format={{ style: "unit", unit: "kilometer" }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center justify-between text-sm">
            <FieldLabel className="font-medium">Distance</FieldLabel>
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
      {submitted && <output className="text-sm text-muted-foreground">Submitted: {submitted}</output>}
    </div>
  )
}

export { Example }

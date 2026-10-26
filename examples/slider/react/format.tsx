"use client"

import {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from "@ui-sdk/react/slider"

const sliders = [
  {
    label: "Budget",
    defaultValue: 40,
    max: 100,
    step: 1,
    format: { style: "currency", currency: "USD", maximumFractionDigits: 0 },
  },
  { label: "Opacity", defaultValue: 0.6, max: 1, step: 0.01, format: { style: "percent" } },
  { label: "Weight", defaultValue: 20, max: 50, step: 0.5, format: { style: "unit", unit: "kilogram" } },
  {
    label: "Duration",
    defaultValue: 90,
    max: 600,
    step: 15,
    format: (seconds: number) => `${Math.floor(seconds / 60)} min ${seconds % 60} s`,
  },
  {
    label: "Preis",
    defaultValue: 40,
    max: 100,
    step: 1,
    format: { style: "currency", currency: "EUR" },
    locale: "de-DE",
  },
] satisfies {
  label: string
  defaultValue: number
  max: number
  step: number
  format: Intl.NumberFormatOptions | ((value: number) => string)
  locale?: string
}[]

function Example() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-5">
      {sliders.map(({ label, ...options }) => (
        <Slider key={label} {...options} className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">{label}</span>
            <SliderValue className="text-muted-foreground tabular-nums" />
          </div>
          <SliderControl className="flex w-full items-center py-2 select-none data-disabled:opacity-50">
            <SliderTrack className="h-1 w-full rounded-2xl bg-input/90">
              <SliderIndicator className="rounded-2xl bg-primary" />
              <SliderThumb
                aria-label={label}
                className="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
              />
            </SliderTrack>
          </SliderControl>
        </Slider>
      ))}
    </div>
  )
}

export { Example }

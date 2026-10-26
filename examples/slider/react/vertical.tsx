"use client"

import { Slider, SliderControl, SliderIndicator, SliderThumb, SliderTrack } from "@ui-sdk/react/slider"

const channels = [
  { label: "Bass", value: 50 },
  { label: "Treble", value: 25 },
]

function Example() {
  return (
    <div className="flex h-40 items-stretch gap-8">
      {channels.map((channel) => (
        <Slider key={channel.label} orientation="vertical" defaultValue={channel.value}>
          <SliderControl className="flex items-center select-none data-disabled:opacity-50 data-[orientation=horizontal]:w-full data-[orientation=horizontal]:py-2 data-[orientation=vertical]:h-full data-[orientation=vertical]:justify-center data-[orientation=vertical]:px-2">
            <SliderTrack className="rounded-2xl bg-input/90 data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1">
              <SliderIndicator className="rounded-2xl bg-primary" />
              <SliderThumb
                aria-label={channel.label}
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

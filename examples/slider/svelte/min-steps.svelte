<script lang="ts">
  import {
    Slider,
    SliderControl,
    SliderIndicator,
    SliderThumb,
    SliderTrack,
    SliderValue,
  } from "@ui-sdk/svelte/slider"

  const time = (minutes: number) => `${Math.floor(minutes / 60)}:${String(minutes % 60).padStart(2, "0")}`
</script>

<Slider
  defaultValue={[540, 1020]}
  min={0}
  max={1440}
  step={15}
  minStepsBetweenThumbs={4}
  format={time}
  aria-label="Opening hours"
  class="flex w-full max-w-xs flex-col gap-2"
>
  <div class="flex items-center justify-between text-sm">
    <span class="font-medium">Opening hours</span>
    <SliderValue class="text-muted-foreground tabular-nums" />
  </div>
  <SliderControl class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
    <SliderTrack class="h-1 w-full rounded-2xl bg-input/90">
      <SliderIndicator class="rounded-2xl bg-primary" />
      <SliderThumb
        index={0}
        aria-label="Opens"
        class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
      />
      <SliderThumb
        index={1}
        aria-label="Closes"
        class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
      />
    </SliderTrack>
  </SliderControl>
</Slider>

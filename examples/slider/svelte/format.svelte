<script lang="ts">
  import {
    Slider,
    SliderControl,
    SliderIndicator,
    SliderThumb,
    SliderTrack,
    SliderValue,
  } from "@ui-sdk/svelte/slider"

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
</script>

<div class="flex w-full max-w-xs flex-col gap-5">
  {#each sliders as slider (slider.label)}
    <Slider
      defaultValue={slider.defaultValue}
      max={slider.max}
      step={slider.step}
      format={slider.format}
      locale={"locale" in slider ? slider.locale : undefined}
      class="flex flex-col gap-2"
    >
      <div class="flex items-center justify-between text-sm">
        <span class="font-medium">{slider.label}</span>
        <SliderValue class="text-muted-foreground tabular-nums" />
      </div>
      <SliderControl class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
        <SliderTrack class="h-1 w-full rounded-2xl bg-input/90">
          <SliderIndicator class="rounded-2xl bg-primary" />
          <SliderThumb
            aria-label={slider.label}
            class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
          />
        </SliderTrack>
      </SliderControl>
    </Slider>
  {/each}
</div>

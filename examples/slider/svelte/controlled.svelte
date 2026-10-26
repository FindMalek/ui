<script lang="ts">
  import { Field, FieldLabel } from "@ui-sdk/svelte/field"
  import { Slider, SliderControl, SliderIndicator, SliderThumb, SliderTrack } from "@ui-sdk/svelte/slider"

  let value = $state<number | number[]>([0.3, 0.7])
  let reason = $state("")

  function reset() {
    value = [0.3, 0.7]
    reason = ""
  }
</script>

<Field class="flex w-full max-w-xs flex-col gap-3">
  <div class="flex items-center justify-between text-sm">
    <FieldLabel class="font-medium">Temperature</FieldLabel>
    <span class="text-muted-foreground tabular-nums">{[value].flat().join(", ")}</span>
  </div>
  <Slider
    bind:value
    min={0}
    max={1}
    step={0.1}
    onValueChange={(_value, details) => (reason = details.reason)}
  >
    <SliderControl class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
      <SliderTrack class="h-1 w-full rounded-2xl bg-input/90">
        <SliderIndicator class="rounded-2xl bg-primary" />
        <SliderThumb
          index={0}
          aria-label="Minimum temperature"
          class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
        />
        <SliderThumb
          index={1}
          aria-label="Maximum temperature"
          class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
        />
      </SliderTrack>
    </SliderControl>
  </Slider>
  <div class="flex gap-2">
    <button
      type="button"
      class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
      onclick={reset}
    >
      Reset
    </button>
  </div>
  <output class="text-sm text-muted-foreground">{reason ? `Last change: ${reason}` : "Drag a thumb."}</output>
</Field>

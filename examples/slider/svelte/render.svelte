<script lang="ts">
  import {
    Slider,
    SliderControl,
    SliderIndicator,
    SliderThumb,
    SliderTrack,
    SliderValue,
  } from "@ui-sdk/svelte/slider"
</script>

<Slider
  defaultValue={60}
  aria-label="Brightness"
  class="flex w-full max-w-xs flex-col gap-2"
>
  <SliderValue class="text-sm text-muted-foreground tabular-nums">
    {#snippet children(state)}Brightness {state.text}%{/snippet}
  </SliderValue>
  <SliderControl class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
    <SliderTrack class="h-1 w-full rounded-2xl bg-input/90">
      <SliderIndicator>
        {#snippet render({ props, state })}
          <div
            {...props}
            class={state.dragging
              ? "rounded-2xl bg-primary transition-colors"
              : "rounded-2xl bg-primary/70 transition-colors"}
          ></div>
        {/snippet}
      </SliderIndicator>
      <SliderThumb
        aria-label="Brightness"
        class="group block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
      >
        {#snippet render({ props, state, children })}
          <span {...props}>
            <span
              class={[
                "pointer-events-none absolute bottom-full mb-2 rounded-xl bg-foreground px-2 py-1 text-xs text-background tabular-nums opacity-0 transition-opacity group-has-focus-visible:opacity-100 group-data-dragging:opacity-100",
                state.percent > 90 ? "end-0" : state.percent < 10 ? "start-0" : "left-1/2 -translate-x-1/2",
              ]}
            >
              {state.thumbValue}
            </span>
            {@render children?.(state)}
          </span>
        {/snippet}
      </SliderThumb>
    </SliderTrack>
  </SliderControl>
</Slider>

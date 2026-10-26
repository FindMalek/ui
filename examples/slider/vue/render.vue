<script setup lang="ts">
import {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from "@ui-sdk/vue/slider"
</script>

<template>
  <Slider :default-value="60" aria-label="Brightness" class="flex w-full max-w-xs flex-col gap-2">
    <SliderValue v-slot="{ state }" class="text-sm text-muted-foreground tabular-nums"
      >Brightness {{ state.text }}%</SliderValue
    >
    <SliderControl class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
      <SliderTrack class="h-1 w-full rounded-2xl bg-input/90">
        <SliderIndicator>
          <template #render="{ props, state }">
            <div
              v-bind="props"
              :class="
                state.dragging
                  ? 'rounded-2xl bg-primary transition-colors'
                  : 'rounded-2xl bg-primary/70 transition-colors'
              "
            />
          </template>
        </SliderIndicator>
        <SliderThumb
          aria-label="Brightness"
          class="group block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md transition-[color,box-shadow] duration-200 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 ring-1 ring-black/10 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
        >
          <template #render="{ props, state, children }">
            <span v-bind="props">
              <span
                class="pointer-events-none absolute bottom-full mb-2 rounded-xl bg-foreground px-2 py-1 text-xs text-background tabular-nums opacity-0 transition-opacity group-has-focus-visible:opacity-100 group-data-dragging:opacity-100"
                :class="
                  state.percent > 90 ? 'end-0' : state.percent < 10 ? 'start-0' : 'left-1/2 -translate-x-1/2'
                "
                >{{ state.thumbValue }}</span
              >
              <component :is="children" />
            </span>
          </template>
        </SliderThumb>
      </SliderTrack>
    </SliderControl>
  </Slider>
</template>

<script setup lang="ts">
import { Slider, SliderControl, SliderIndicator, SliderThumb, SliderTrack } from "@ui-sdk/vue/slider"

const thumbs = ["Low", "Medium", "High"]
</script>

<template>
  <Slider :default-value="[10, 20, 70]" :step="10" class="w-full max-w-xs">
    <SliderControl class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
      <SliderTrack class="h-1 w-full rounded-2xl bg-input/90">
        <SliderIndicator class="rounded-2xl bg-primary" />
        <SliderThumb
          v-for="(label, index) in thumbs"
          :key="label"
          :index="index"
          :aria-label="label"
          class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
        />
      </SliderTrack>
    </SliderControl>
  </Slider>
</template>

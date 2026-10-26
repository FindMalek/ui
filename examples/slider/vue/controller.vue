<script setup lang="ts">
import {
  createSliderController,
  Slider,
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from "@ui-sdk/vue/slider"
import { Field, FieldLabel } from "@ui-sdk/vue/field"
import { ref } from "vue"

const volume = createSliderController<number>()
const reading = ref("")
</script>

<template>
  <div class="flex w-full max-w-xs flex-col gap-3">
    <Field>
      <Slider :default-value="40" :controller="volume" class="flex flex-col gap-2">
        <div class="flex items-center justify-between text-sm">
          <FieldLabel class="font-medium">Volume</FieldLabel>
          <SliderValue class="text-muted-foreground tabular-nums" />
        </div>
        <SliderControl class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
          <SliderTrack class="h-1 w-full rounded-2xl bg-input/90">
            <SliderIndicator class="rounded-2xl bg-primary" />
            <SliderThumb
              class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
            />
          </SliderTrack>
        </SliderControl>
      </Slider>
    </Field>
    <div class="flex flex-wrap gap-2">
      <button
        type="button"
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
        @click="volume.setValue(0)"
      >
        Mute
      </button>
      <button
        type="button"
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
        @click="volume.setValue(volume.getValue() + 10)"
      >
        Louder
      </button>
      <button
        type="button"
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
        @click="reading = `Volume is ${volume.getValue()}.`"
      >
        Read
      </button>
      <button
        type="button"
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
        @click="volume.focus()"
      >
        Focus
      </button>
    </div>
    <output v-if="reading" class="text-sm text-muted-foreground">{{ reading }}</output>
  </div>
</template>

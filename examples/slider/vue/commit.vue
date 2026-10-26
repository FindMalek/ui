<script setup lang="ts">
import { Field, FieldLabel } from "@ui-sdk/vue/field"
import {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
  SliderValue,
  type SliderValueCommitDetails,
} from "@ui-sdk/vue/slider"
import { ref } from "vue"

const save = () => new Promise((resolve) => setTimeout(resolve, 600))

const changes = ref(0)
const status = ref("Drag to change the brightness.")

async function onCommit(value: number | number[], details: SliderValueCommitDetails) {
  status.value = "Saving…"
  await save()
  status.value = `Saved ${value} (${details.reason}).`
}
</script>

<template>
  <Field class="flex w-full max-w-xs flex-col gap-3">
    <Slider
      :default-value="50"
      class="flex flex-col gap-2"
      @value-change="changes++"
      @value-commit="onCommit"
    >
      <div class="flex items-center justify-between text-sm">
        <FieldLabel class="font-medium">Brightness</FieldLabel>
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
    <output class="flex flex-col text-sm text-muted-foreground">
      <span>Changes: {{ changes }}</span>
      <span>{{ status }}</span>
    </output>
  </Field>
</template>

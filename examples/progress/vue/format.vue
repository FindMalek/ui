<script setup lang="ts">
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@ui-sdk/vue/progress"

const bars = [
  { label: "Transferred", value: 120, max: 250, format: { style: "unit", unit: "gigabyte" } },
  { label: "Processing", value: 87.25, format: { style: "percent", maximumFractionDigits: 1 } },
  { label: "Time left", value: 45, max: 60, format: (minutes: number) => `${60 - minutes} min left` },
  { label: "Fortschritt", value: 40, locale: "de-DE" },
] satisfies {
  label: string
  value: number
  max?: number
  format?: Intl.NumberFormatOptions | ((value: number) => string)
  locale?: string
}[]
</script>

<template>
  <div class="flex w-full max-w-xs flex-col gap-5 text-foreground">
    <Progress
      v-for="{ label, ...options } in bars"
      :key="label"
      v-bind="options"
      class="flex flex-wrap gap-3 text-foreground"
    >
      <ProgressLabel class="text-sm font-medium">{{ label }}</ProgressLabel>
      <ProgressValue class="ms-auto text-sm text-muted-foreground tabular-nums" />
      <ProgressTrack class="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
        <ProgressIndicator class="h-full bg-primary transition-[width] motion-reduce:transition-none" />
      </ProgressTrack>
    </Progress>
  </div>
</template>

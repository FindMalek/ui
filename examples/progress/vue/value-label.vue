<script setup lang="ts">
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
  type GaugeLabelDetails,
} from "@ui-sdk/vue/progress"

const valueLabel = (value: number | null, details: GaugeLabelDetails) =>
  `${value} of ${details.max} files, ${details.formatted}`
</script>

<template>
  <Progress
    :value="3"
    :max="12"
    :get-value-label="valueLabel"
    class="flex w-full max-w-xs flex-wrap gap-3 text-foreground"
  >
    <ProgressLabel class="text-sm font-medium">Copying files</ProgressLabel>
    <ProgressValue class="ms-auto text-sm text-muted-foreground tabular-nums">3 of 12</ProgressValue>
    <ProgressTrack class="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
      <ProgressIndicator class="h-full bg-primary transition-[width] motion-reduce:transition-none" />
    </ProgressTrack>
  </Progress>
</template>

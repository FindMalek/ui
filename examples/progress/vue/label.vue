<script setup lang="ts">
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@ui-sdk/vue/progress"
</script>

<template>
  <Progress :value="56" class="flex w-full max-w-xs flex-wrap items-center gap-x-3 gap-y-2">
    <ProgressLabel class="text-sm font-medium">Upload progress</ProgressLabel>
    <ProgressValue class="ms-auto text-sm text-muted-foreground tabular-nums" />
    <ProgressTrack class="h-2 w-full overflow-hidden rounded-full bg-muted">
      <ProgressIndicator class="h-full bg-primary transition-[width]" />
    </ProgressTrack>
  </Progress>
</template>

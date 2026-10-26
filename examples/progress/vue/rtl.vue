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
  <div dir="rtl" class="w-full max-w-xs">
    <Progress :value="56" locale="ar-EG" class="flex flex-wrap items-center gap-x-3 gap-y-2">
      <ProgressLabel class="text-sm font-medium">تقدم الرفع</ProgressLabel>
      <ProgressValue class="ms-auto text-sm text-muted-foreground tabular-nums" />
      <ProgressTrack class="h-2 w-full overflow-hidden rounded-full bg-muted">
        <ProgressIndicator class="h-full bg-primary transition-[width]" />
      </ProgressTrack>
    </Progress>
  </div>
</template>

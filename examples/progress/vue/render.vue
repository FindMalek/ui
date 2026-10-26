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
  <Progress :value="18" class="flex w-full max-w-xs flex-wrap items-center gap-x-3 gap-y-2">
    <ProgressLabel class="text-sm font-medium">Battery</ProgressLabel>
    <ProgressValue v-slot="{ state }" class="ms-auto text-sm text-muted-foreground tabular-nums">
      {{ state.status === "complete" ? "Charged" : `${state.text} charged` }}
    </ProgressValue>
    <ProgressTrack class="block h-2 w-full overflow-hidden rounded-full bg-muted">
      <template #render="{ props }">
        <span v-bind="props">
          <ProgressIndicator>
            <template #render="{ props, state }">
              <div
                v-bind="props"
                :class="
                  (state.percent ?? 0) < 20
                    ? 'h-full bg-destructive transition-[width]'
                    : 'h-full bg-primary transition-[width]'
                "
              />
            </template>
          </ProgressIndicator>
        </span>
      </template>
    </ProgressTrack>
  </Progress>
</template>

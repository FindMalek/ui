<script setup lang="ts">
import { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue } from "@ui-sdk/vue/meter"
</script>

<template>
  <Meter :value="91" class="flex w-full max-w-xs flex-wrap items-center gap-x-3 gap-y-2">
    <MeterLabel class="text-sm font-medium">Disk</MeterLabel>
    <MeterValue v-slot="{ state }" class="ms-auto text-sm text-muted-foreground tabular-nums">
      {{ state.text }} used
    </MeterValue>
    <MeterTrack class="block h-2 w-full overflow-hidden rounded-full bg-muted">
      <template #render="{ props }">
        <span v-bind="props">
          <MeterIndicator>
            <template #render="{ props, state }">
              <div
                v-bind="props"
                :class="
                  state.percent >= 90
                    ? 'h-full bg-destructive transition-[width]'
                    : state.percent >= 70
                      ? 'h-full bg-amber-500 transition-[width]'
                      : 'h-full bg-primary transition-[width]'
                "
              />
            </template>
          </MeterIndicator>
        </span>
      </template>
    </MeterTrack>
  </Meter>
</template>

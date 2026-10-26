<script setup lang="ts">
import { Check, ChevronsUpDown, Monitor, ZoomIn, ZoomOut } from "@lucide/vue"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectTrigger,
  SelectValue,
} from "@ui-sdk/vue/select"
import { Toolbar, ToolbarButton, ToolbarSeparator } from "@ui-sdk/vue/toolbar"
import { computed, ref } from "vue"

const zooms = ["50%", "75%", "100%", "150%", "200%"]

const zoom = ref("100%")
const index = computed(() => zooms.indexOf(zoom.value))
</script>

<template>
  <Toolbar aria-label="View" class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1">
    <ToolbarButton
      aria-label="Zoom out"
      :disabled="index === 0"
      @click="zoom = zooms[index - 1]"
      class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
    >
      <ZoomOut class="size-4" />
    </ToolbarButton>
    <Select :value="zoom" @value-change="(value: unknown) => typeof value === 'string' && (zoom = value)">
      <ToolbarButton
        aria-label="Zoom"
        class="inline-flex h-8 w-22 shrink-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none tabular-nums data-open:bg-muted"
      >
        <template #render="{ props }">
          <SelectTrigger v-bind="props">
            <SelectValue />
            <ChevronsUpDown class="size-4 text-muted-foreground" />
          </SelectTrigger>
        </template>
      </ToolbarButton>
      <SelectContent
        class="max-h-(--available-height) overflow-x-hidden overflow-y-auto rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none min-w-(--anchor-width)"
      >
        <SelectItem
          v-for="zoom in zooms"
          :key="zoom"
          :value="zoom"
          class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm tabular-nums outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 leading-5"
        >
          {{ zoom }}
          <SelectItemIndicator class="absolute end-2 flex size-4 items-center justify-center">
            <Check class="size-4" />
          </SelectItemIndicator>
        </SelectItem>
      </SelectContent>
    </Select>
    <ToolbarButton
      aria-label="Zoom in"
      :disabled="index === zooms.length - 1"
      @click="zoom = zooms[index + 1]"
      class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
    >
      <ZoomIn class="size-4" />
    </ToolbarButton>
    <ToolbarSeparator class="mx-1 h-5 w-px shrink-0 bg-border" />
    <ToolbarButton
      aria-label="Fit to screen"
      @click="zoom = '100%'"
      class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
    >
      <Monitor class="size-4" />
    </ToolbarButton>
  </Toolbar>
</template>

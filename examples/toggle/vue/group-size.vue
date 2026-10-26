<script setup lang="ts">
import { Bold, Italic, Underline } from "@lucide/vue"
import { Toggle, ToggleGroup, ToggleIcon } from "@ui-sdk/vue/toggle"

const formatting = [
  { value: "bold", label: "Bold", icon: Bold },
  { value: "italic", label: "Italic", icon: Italic },
  { value: "underline", label: "Underline", icon: Underline },
]
</script>

<template>
  <div class="flex flex-col items-start gap-4">
    <ToggleGroup multiple aria-label="Text formatting, small" class="flex w-fit items-center gap-1">
      <Toggle
        v-for="item in formatting"
        :key="item.value"
        :value="item.value"
        :aria-label="item.label"
        class="inline-flex h-7 min-w-7 shrink-0 items-center justify-center rounded-2xl border border-input bg-transparent px-1.5 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        <ToggleIcon class="flex">
          <component :is="item.icon" class="size-3.5" />
        </ToggleIcon>
      </Toggle>
    </ToggleGroup>
    <ToggleGroup multiple aria-label="Text formatting" class="flex w-fit items-center gap-1">
      <Toggle
        v-for="item in formatting"
        :key="item.value"
        :value="item.value"
        :aria-label="item.label"
        class="inline-flex h-8 min-w-8 shrink-0 items-center justify-center rounded-2xl border border-input bg-transparent px-2 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        <ToggleIcon class="flex">
          <component :is="item.icon" class="size-4" />
        </ToggleIcon>
      </Toggle>
    </ToggleGroup>
    <ToggleGroup multiple aria-label="Text formatting, large" class="flex w-fit items-center gap-1">
      <Toggle
        v-for="item in formatting"
        :key="item.value"
        :value="item.value"
        :aria-label="item.label"
        class="inline-flex h-9 min-w-9 shrink-0 items-center justify-center rounded-2xl border border-input bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        <ToggleIcon class="flex">
          <component :is="item.icon" class="size-4" />
        </ToggleIcon>
      </Toggle>
    </ToggleGroup>
  </div>
</template>

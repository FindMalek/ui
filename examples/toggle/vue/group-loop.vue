<script setup lang="ts">
import { Bold, Italic, Strikethrough, Underline } from "@lucide/vue"
import { Toggle, ToggleGroup, ToggleIcon } from "@ui-sdk/vue/toggle"

const formatting = [
  { value: "bold", label: "Bold", icon: Bold },
  { value: "italic", label: "Italic", icon: Italic },
  { value: "underline", label: "Underline", icon: Underline },
  { value: "strikethrough", label: "Strikethrough", icon: Strikethrough },
]
</script>

<template>
  <ToggleGroup multiple :loop="false" aria-label="Text formatting" class="flex w-fit items-center gap-1">
    <Toggle
      v-for="item in formatting"
      :key="item.value"
      :value="item.value"
      :aria-label="item.label"
      class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
    >
      <ToggleIcon class="flex">
        <component :is="item.icon" class="size-4" />
      </ToggleIcon>
    </Toggle>
  </ToggleGroup>
</template>

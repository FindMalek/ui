<script setup lang="ts">
import { Bold, Code, Italic, Strikethrough } from "@lucide/vue"
import { Toggle, ToggleGroup } from "@ui-sdk/vue/toggle"
import { Toolbar, ToolbarButton, ToolbarSeparator } from "@ui-sdk/vue/toolbar"
import { ref } from "vue"

const formats = [
  { value: "bold", label: "Bold", icon: Bold },
  { value: "italic", label: "Italic", icon: Italic },
  { value: "strikethrough", label: "Strikethrough", icon: Strikethrough },
]

const style = ref<string[]>(["bold"])
</script>

<template>
  <div class="flex flex-col items-start gap-3">
    <Toolbar aria-label="Text" class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1">
      <ToggleGroup v-model:value="style" multiple aria-label="Text style" class="flex items-center gap-1">
        <Toggle
          v-for="format in formats"
          :key="format.value"
          :value="format.value"
          :aria-label="format.label"
          class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2 text-sm font-medium outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
        >
          <component :is="format.icon" class="size-4" />
        </Toggle>
      </ToggleGroup>
      <ToolbarSeparator class="mx-1 h-5 w-px shrink-0 bg-border" />
      <Toggle
        aria-label="Code"
        class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2 text-sm font-medium outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
      >
        <Code class="size-4" />
      </Toggle>
      <ToolbarButton
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
        @click="style = []"
        >Clear</ToolbarButton
      >
    </Toolbar>
    <output class="text-sm text-muted-foreground">Style: {{ style.join(", ") || "none" }}</output>
  </div>
</template>

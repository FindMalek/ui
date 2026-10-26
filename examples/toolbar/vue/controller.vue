<script setup lang="ts">
import { createToolbarController, Toolbar, ToolbarButton } from "@ui-sdk/vue/toolbar"
import { useShortcut } from "@ui-sdk/vue/shortcuts"
import { ref } from "vue"

const toolbar = createToolbarController()

const action = ref("nothing yet")
useShortcut("alt+f10", () => toolbar.focus(), { allowInInput: true })
</script>

<template>
  <div class="flex w-full max-w-sm flex-col items-start gap-3">
    <textarea
      aria-label="Notes"
      placeholder="Type, then press Alt+F10"
      class="min-h-16 w-full min-w-0 resize-none rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none"
    />
    <Toolbar
      :controller="toolbar"
      aria-label="Notes"
      class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1"
    >
      <ToolbarButton
        v-for="label in ['Bold', 'Italic', 'Link']"
        :key="label"
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
        @click="action = label.toLowerCase()"
      >
        {{ label }}
      </ToolbarButton>
    </Toolbar>
    <div class="flex items-center gap-2">
      <button
        type="button"
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
        @click="toolbar.focus()"
      >
        Focus toolbar
      </button>
      <output class="text-sm text-muted-foreground">Last: {{ action }}</output>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Image, MoveHorizontal, Pencil, Trash } from "@lucide/vue"
import { Toggle, ToggleGroup } from "@ui-sdk/vue/toggle"
import { Toolbar, ToolbarButton, ToolbarSeparator } from "@ui-sdk/vue/toolbar"
</script>

<template>
  <Toolbar
    orientation="vertical"
    aria-label="Tools"
    class="flex w-fit flex-col items-center gap-1 rounded-3xl border border-border p-1"
  >
    <ToggleGroup
      :default-value="['pencil']"
      aria-label="Tool"
      orientation="vertical"
      class="flex flex-col items-center gap-1"
    >
      <Toggle
        value="pencil"
        aria-label="Pencil"
        class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2 text-sm font-medium outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
      >
        <Pencil class="size-4" />
      </Toggle>
      <Toggle
        value="image"
        aria-label="Image"
        class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2 text-sm font-medium outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
      >
        <Image class="size-4" />
      </Toggle>
      <Toggle
        value="move"
        aria-label="Move"
        class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2 text-sm font-medium outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
      >
        <MoveHorizontal class="size-4" />
      </Toggle>
    </ToggleGroup>
    <ToolbarSeparator class="my-1 h-px w-5 shrink-0 bg-border" />
    <ToolbarButton
      aria-label="Delete"
      class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
    >
      <Trash class="size-4" />
    </ToolbarButton>
  </Toolbar>
</template>

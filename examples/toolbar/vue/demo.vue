<script setup lang="ts">
import { Bold, ChevronDown, Italic, Underline } from "@lucide/vue"
import { Menu, MenuContent, MenuItem, MenuTrigger } from "@ui-sdk/vue/menu"
import { Toggle, ToggleGroup } from "@ui-sdk/vue/toggle"
import { Toolbar, ToolbarButton, ToolbarSeparator } from "@ui-sdk/vue/toolbar"
</script>

<template>
  <Toolbar aria-label="Formatting" class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1">
    <ToggleGroup multiple aria-label="Text style" class="flex items-center gap-1">
      <Toggle
        value="bold"
        aria-label="Bold"
        class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2 text-sm font-medium outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
      >
        <Bold class="size-4" />
      </Toggle>
      <Toggle
        value="italic"
        aria-label="Italic"
        class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2 text-sm font-medium outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
      >
        <Italic class="size-4" />
      </Toggle>
      <Toggle
        value="underline"
        aria-label="Underline"
        class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2 text-sm font-medium outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
      >
        <Underline class="size-4" />
      </Toggle>
    </ToggleGroup>
    <ToolbarSeparator class="mx-1 h-5 w-px shrink-0 bg-border" />
    <Menu>
      <ToolbarButton
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none data-open:bg-muted"
      >
        <template #render="{ props }">
          <MenuTrigger v-bind="props">
            Sans
            <ChevronDown class="size-4 text-muted-foreground" />
          </MenuTrigger>
        </template>
      </ToolbarButton>
      <MenuContent
        class="max-h-(--available-height) overflow-x-hidden overflow-y-auto rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none min-w-36"
      >
        <MenuItem
          v-for="font in ['Sans', 'Serif', 'Mono']"
          :key="font"
          class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 leading-5"
        >
          {{ font }}
        </MenuItem>
      </MenuContent>
    </Menu>
  </Toolbar>
</template>

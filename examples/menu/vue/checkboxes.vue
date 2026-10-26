<script setup lang="ts">
import { Check } from "@lucide/vue"
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItemIndicator,
  MenuSeparator,
  MenuTrigger,
} from "@ui-sdk/vue/menu"
import { ref } from "vue"

const statusBar = ref(true)
const minimap = ref(false)
</script>

<template>
  <Menu>
    <MenuTrigger
      class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
      >View</MenuTrigger
    >
    <MenuContent
      class="min-w-40 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
    >
      <MenuGroup>
        <MenuGroupLabel class="px-2 py-1 text-xs text-muted-foreground">Appearance</MenuGroupLabel>
        <MenuCheckboxItem
          v-model:checked="statusBar"
          class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
          value="status-bar"
        >
          <MenuItemIndicator
            keep-mounted
            class="flex size-4 shrink-0 items-center justify-center data-unchecked:invisible"
          >
            <Check aria-hidden="true" class="size-4" />
          </MenuItemIndicator>
          Status bar
        </MenuCheckboxItem>
        <MenuCheckboxItem
          v-model:checked="minimap"
          class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
          value="minimap"
        >
          <MenuItemIndicator
            keep-mounted
            class="flex size-4 shrink-0 items-center justify-center data-unchecked:invisible"
          >
            <Check aria-hidden="true" class="size-4" />
          </MenuItemIndicator>
          Minimap
        </MenuCheckboxItem>
      </MenuGroup>
      <MenuSeparator class="-mx-1 my-1 h-px bg-border/50" />
      <MenuCheckboxItem
        class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
        value="line-numbers"
        default-checked
      >
        <MenuItemIndicator
          keep-mounted
          class="flex size-4 shrink-0 items-center justify-center data-unchecked:invisible"
        >
          <Check aria-hidden="true" class="size-4" />
        </MenuItemIndicator>
        Line numbers
      </MenuCheckboxItem>
      <MenuCheckboxItem
        class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
        value="word-wrap"
      >
        <MenuItemIndicator
          keep-mounted
          class="flex size-4 shrink-0 items-center justify-center data-unchecked:invisible"
        >
          <Check aria-hidden="true" class="size-4" />
        </MenuItemIndicator>
        Word wrap
      </MenuCheckboxItem>
    </MenuContent>
  </Menu>
  <output class="mt-3 text-sm text-muted-foreground block min-h-5">
    Status bar {{ statusBar ? "shown" : "hidden" }}, minimap {{ minimap ? "shown" : "hidden" }}
  </output>
</template>

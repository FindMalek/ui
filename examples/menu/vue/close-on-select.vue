<script setup lang="ts">
import { Check, Monitor, ZoomIn, ZoomOut } from "@lucide/vue"
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@ui-sdk/vue/menu"
import { ref } from "vue"

const zoom = ref(100)
const fit = ref(false)
</script>

<template>
  <Menu>
    <MenuTrigger
      class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
      :aria-label="fit ? 'Zoom to fit' : `Zoom ${zoom}%`"
    >
      <ZoomIn class="size-4" />
      {{ fit ? "Fit" : `${zoom}%` }}
    </MenuTrigger>
    <MenuContent
      class="min-w-44 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
    >
      <MenuGroup>
        <MenuGroupLabel class="px-2 py-1 text-xs text-muted-foreground">Zoom {{ zoom }}%</MenuGroupLabel>
        <MenuItem
          class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
          :close-on-select="false"
          :disabled="zoom >= 200"
          @select="zoom = Math.min(200, zoom + 10)"
        >
          <ZoomIn class="size-4 text-muted-foreground group-data-highlighted:text-current" />
          Zoom in
        </MenuItem>
        <MenuItem
          class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
          :close-on-select="false"
          :disabled="zoom <= 50"
          @select="zoom = Math.max(50, zoom - 10)"
        >
          <ZoomOut class="size-4 text-muted-foreground group-data-highlighted:text-current" />
          Zoom out
        </MenuItem>
        <MenuItem
          class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
          @select="zoom = 100"
        >
          <span class="size-4 shrink-0" />
          Reset to 100%
        </MenuItem>
      </MenuGroup>
      <MenuSeparator class="-mx-1 my-1 h-px bg-border/50" />
      <MenuCheckboxItem
        v-model:checked="fit"
        class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
        value="fit"
        close-on-select
      >
        <Monitor class="size-4 text-muted-foreground group-data-highlighted:text-current" />
        Fit to window
        <Check aria-hidden="true" class="invisible ms-auto size-4 group-data-checked:visible" />
      </MenuCheckboxItem>
    </MenuContent>
  </Menu>
</template>

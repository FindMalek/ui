<script setup lang="ts">
import { Archive, Copy, Pencil, Trash } from "@lucide/vue"
import { Menu, MenuContent, MenuItem, MenuSeparator, MenuTrigger } from "@ui-sdk/vue/menu"
import { ref } from "vue"

const action = ref("")
</script>

<template>
  <Menu @action="(value: string) => (action = value)">
    <MenuTrigger
      class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30"
      >Actions</MenuTrigger
    >
    <MenuContent
      class="min-w-40 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
    >
      <MenuItem
        class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 data-destructive:text-destructive data-destructive:data-highlighted:bg-destructive/10 data-destructive:data-highlighted:text-destructive dark:data-destructive:data-highlighted:bg-destructive/20"
        value="edit"
      >
        <Pencil
          class="size-4 text-muted-foreground group-data-highlighted:text-current group-data-destructive:text-current"
        />
        Edit
      </MenuItem>
      <MenuItem
        class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 data-destructive:text-destructive data-destructive:data-highlighted:bg-destructive/10 data-destructive:data-highlighted:text-destructive dark:data-destructive:data-highlighted:bg-destructive/20"
        value="duplicate"
      >
        <Copy
          class="size-4 text-muted-foreground group-data-highlighted:text-current group-data-destructive:text-current"
        />
        Duplicate
      </MenuItem>
      <MenuItem
        class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 data-destructive:text-destructive data-destructive:data-highlighted:bg-destructive/10 data-destructive:data-highlighted:text-destructive dark:data-destructive:data-highlighted:bg-destructive/20"
        value="archive"
      >
        <Archive
          class="size-4 text-muted-foreground group-data-highlighted:text-current group-data-destructive:text-current"
        />
        Archive
      </MenuItem>
      <MenuSeparator class="-mx-1 my-1 h-px bg-border/50" />
      <MenuItem
        class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 data-destructive:text-destructive data-destructive:data-highlighted:bg-destructive/10 data-destructive:data-highlighted:text-destructive dark:data-destructive:data-highlighted:bg-destructive/20"
        value="delete"
        destructive
      >
        <Trash
          class="size-4 text-muted-foreground group-data-highlighted:text-current group-data-destructive:text-current"
        />
        Delete
      </MenuItem>
    </MenuContent>
  </Menu>
  <output class="mt-3 text-sm text-muted-foreground">{{ action ? `Ran ${action}` : "Pick an item" }}</output>
</template>

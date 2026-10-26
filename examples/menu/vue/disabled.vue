<script setup lang="ts">
import { Check, ChevronRight } from "@lucide/vue"
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroupLabel,
  MenuItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from "@ui-sdk/vue/menu"
import { ref } from "vue"

const action = ref("")
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-2">
    <Menu @action="(value: string) => (action = value)">
      <MenuTrigger
        class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
        >Document</MenuTrigger
      >
      <MenuContent
        class="min-w-48 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 **:data-[slot=menu-shortcut]:ms-auto **:data-[slot=menu-shortcut]:ps-4 **:data-[slot=menu-shortcut]:text-xs **:data-[slot=menu-shortcut]:tracking-widest **:data-[slot=menu-shortcut]:text-muted-foreground motion-reduce:transition-none"
      >
        <MenuItem
          class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
          value="undo"
          shortcut="mod+z"
          disabled
        >
          <span class="size-4 shrink-0" />
          Undo
        </MenuItem>
        <MenuItem
          class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
          value="redo"
          shortcut="mod+shift+z"
        >
          <span class="size-4 shrink-0" />
          Redo
        </MenuItem>
        <MenuSeparator class="-mx-1 my-1 h-px bg-border/50" />
        <MenuCheckboxItem
          class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
          value="autosave"
          default-checked
          disabled
        >
          <Check aria-hidden="true" class="invisible size-4 group-data-checked:visible" />
          Autosave
        </MenuCheckboxItem>
        <MenuSeparator class="-mx-1 my-1 h-px bg-border/50" />
        <MenuRadioGroup default-value="pdf">
          <MenuGroupLabel class="px-2 py-1 text-xs text-muted-foreground">Export as</MenuGroupLabel>
          <MenuRadioItem
            class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
            value="pdf"
          >
            <Check aria-hidden="true" class="invisible size-4 group-data-checked:visible" />
            PDF
          </MenuRadioItem>
          <MenuRadioItem
            class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
            value="docx"
            disabled
          >
            <Check aria-hidden="true" class="invisible size-4 group-data-checked:visible" />
            Word
          </MenuRadioItem>
          <MenuRadioItem
            class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
            value="markdown"
          >
            <Check aria-hidden="true" class="invisible size-4 group-data-checked:visible" />
            Markdown
          </MenuRadioItem>
        </MenuRadioGroup>
        <MenuSeparator class="-mx-1 my-1 h-px bg-border/50" />
        <MenuSub>
          <MenuSubTrigger
            class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 data-open:bg-accent data-open:text-accent-foreground"
            disabled
          >
            <span class="size-4 shrink-0" />
            Move to
            <ChevronRight aria-hidden="true" class="ms-auto size-4 rtl:rotate-180" />
          </MenuSubTrigger>
          <MenuSubContent
            class="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
          >
            <MenuItem
              class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
              >Archive</MenuItem
            >
          </MenuSubContent>
        </MenuSub>
      </MenuContent>
    </Menu>
    <Menu>
      <MenuTrigger
        class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
        disabled
        >Locked</MenuTrigger
      >
      <MenuContent
        class="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
      >
        <MenuItem
          class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
          >Unlock</MenuItem
        >
      </MenuContent>
    </Menu>
  </div>
  <output class="mt-3 text-sm text-muted-foreground block min-h-5">
    {{ action ? `Ran ${action}` : "Disabled items can be focused but not chosen" }}
  </output>
</template>

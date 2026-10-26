<script setup lang="ts">
import { ChevronRight, Download, Link, Share, Trash } from "@lucide/vue"
import {
  Menu,
  MenuContent,
  MenuItem,
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
  <Menu presentation="sheet" @action="(value: string) => (action = value)">
    <MenuTrigger
      class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
      >Options</MenuTrigger
    >
    <MenuContent
      class="outline-none data-[presentation=popover]:bg-popover text-popover-foreground ring-1 ring-foreground/5 data-[presentation=popover]:min-w-44 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl p-1 text-sm shadow-xl transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-[presentation=sheet]:bg-popover text-popover-foreground ring-1 ring-foreground/5 data-[presentation=sheet]:rounded-t-3xl px-2 pt-2 pb-[max(env(safe-area-inset-bottom),0.75rem)] text-base [--sheet-backdrop:rgb(0_0_0/0.4)] motion-reduce:transition-none"
    >
      <div aria-hidden="true" class="mx-auto mb-2 h-1 w-10 rounded-full bg-input" />
      <MenuItem
        class="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground"
        value="share"
      >
        <Share class="size-5 text-muted-foreground group-data-highlighted:text-current" />
        Share
      </MenuItem>
      <MenuItem
        class="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground"
        value="copy-link"
      >
        <Link class="size-5 text-muted-foreground group-data-highlighted:text-current" />
        Copy link
      </MenuItem>
      <MenuSub>
        <MenuSubTrigger
          class="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground"
        >
          <Download class="size-5 text-muted-foreground group-data-highlighted:text-current" />
          Move to
          <ChevronRight
            aria-hidden="true"
            class="ms-auto size-4 text-muted-foreground transition-transform group-data-open:rotate-90 rtl:rotate-180 rtl:group-data-open:rotate-90 motion-reduce:transition-none"
          />
        </MenuSubTrigger>
        <MenuSubContent
          class="outline-none data-[presentation=popover]:bg-popover text-popover-foreground ring-1 ring-foreground/5 data-[presentation=popover]:min-w-44 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl p-1 text-sm shadow-xl transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
        >
          <MenuItem
            class="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground"
            value="inbox"
            >Inbox</MenuItem
          >
          <MenuItem
            class="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground"
            value="archive"
            >Archive</MenuItem
          >
        </MenuSubContent>
      </MenuSub>
      <MenuSeparator class="-mx-1 my-1 h-px bg-border/50" />
      <MenuItem
        class="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground"
        value="delete"
        destructive
      >
        <Trash aria-hidden="true" class="size-5 text-muted-foreground group-data-highlighted:text-current" />
        Delete
      </MenuItem>
    </MenuContent>
  </Menu>
  <output class="mt-3 text-sm text-muted-foreground block min-h-5">{{
    action ? `Ran ${action}` : "Opens as a sheet"
  }}</output>
</template>

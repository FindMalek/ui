<script setup lang="ts">
import { Ellipsis } from "@lucide/vue"
import {
  createMenuController,
  Menu,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@ui-sdk/vue/menu"
import { ref } from "vue"

type File = { name: string; size: string }

const files: File[] = [
  { name: "Roadmap.pdf", size: "2.4 MB" },
  { name: "Budget.xlsx", size: "860 KB" },
  { name: "Team photo.jpg", size: "5.1 MB" },
]

const menu = createMenuController<File>()
const FileMenuContent = MenuContent<File>
const status = ref("")

async function openFirst(event: MouseEvent) {
  const result = await menu.open({ payload: files[0], anchor: event.currentTarget as HTMLElement })
  status.value = `Closed with ${result.reason}`
}
</script>

<template>
  <ul class="w-full max-w-sm divide-y divide-border rounded-2xl border border-border">
    <li v-for="file in files" :key="file.name" class="flex items-center gap-3 py-1.5 ps-3 pe-1.5 text-sm">
      {{ file.name }}
      <span class="ms-auto text-sm text-muted-foreground">{{ file.size }}</span>
      <MenuTrigger
        :controller="menu"
        :payload="file"
        class="inline-flex cursor-default size-7 shrink-0 items-center justify-center rounded-2xl text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground motion-reduce:transition-none"
        :aria-label="`Actions for ${file.name}`"
      >
        <Ellipsis aria-hidden="true" class="size-4" />
      </MenuTrigger>
    </li>
  </ul>
  <Menu :controller="menu" @action="(action: string) => (status = `${action} ${menu.getPayload()?.name}`)">
    <FileMenuContent
      v-slot="{ state }"
      class="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
      align="end"
    >
      <MenuGroup>
        <MenuGroupLabel class="px-2 py-1 text-xs text-muted-foreground">{{
          state.payload?.name
        }}</MenuGroupLabel>
        <MenuItem
          class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
          value="open"
          >Open</MenuItem
        >
        <MenuItem
          class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
          value="rename"
          >Rename</MenuItem
        >
        <MenuItem
          class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
          value="duplicate"
          >Duplicate</MenuItem
        >
      </MenuGroup>
      <MenuSeparator class="-mx-1 my-1 h-px bg-border/50" />
      <MenuItem
        class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
        value="delete"
        >Delete</MenuItem
      >
    </FileMenuContent>
  </Menu>
  <button
    class="mt-3 inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
    @click="openFirst"
  >
    Open for {{ files[0].name }}
  </button>
  <output class="mt-3 text-sm text-muted-foreground block min-h-5">{{
    status || "Pick a file's actions"
  }}</output>
</template>

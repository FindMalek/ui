<script setup lang="ts">
import { Archive, ArrowRight, Mail, Pencil, Star } from "@lucide/vue"
import { Listbox, ListboxItem, ListboxItemIcon } from "@ui-sdk/vue/listbox"

const views = [
  { value: "inbox", label: "Inbox", icon: Mail },
  { value: "starred", label: "Starred", icon: Star },
  { value: "drafts", label: "Drafts", icon: Pencil },
  { value: "archive", label: "Archive", icon: Archive },
  { value: "next", label: "Next page", icon: ArrowRight },
]
</script>

<template>
  <Listbox
    default-value="inbox"
    aria-label="Mailbox"
    class="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none"
  >
    <ListboxItem
      v-for="view in views"
      :key="view.value"
      :value="view.value"
      class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-selected:font-medium"
    >
      <ListboxItemIcon
        :mirror="view.icon === ArrowRight"
        class="flex text-muted-foreground group-data-highlighted:text-accent-foreground group-data-selected:text-accent-foreground"
      >
        <component :is="view.icon" class="pointer-events-none block size-4 shrink-0" />
      </ListboxItemIcon>
      {{ view.label }}
    </ListboxItem>
  </Listbox>
</template>

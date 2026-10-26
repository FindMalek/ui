<script setup lang="ts">
import { Link, Mail, Save, Share } from "@lucide/vue"
import { Menu, MenuContent, MenuItem, MenuItemIcon, MenuTrigger } from "@ui-sdk/vue/menu"
import { Toolbar, ToolbarButton } from "@ui-sdk/vue/toolbar"
import { ref } from "vue"

const action = ref("nothing yet")
</script>

<template>
  <div class="flex flex-col items-start gap-3">
    <Toolbar aria-label="Document" class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1">
      <ToolbarButton
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
        @click="action = 'save'"
      >
        <Save class="size-4" />
        Save
      </ToolbarButton>
      <Menu @action="(value: string) => (action = value)">
        <ToolbarButton
          class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none data-open:bg-muted"
        >
          <template #render="{ props }">
            <MenuTrigger v-bind="props">
              <Share class="size-4" />
              Share
            </MenuTrigger>
          </template>
        </ToolbarButton>
        <MenuContent
          class="max-h-(--available-height) overflow-x-hidden overflow-y-auto rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none min-w-36"
        >
          <MenuItem
            value="email"
            class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 leading-5"
          >
            <MenuItemIcon class="flex text-muted-foreground">
              <Mail class="size-4" />
            </MenuItemIcon>
            Email
          </MenuItem>
          <MenuItem
            value="link"
            class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 leading-5"
          >
            <MenuItemIcon class="flex text-muted-foreground">
              <Link class="size-4" />
            </MenuItemIcon>
            Copy link
          </MenuItem>
        </MenuContent>
      </Menu>
      <ToolbarButton
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
        @click="action = 'print'"
        >Print</ToolbarButton
      >
    </Toolbar>
    <output class="text-sm text-muted-foreground">Last: {{ action }}</output>
  </div>
</template>

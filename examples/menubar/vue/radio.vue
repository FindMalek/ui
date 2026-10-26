<script setup lang="ts">
import {
  Menu,
  MenuContent,
  MenuItemIndicator,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
} from "@ui-sdk/vue/menu"
import { Menubar } from "@ui-sdk/vue/menubar"
import { ref } from "vue"

const profiles = [
  { value: "andy", label: "Andy" },
  { value: "benoit", label: "Benoit" },
  { value: "luis", label: "Luis" },
]

const themes = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
]

const theme = ref("system")
</script>

<template>
  <div class="flex flex-col items-start gap-3">
    <Menubar class="flex h-8 w-fit items-center rounded-2xl border border-border p-[3px]">
      <Menu>
        <MenuTrigger
          class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted"
          >Profiles</MenuTrigger
        >
        <MenuContent
          class="min-w-36 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
        >
          <MenuRadioGroup default-value="benoit">
            <MenuRadioItem
              v-for="profile in profiles"
              :key="profile.value"
              :value="profile.value"
              class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              <MenuItemIndicator
                class="pointer-events-none absolute start-1.5 flex size-4 items-center justify-center"
              >
                <span class="size-2 rounded-full bg-current" />
              </MenuItemIndicator>
              {{ profile.label }}
            </MenuRadioItem>
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
      <Menu>
        <MenuTrigger
          class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted"
          >Theme</MenuTrigger
        >
        <MenuContent
          class="min-w-36 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
        >
          <MenuRadioGroup v-model:value="theme">
            <MenuRadioItem
              v-for="option in themes"
              :key="option.value"
              :value="option.value"
              class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              <MenuItemIndicator
                class="pointer-events-none absolute start-1.5 flex size-4 items-center justify-center"
              >
                <span class="size-2 rounded-full bg-current" />
              </MenuItemIndicator>
              {{ option.label }}
            </MenuRadioItem>
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
    </Menubar>
    <output class="text-sm text-muted-foreground">Theme: {{ theme }}</output>
  </div>
</template>

<script setup lang="ts">
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "@lucide/vue"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandItemIcon,
  CommandList,
  CommandSeparator,
} from "@ui-sdk/vue/command"

const groups = [
  {
    label: "Suggestions",
    items: [
      { value: "calendar", label: "Calendar", icon: Calendar },
      { value: "emoji", label: "Search Emoji", icon: Smile },
      { value: "calculator", label: "Calculator", icon: Calculator },
    ],
  },
  {
    label: "Settings",
    items: [
      { value: "profile", label: "Profile", icon: User },
      { value: "billing", label: "Billing", icon: CreditCard },
      { value: "settings", label: "Settings", icon: Settings },
    ],
  },
]
</script>

<template>
  <Command
    class="flex h-80 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5"
  >
    <div class="shrink-0 p-1 pb-0">
      <CommandInput
        aria-label="Search commands"
        placeholder="Type a command or search..."
        class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
      />
    </div>
    <CommandEmpty class="m-0 shrink-0 py-6 text-center text-sm leading-5 text-muted-foreground empty:hidden"
      >No results found.</CommandEmpty
    >
    <CommandList class="min-h-0 flex-1 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none">
      <template v-for="(group, index) in groups" :key="group.label">
        <CommandSeparator v-if="index > 0" class="my-1 h-px bg-border/50" />
        <CommandGroup class="overflow-hidden p-1 text-foreground">
          <CommandGroupLabel class="px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground">{{
            group.label
          }}</CommandGroupLabel>
          <CommandItem
            v-for="item in group.items"
            :key="item.value"
            :value="item.value"
            class="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            <CommandItemIcon
              class="flex shrink-0 text-muted-foreground group-data-highlighted:text-foreground"
            >
              <component :is="item.icon" class="pointer-events-none block size-4 shrink-0" />
            </CommandItemIcon>
            {{ item.label }}
          </CommandItem>
        </CommandGroup>
      </template>
    </CommandList>
  </Command>
</template>

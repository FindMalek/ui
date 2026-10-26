<script setup lang="ts">
import { Bell } from "@lucide/vue"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverShortcut,
  PopoverTitle,
  PopoverTrigger,
} from "@ui-sdk/vue/popover"
</script>

<template>
  <Popover>
    <PopoverTrigger shortcut="mod+u">
      <template #render="{ props, state }">
        <button
          v-bind="props"
          :class="[
            'inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-input/30',
            state.open ? 'bg-muted text-foreground' : 'bg-background dark:bg-transparent',
          ]"
        >
          <Bell class="size-4" />
          {{ state.open ? "Hide updates" : "Show updates" }}
          <PopoverShortcut
            class="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-muted px-1 font-sans text-xs font-medium text-muted-foreground"
            v-slot="{ state: shortcut }"
            >{{ shortcut.text }}</PopoverShortcut
          >
        </button>
      </template>
    </PopoverTrigger>
    <PopoverContent
      class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
    >
      <div class="flex flex-col gap-1">
        <PopoverTitle class="text-base font-medium">
          <template #render="{ props }">
            <h3 v-bind="props">Updates</h3>
          </template>
        </PopoverTitle>
        <PopoverDescription class="text-sm text-muted-foreground">Version 2.0 is out.</PopoverDescription>
      </div>
      <PopoverClose
        href="https://example.com/changelog"
        class="self-start rounded-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30"
      >
        <template #render="{ props }">
          <a v-bind="props">Read the changelog</a>
        </template>
      </PopoverClose>
    </PopoverContent>
  </Popover>
</template>

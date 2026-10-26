<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectTrigger,
  SelectValue,
} from "@ui-sdk/vue/select"
import { ref } from "vue"
import { Check, ChevronDown } from "@lucide/vue"

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes" },
  { value: "pineapple", label: "Pineapple" },
]

const container = ref<HTMLDivElement | null>(null)
</script>

<template>
  <div class="flex w-64 flex-col items-center gap-4">
    <Select :container="container" default-value="apple">
      <SelectTrigger
        aria-label="Fruit"
        class="flex h-8 w-full min-w-0 items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm outline-none transition-[color,box-shadow] duration-200 select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:opacity-50"
      >
        <SelectValue class="flex-1 truncate text-start" />
        <ChevronDown class="size-4 shrink-0 text-muted-foreground" />
      </SelectTrigger>
      <SelectContent
        class="max-h-(--available-height) min-w-(--anchor-width) origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
      >
        <SelectItem
          v-for="fruit in fruits"
          :key="fruit.value"
          :value="fruit.value"
          class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          {{ fruit.label }}
          <SelectItemIndicator
            class="pointer-events-none absolute end-2 flex size-4 items-center justify-center"
          >
            <Check class="size-4" />
          </SelectItemIndicator>
        </SelectItem>
      </SelectContent>
    </Select>
    <div
      class="flex h-24 w-full items-end justify-center rounded-3xl border border-dashed border-border p-3 text-sm text-muted-foreground"
    >
      Container
      <div ref="container" />
    </div>
  </div>
</template>

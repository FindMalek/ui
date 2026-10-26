<script setup lang="ts">
import {
  Select,
  SelectClear,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@ui-sdk/vue/select"
import { ref } from "vue"
import { Check, ChevronDown, X } from "@lucide/vue"

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes" },
  { value: "pineapple", label: "Pineapple" },
]

const value = ref<string | null>("banana")
</script>

<template>
  <div class="flex w-56 max-w-full flex-col gap-3">
    <Select v-model:value="value" placeholder="Select a fruit">
      <div class="flex flex-col gap-2">
        <SelectLabel class="text-sm leading-none font-medium">Fruit</SelectLabel>
        <div class="relative">
          <SelectTrigger
            class="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent"
          >
            <SelectValue class="min-w-0 flex-1 truncate pe-6 text-start" />
            <ChevronDown class="pointer-events-none block size-4 shrink-0 text-muted-foreground" />
          </SelectTrigger>
          <SelectClear
            aria-label="Clear fruit"
            class="absolute end-8 top-1/2 flex size-6 -translate-y-1/2 cursor-default items-center justify-center rounded-xl border border-transparent bg-transparent p-0 text-muted-foreground transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <X class="pointer-events-none block size-3.5 shrink-0" />
          </SelectClear>
        </div>
      </div>
      <SelectContent
        class="max-h-(--available-height) scroll-py-1 overflow-x-hidden overflow-y-auto box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none"
      >
        <SelectItem
          v-for="fruit in fruits"
          :key="fruit.value"
          :value="fruit.value"
          class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          {{ fruit.label }}
          <SelectItemIndicator
            class="pointer-events-none absolute end-2 flex size-4 items-center justify-center"
          >
            <Check class="pointer-events-none block size-4 shrink-0" />
          </SelectItemIndicator>
        </SelectItem>
      </SelectContent>
    </Select>
    <output class="m-0 min-h-5 text-sm leading-5 text-muted-foreground"
      >Value: {{ JSON.stringify(value) }}</output
    >
  </div>
</template>

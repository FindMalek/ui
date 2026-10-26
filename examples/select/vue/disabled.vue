<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@ui-sdk/vue/select"
import { Check, ChevronDown } from "@lucide/vue"

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes" },
  { value: "pineapple", label: "Pineapple" },
]

const variants = ["disabled", "readOnly", "item"] as const
</script>

<template>
  <div class="flex w-56 max-w-full flex-col gap-4">
    <Select
      v-for="variant in variants"
      :key="variant"
      :default-value="variant === 'item' ? null : 'banana'"
      placeholder="Select a fruit"
      :disabled="variant === 'disabled'"
      :read-only="variant === 'readOnly'"
    >
      <div class="flex flex-col gap-2">
        <SelectLabel class="text-sm leading-none font-medium data-disabled:opacity-50">
          {{ variant === "disabled" ? "Disabled" : variant === "readOnly" ? "Read-only" : "Disabled item" }}
        </SelectLabel>
        <SelectTrigger
          class="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent"
        >
          <SelectValue class="min-w-0 flex-1 truncate text-start" />
          <ChevronDown class="pointer-events-none block size-4 shrink-0 text-muted-foreground" />
        </SelectTrigger>
      </div>
      <SelectContent
        class="max-h-(--available-height) scroll-py-1 overflow-x-hidden overflow-y-auto box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none"
      >
        <SelectItem
          v-for="fruit in fruits"
          :key="fruit.value"
          :value="fruit.value"
          :disabled="fruit.value === 'grapes'"
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
  </div>
</template>

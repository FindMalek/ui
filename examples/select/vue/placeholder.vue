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

const sizes = ["Extra small", "Small", "Medium", "Large", "Extra large"]
</script>

<template>
  <div class="flex w-56 flex-col gap-4">
    <Select placeholder="Select a size">
      <div class="flex flex-col gap-2">
        <SelectLabel class="text-sm leading-none font-medium">Size</SelectLabel>
        <SelectTrigger
          class="flex h-8 w-full min-w-0 items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm outline-none transition-[color,box-shadow] duration-200 select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:opacity-50 data-placeholder:border-dashed data-placeholder:border-input data-placeholder:bg-transparent"
        >
          <SelectValue class="flex-1 truncate text-start" />
          <ChevronDown class="size-4 shrink-0 text-muted-foreground" />
        </SelectTrigger>
      </div>
      <SelectContent
        class="max-h-(--available-height) min-w-(--anchor-width) origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
      >
        <SelectItem
          v-for="size in sizes"
          :key="size"
          :value="size"
          class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          {{ size }}
          <SelectItemIndicator
            class="pointer-events-none absolute end-2 flex size-4 items-center justify-center"
          >
            <Check class="size-4" />
          </SelectItemIndicator>
        </SelectItem>
      </SelectContent>
    </Select>
    <Select>
      <div class="flex flex-col gap-2">
        <SelectLabel class="text-sm leading-none font-medium">Gift wrap</SelectLabel>
        <SelectTrigger
          class="flex h-8 w-full min-w-0 items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm outline-none transition-[color,box-shadow] duration-200 select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:opacity-50"
        >
          <SelectValue placeholder="None" class="flex-1 truncate text-start data-placeholder:italic" />
          <ChevronDown class="size-4 shrink-0 text-muted-foreground" />
        </SelectTrigger>
      </div>
      <SelectContent
        class="max-h-(--available-height) min-w-(--anchor-width) origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
      >
        <SelectItem
          v-for="wrap in ['Paper', 'Ribbon', 'Box']"
          :key="wrap"
          :value="wrap"
          class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          {{ wrap }}
          <SelectItemIndicator
            class="pointer-events-none absolute end-2 flex size-4 items-center justify-center"
          >
            <Check class="size-4" />
          </SelectItemIndicator>
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>

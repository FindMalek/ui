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
import { ref } from "vue"
import { Check, ChevronDown } from "@lucide/vue"

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes" },
  { value: "pineapple", label: "Pineapple" },
]

const value = ref<string | null>("apple")
const open = ref(false)
const log = ref("")

function onValueChange(next: unknown, details: { reason: string; cancel: () => void }) {
  if (next === "pineapple") {
    details.cancel()
    log.value = "Pineapple is sold out"
    return
  }
  log.value = `value: ${next} (${details.reason})`
}

function onOpenChange(next: boolean, details: { reason: string }) {
  log.value = `open: ${next} (${details.reason})`
}
</script>

<template>
  <div class="flex w-64 flex-col gap-3">
    <Select
      v-model:value="value"
      v-model:open="open"
      debug
      @value-change="onValueChange"
      @open-change="onOpenChange"
    >
      <div class="flex flex-col gap-2">
        <SelectLabel class="text-sm leading-none font-medium">Fruit</SelectLabel>
        <SelectTrigger
          class="flex h-8 w-full min-w-0 items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm outline-none transition-[color,box-shadow] duration-200 select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:opacity-50"
        >
          <SelectValue class="flex-1 truncate text-start" />
          <ChevronDown class="size-4 shrink-0 text-muted-foreground" />
        </SelectTrigger>
      </div>
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
    <div class="flex gap-2">
      <button
        type="button"
        class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30"
        @click="value = 'blueberry'"
      >
        Blueberry
      </button>
      <button
        type="button"
        class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30"
        @click="open = true"
      >
        Open
      </button>
    </div>
    <output class="text-sm text-muted-foreground">{{ log || "Change something" }}</output>
  </div>
</template>

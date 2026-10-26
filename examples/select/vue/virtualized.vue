<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectList,
  SelectTrigger,
  SelectValue,
} from "@ui-sdk/vue/select"
import { ref } from "vue"
import { ChevronDown } from "@lucide/vue"

const manyItems = Array.from({ length: 10_000 }, (_, index) => ({
  value: `item-${index + 1}`,
  label: `Item ${index + 1}`,
}))

function visibleRows(scrollTop: number, height: number, count: number, row: number) {
  const start = Math.max(0, Math.floor(scrollTop / row) - 4)
  const end = Math.min(count, Math.ceil((scrollTop + height) / row) + 4)
  return { start, end }
}

function scrollForRow(index: number, scrollTop: number, height: number, row: number) {
  const top = index * row
  if (top < scrollTop) return top
  if (top + row > scrollTop + height) return top + row - height
  return scrollTop
}

const row = 32
const height = 288

const scroller = ref<HTMLDivElement | null>(null)
const scrollTop = ref(0)

function onHighlight(_value: unknown, { index }: { index: number }) {
  const el = scroller.value
  if (el && index >= 0) el.scrollTop = scrollForRow(index, el.scrollTop, el.clientHeight, row)
}

function visible(items: { value: string; label: string }[]) {
  const { start, end } = visibleRows(scrollTop.value, height, items.length, row)
  return items.slice(start, end).map((item, offset) => ({ item, index: start + offset }))
}
</script>

<template>
  <Select :items="manyItems" placeholder="Select an item" @highlight="onHighlight">
    <div class="flex w-56 max-w-full flex-col gap-2">
      <SelectLabel class="text-sm leading-none font-medium">Item</SelectLabel>
      <SelectTrigger
        class="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent"
      >
        <SelectValue class="min-w-0 flex-1 truncate text-start" />
        <ChevronDown class="pointer-events-none block size-4 shrink-0 text-muted-foreground" />
      </SelectTrigger>
    </div>
    <SelectContent
      class="box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none [--list-height:var(--available-height)]"
    >
      <div
        ref="scroller"
        :style="{ height: `${height}px` }"
        class="max-h-[max(0px,calc(var(--list-height)_-_0.5rem))] overflow-y-auto overscroll-contain"
        @scroll="scrollTop = ($event.currentTarget as HTMLDivElement).scrollTop"
      >
        <SelectList v-slot="{ state }" class="relative outline-none">
          <div :style="{ height: `${state.items.length * row}px` }">
            <SelectItem
              v-for="{ item, index } in visible(state.items as { value: string; label: string }[])"
              :key="item.value"
              :value="item.value"
              :label="item.label"
              :index="index"
              :style="{ top: `${index * row}px`, height: `${row}px` }"
              class="absolute inset-x-0 flex cursor-default items-center rounded-xl px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-selected:font-medium"
            >
              {{ item.label }}
            </SelectItem>
          </div>
        </SelectList>
      </div>
    </SelectContent>
  </Select>
</template>

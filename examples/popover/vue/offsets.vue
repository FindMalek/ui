<script setup lang="ts">
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@ui-sdk/vue/popover"
import { reactive } from "vue"

const choices = {
  sideOffset: [0, 8, 24],
  alignOffset: [-16, 0, 16],
  collisionPadding: [8, 48],
}
const offsets = reactive({ sideOffset: 8, alignOffset: 0, collisionPadding: 8 })
</script>

<template>
  <div class="flex flex-col items-center gap-8">
    <div class="flex flex-col items-center gap-2">
      <div
        v-for="(values, name) in choices"
        :key="name"
        role="group"
        :aria-label="name"
        class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
      >
        <button
          v-for="value in values"
          :key="value"
          type="button"
          :aria-pressed="offsets[name] === value"
          class="inline-flex h-full flex-1 items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground aria-pressed:shadow-sm dark:text-muted-foreground dark:aria-pressed:border-input dark:aria-pressed:bg-input/30 dark:aria-pressed:text-foreground"
          @click="offsets[name] = value"
        >
          {{ name }} {{ value }}
        </button>
      </div>
    </div>
    <Popover>
      <PopoverTrigger
        class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30"
        >Offsets</PopoverTrigger
      >
      <PopoverContent
        align="start"
        :side-offset="offsets.sideOffset"
        :align-offset="offsets.alignOffset"
        :collision-padding="offsets.collisionPadding"
        class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
      >
        <div class="flex flex-col gap-1">
          <PopoverTitle class="text-base font-medium">Offsets</PopoverTitle>
          <PopoverDescription class="text-sm text-muted-foreground">
            {{ offsets.sideOffset }}px from the trigger, shifted {{ offsets.alignOffset }}px,
            {{ offsets.collisionPadding }}px from the edges.
          </PopoverDescription>
        </div>
      </PopoverContent>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@ui-sdk/vue/drawer"

const sides = [
  { side: "top", label: "Top" },
  { side: "right", label: "Right" },
  { side: "bottom", label: "Bottom" },
  { side: "left", label: "Left" },
] as const
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Drawer
      v-for="{ side, label } in sides"
      :key="side"
      :side="side"
      :prevent-edge-swipe="side === 'left' || side === 'right'"
    >
      <DrawerTrigger
        class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
        >{{ label }}</DrawerTrigger
      >
      <DrawerBackdrop class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm" />
      <DrawerContent
        class="relative flex flex-col gap-4 bg-popover p-4 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:bg-inherit data-[side=bottom]:mx-auto data-[side=bottom]:w-full data-[side=bottom]:max-w-lg data-[side=bottom]:rounded-t-[min(var(--radius-4xl),24px)] data-[side=bottom]:pb-[max(1rem,env(safe-area-inset-bottom))] data-[side=bottom]:after:inset-x-0 data-[side=bottom]:after:top-full data-[side=bottom]:after:h-24 data-[side=left]:h-full data-[side=left]:w-80 data-[side=left]:max-w-[85vw] data-[side=left]:rounded-r-[min(var(--radius-4xl),24px)] data-[side=left]:after:inset-y-0 data-[side=left]:after:right-full data-[side=left]:after:w-24 data-[side=right]:h-full data-[side=right]:w-80 data-[side=right]:max-w-[85vw] data-[side=right]:rounded-l-[min(var(--radius-4xl),24px)] data-[side=right]:after:inset-y-0 data-[side=right]:after:left-full data-[side=right]:after:w-24 data-[side=top]:mx-auto data-[side=top]:w-full data-[side=top]:max-w-lg data-[side=top]:rounded-b-[min(var(--radius-4xl),24px)] data-[side=top]:after:inset-x-0 data-[side=top]:after:bottom-full data-[side=top]:after:h-24"
      >
        <div class="flex flex-col gap-0.5 md:gap-1.5">
          <DrawerTitle class="text-base font-medium text-foreground">Drawer from the {{ side }}</DrawerTitle>
          <DrawerDescription class="text-sm text-muted-foreground"
            >Drag it back toward its edge, press outside it or press Escape to close it.</DrawerDescription
          >
        </div>
        <DrawerClose
          class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
          >Close</DrawerClose
        >
      </DrawerContent>
    </Drawer>
  </div>
</template>

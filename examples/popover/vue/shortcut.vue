<script setup lang="ts">
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverShortcut,
  PopoverTitle,
  PopoverTrigger,
} from "@ui-sdk/vue/popover"

const dimensions = [
  { label: "Width", value: "100%" },
  { label: "Max. width", value: "300px" },
  { label: "Height", value: "25px" },
  { label: "Max. height", value: "none" },
]
</script>

<template>
  <Popover>
    <PopoverTrigger
      shortcut="mod+i"
      class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding ps-3 pe-1.5 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
    >
      Dimensions
      <PopoverShortcut
        class="inline-flex cursor-default h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-muted px-1 font-sans text-xs font-medium text-muted-foreground"
      />
    </PopoverTrigger>
    <PopoverContent
      class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
    >
      <div class="flex flex-col gap-1.5">
        <PopoverTitle class="text-base leading-none font-medium">Dimensions</PopoverTitle>
        <PopoverDescription class="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </PopoverDescription>
      </div>
      <div class="flex flex-col gap-2">
        <label
          v-for="dimension in dimensions"
          :key="dimension.label"
          class="grid grid-cols-3 items-center gap-4 text-sm"
        >
          {{ dimension.label }}
          <input
            :value="dimension.value"
            class="col-span-2 h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none"
          />
        </label>
      </div>
    </PopoverContent>
  </Popover>
</template>

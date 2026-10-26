<script setup lang="ts">
import {
  Popover,
  PopoverContent,
  PopoverDescription,
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
  <Popover presentation="sheet">
    <PopoverTrigger
      class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
      >Dimensions</PopoverTrigger
    >
    <PopoverContent
      class="flex flex-col gap-4 bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/5 outline-none data-[presentation=popover]:w-72 data-[presentation=popover]:origin-(--transform-origin) data-[presentation=popover]:rounded-3xl data-[presentation=popover]:shadow-lg data-[presentation=popover]:transition-[opacity,scale] data-[presentation=popover]:duration-100 data-[presentation=popover]:data-starting-style:scale-95 data-[presentation=popover]:data-starting-style:opacity-0 data-[presentation=popover]:data-ending-style:scale-95 data-[presentation=popover]:data-ending-style:opacity-0 data-[presentation=sheet]:rounded-t-3xl data-[presentation=sheet]:pb-[max(env(safe-area-inset-bottom),1rem)] data-[presentation=sheet]:[--sheet-backdrop:rgb(0_0_0/0.3)] motion-reduce:transition-none"
    >
      <div class="flex flex-col gap-1">
        <PopoverTitle class="text-base font-medium">Dimensions</PopoverTitle>
        <PopoverDescription class="text-sm text-muted-foreground"
          >Set the dimensions for the layer.</PopoverDescription
        >
      </div>
      <div class="grid gap-2">
        <label
          v-for="dimension in dimensions"
          :key="dimension.label"
          class="grid grid-cols-3 items-center gap-4 text-sm leading-none font-medium"
        >
          {{ dimension.label }}
          <input
            :value="dimension.value"
            class="col-span-2 h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base font-normal outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm motion-reduce:transition-none"
          />
        </label>
      </div>
    </PopoverContent>
  </Popover>
</template>

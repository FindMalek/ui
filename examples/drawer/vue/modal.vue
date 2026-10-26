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
import { computed, ref } from "vue"

const modes = [
  { value: "true", label: "Modal" },
  { value: "trap-focus", label: "Trap focus" },
  { value: "false", label: "Non-modal" },
] as const

const mode = ref<(typeof modes)[number]["value"]>("false")
const outside = ref(false)
const modal = computed(() => (mode.value === "true" ? true : mode.value === "false" ? false : "trap-focus"))
</script>

<template>
  <div class="grid gap-4">
    <fieldset class="flex flex-wrap gap-4 text-sm">
      <legend class="sr-only">modal</legend>
      <label v-for="option in modes" :key="option.value" class="flex items-center gap-2">
        <input
          v-model="mode"
          type="radio"
          name="drawer-modal"
          :value="option.value"
          class="size-4 cursor-default accent-primary"
        />
        {{ option.label }}
      </label>
      <label class="flex items-center gap-2">
        <input v-model="outside" type="checkbox" class="size-4 cursor-default accent-primary" />
        closeOnOutsidePress
      </label>
    </fieldset>
    <Drawer :modal="modal" :close-on-outside-press="outside">
      <DrawerTrigger
        class="inline-flex cursor-default h-8 w-fit shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
        >Open notes</DrawerTrigger
      >
      <DrawerBackdrop
        v-if="modal === true"
        class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm"
      />
      <DrawerContent
        class="relative mx-auto flex max-h-[85dvh] w-full max-w-lg flex-col gap-3 rounded-t-[min(var(--radius-4xl),24px)] bg-popover p-4 pb-[max(1rem,env(safe-area-inset-bottom))] text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit"
      >
        <DrawerTitle class="text-base font-medium text-foreground">Notes</DrawerTitle>
        <DrawerDescription class="text-sm text-muted-foreground">
          {{
            modal === false
              ? "The page stays usable. Tab leaves the notes, and Escape closes them while focus is inside."
              : modal === true
                ? "The rest of the page is inert and doesn't scroll."
                : "Tab stays inside, and the page still scrolls and takes clicks."
          }}
        </DrawerDescription>
        <textarea
          aria-label="Notes"
          value="Call the printer about the proofs."
          class="h-20 min-h-16 w-full min-w-0 resize-none rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none"
        />
        <DrawerClose
          class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
          >Done</DrawerClose
        >
      </DrawerContent>
    </Drawer>
  </div>
</template>

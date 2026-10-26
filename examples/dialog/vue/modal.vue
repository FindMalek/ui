<script setup lang="ts">
import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@ui-sdk/vue/dialog"
import { computed, ref } from "vue"

const modes = [
  { value: "true", label: "Modal" },
  { value: "trap-focus", label: "Trap focus" },
  { value: "false", label: "Non-modal" },
] as const

const notes = {
  true: "The rest of the page is inert and doesn't scroll.",
  "trap-focus": "Tab stays inside, and the page still scrolls and takes clicks.",
  false: "The page stays usable. Tab leaves the notes, and Escape closes them while focus is inside.",
}

const mode = ref<(typeof modes)[number]["value"]>("false")
const outside = ref(false)
const modal = computed(() => (mode.value === "true" ? true : mode.value === "false" ? false : "trap-focus"))
</script>

<template>
  <div class="grid gap-4">
    <fieldset class="m-0 flex flex-wrap gap-4 border-0 p-0 text-sm">
      <legend class="sr-only">modal</legend>
      <label v-for="option in modes" :key="option.value" class="flex items-center gap-2">
        <input
          v-model="mode"
          type="radio"
          name="modal"
          :value="option.value"
          class="m-0 size-4 accent-primary"
        />
        {{ option.label }}
      </label>
      <label class="flex items-center gap-2">
        <input v-model="outside" type="checkbox" class="m-0 size-4 accent-primary" />
        closeOnOutsidePress
      </label>
    </fieldset>
    <Dialog :modal="modal" :close-on-outside-press="outside">
      <DialogTrigger
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 justify-self-start data-open:bg-muted"
        >Open notes</DialogTrigger
      >
      <DialogBackdrop
        v-if="modal === true"
        class="fixed inset-0 bg-black/30 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-sm data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none"
      />
      <DialogContent
        class="fixed end-4 bottom-4 grid w-80 max-w-[calc(100%-2rem)] gap-6 rounded-[min(var(--radius-4xl),24px)] border-0 bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,translate] duration-100 data-starting-style:translate-y-2 data-starting-style:opacity-0 data-ending-style:translate-y-2 data-ending-style:opacity-0 motion-reduce:transition-none"
      >
        <div class="flex flex-col gap-1.5">
          <DialogTitle class="m-0 text-base leading-none font-medium">Notes</DialogTitle>
          <DialogDescription class="m-0 text-sm text-muted-foreground">{{ notes[mode] }}</DialogDescription>
        </div>
        <textarea
          aria-label="Notes"
          class="h-auto min-h-16 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base font-normal text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:opacity-50 md:text-sm resize-none"
        >
Call the printer about the proofs.</textarea>
        <DialogClose
          class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 justify-self-end"
          >Done</DialogClose
        >
      </DialogContent>
    </Dialog>
  </div>
</template>

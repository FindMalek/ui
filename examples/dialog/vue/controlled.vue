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
import { ref } from "vue"

const open = ref(false)
const log = ref<string[]>([])
const write = (line: string) => (log.value = [line, ...log.value].slice(0, 8))
const onOpenChange = (next: boolean, details: { reason: string }) =>
  write(`onOpenChange(${next}, "${details.reason}")`)
const onOpenChangeComplete = (next: boolean) => write(`onOpenChangeComplete(${next})`)
</script>

<template>
  <label class="flex items-center gap-2 text-sm">
    <input v-model="open" type="checkbox" class="m-0 size-4 accent-primary" />
    open
  </label>
  <Dialog v-model:open="open" @open-change="onOpenChange" @open-change-complete="onOpenChangeComplete">
    <DialogTrigger
      class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 mt-3"
      >Open</DialogTrigger
    >
    <DialogBackdrop
      class="fixed inset-0 bg-black/30 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-sm data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none"
    />
    <DialogContent
      class="fixed top-1/2 left-1/2 grid w-full max-w-[calc(100%-2rem)] -translate-1/2 gap-6 rounded-[min(var(--radius-4xl),24px)] border-0 bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 sm:max-w-md motion-reduce:transition-none"
    >
      <div class="flex flex-col gap-1.5">
        <DialogTitle class="m-0 text-base leading-none font-medium">Controlled</DialogTitle>
        <DialogDescription class="m-0 text-sm text-muted-foreground"
          >Close it any way you like, and watch the log.</DialogDescription
        >
      </div>
      <div class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <DialogClose
          class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-colors hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50"
          >Close</DialogClose
        >
      </div>
    </DialogContent>
  </Dialog>
  <ol
    class="m-0 mt-3 h-24 w-full max-w-xs list-none overflow-y-auto rounded-2xl bg-muted p-2 font-mono text-xs leading-5 text-muted-foreground"
  >
    <li v-for="(line, index) in log" :key="index">{{ line }}</li>
  </ol>
</template>

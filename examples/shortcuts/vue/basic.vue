<script setup lang="ts">
import { useShortcut, useShortcutHint } from "@ui-sdk/vue/shortcuts"
import { ref } from "vue"

const status = ref("Press N or the keys to save.")
const newNote = () => (status.value = "Note created")
const save = () => (status.value = "Saved")

useShortcut("n", newNote, { description: "New note" })
useShortcut("mod+s", save, { description: "Save" })
const { text: saveKeys, ariaKeyshortcuts: saveAria } = useShortcutHint("mod+s")
</script>

<template>
  <div class="flex flex-col items-center gap-3">
    <div class="flex gap-2">
      <button
        type="button"
        class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding ps-3 pe-1.5 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px dark:bg-transparent dark:hover:bg-input/30"
        aria-keyshortcuts="N"
        @click="newNote"
      >
        New note
        <kbd
          aria-hidden="true"
          class="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-muted px-1 font-sans text-xs font-medium text-muted-foreground"
          >N</kbd
        >
      </button>
      <button
        type="button"
        class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding ps-3 pe-1.5 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px dark:bg-transparent dark:hover:bg-input/30"
        :aria-keyshortcuts="saveAria"
        @click="save"
      >
        Save
        <kbd
          aria-hidden="true"
          class="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-muted px-1 font-sans text-xs font-medium text-muted-foreground"
          >{{ saveKeys }}</kbd
        >
      </button>
    </div>
    <output class="text-sm text-muted-foreground">{{ status }}</output>
  </div>
</template>

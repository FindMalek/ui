<script setup lang="ts">
import { FileIcon, X } from "@lucide/vue"
import {
  createFileInputController,
  FileInput,
  FileInputItem,
  FileInputItemRemove,
  FileInputList,
  formatFileSize,
} from "@ui-sdk/vue/file-input"

const controller = createFileInputController()

function addNote() {
  controller.addFiles([new File(["hello"], `note-${Date.now()}.txt`, { type: "text/plain" })])
}
</script>

<template>
  <div class="flex w-full max-w-md min-w-0 flex-col gap-3 text-foreground">
    <div class="flex flex-wrap gap-2">
      <button
        type="button"
        class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10"
        @click="controller.open()"
      >
        Open the picker
      </button>
      <button
        type="button"
        class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10"
        @click="addNote"
      >
        Add a note
      </button>
      <button
        type="button"
        class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10"
        @click="controller.clear()"
      >
        Clear
      </button>
    </div>
    <FileInput multiple :controller="controller" class="contents">
      <FileInputList aria-label="Files" class="flex h-40 min-w-0 flex-col gap-2 overflow-y-auto p-1">
        <FileInputItem
          v-slot="{ state }"
          class="flex shrink-0 items-center gap-3 rounded-2xl border border-border py-1.5 ps-3 pe-1.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
        >
          <FileIcon aria-hidden="true" class="size-4 shrink-0 text-muted-foreground" />
          <span class="min-w-0 flex-1 truncate">{{ state.file.name }}</span>
          <span class="shrink-0 text-xs text-muted-foreground">{{ formatFileSize(state.file.size) }}</span>
          <FileInputItemRemove
            class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            <X aria-hidden="true" class="size-3.5" />
          </FileInputItemRemove>
        </FileInputItem>
      </FileInputList>
    </FileInput>
  </div>
</template>

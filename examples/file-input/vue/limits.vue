<script setup lang="ts">
import { FileIcon, X } from "@lucide/vue"
import {
  FileInput,
  FileInputDropzone,
  FileInputItem,
  FileInputItemRemove,
  FileInputList,
  FileInputTrigger,
  formatFileSize,
  type FileRejection,
} from "@ui-sdk/vue/file-input"
import { ref } from "vue"

const messages: Record<string, string> = {
  "file-too-large": "is too large",
  "file-too-small": "is empty",
  "too-many-files": "is one file too many",
}

const rejected = ref<FileRejection[]>([])
</script>

<template>
  <FileInput
    v-slot="{ state }"
    multiple
    :max-files="3"
    :max-size="5_000_000"
    :min-size="1"
    class="flex w-full max-w-md min-w-0 flex-col gap-3 text-foreground"
    @value-change="rejected = []"
    @reject="(next) => (rejected = next)"
  >
    <FileInputDropzone
      class="flex min-w-0 flex-wrap items-center justify-between gap-3 p-4 rounded-3xl border border-dashed border-border transition-colors duration-200 data-dragging:border-ring data-dragging:bg-muted/50 data-drag-reject:border-foreground data-drag-reject:bg-muted data-disabled:opacity-50 motion-reduce:transition-none"
    >
      <span class="min-w-0 flex-1 truncate text-sm text-muted-foreground">
        {{ state.value.length }} of 3 files, up to 5 MB each
      </span>
      <FileInputTrigger
        class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10"
        >Add files</FileInputTrigger
      >
    </FileInputDropzone>
    <FileInputList aria-label="Files" class="flex h-40 min-w-0 flex-col gap-2 overflow-y-auto p-1">
      <FileInputItem
        v-slot="{ state: item }"
        class="flex shrink-0 items-center gap-3 rounded-2xl border border-border py-1.5 ps-3 pe-1.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
      >
        <FileIcon aria-hidden="true" class="size-4 shrink-0 text-muted-foreground" />
        <span class="min-w-0 flex-1 truncate">{{ item.file.name }}</span>
        <span class="shrink-0 text-xs text-muted-foreground">{{ formatFileSize(item.file.size) }}</span>
        <FileInputItemRemove
          class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          <X aria-hidden="true" class="size-3.5" />
        </FileInputItemRemove>
      </FileInputItem>
    </FileInputList>
    <div class="h-12 overflow-y-auto text-sm text-foreground">
      <p v-for="({ file, reasons }, index) in rejected" :key="index" class="min-h-5 text-sm text-foreground">
        {{ file.name }} {{ reasons.map((reason) => messages[reason] ?? reason).join(" and ") }}
      </p>
    </div>
  </FileInput>
</template>

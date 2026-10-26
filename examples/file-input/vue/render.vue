<script setup lang="ts">
import { Check, ImageIcon, X } from "@lucide/vue"
import {
  FileInput,
  FileInputDropzone,
  FileInputItem,
  FileInputItemRemove,
  FileInputList,
  FileInputTrigger,
} from "@ui-sdk/vue/file-input"
</script>

<template>
  <FileInput multiple accept="image/*" :max-files="4" class="flex w-full max-w-md flex-col gap-3">
    <FileInputDropzone>
      <template #render="{ props, state }">
        <section
          v-bind="props"
          aria-label="Gallery upload"
          class="flex flex-col items-center gap-4 rounded-3xl border border-dashed px-6 py-10 text-center transition-colors"
          :class="
            state.dragReject
              ? 'border-destructive bg-destructive/10 text-destructive dark:bg-destructive/20'
              : state.dragAccept
                ? 'border-ring bg-muted/50'
                : 'border-border'
          "
        >
          <X v-if="state.dragReject" class="size-5" />
          <Check v-else-if="state.dragAccept" class="size-5" />
          <ImageIcon v-else class="size-5" />
          <p class="text-sm font-medium">
            {{
              state.dragReject
                ? "Only up to 4 images"
                : state.dragAccept
                  ? "Release to add"
                  : "Drag up to 4 images here"
            }}
          </p>
          <FileInputTrigger
            v-if="!state.dragging"
            class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30"
            >Browse</FileInputTrigger
          >
        </section>
      </template>
    </FileInputDropzone>
    <FileInputList aria-label="Images" class="flex flex-wrap gap-2">
      <template #render="{ props, children }">
        <ul v-bind="props">
          <component :is="children" />
        </ul>
      </template>
      <FileInputItem>
        <template #render="{ props, state }">
          <li
            v-bind="props"
            class="flex h-7 items-center gap-1.5 rounded-2xl ps-3 pe-1 text-xs outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
            :class="
              state.index === 0
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground'
            "
          >
            <span v-if="state.index === 0" class="font-medium">Cover:</span>
            <span class="max-w-32 truncate">{{ state.file.name }}</span>
            <FileInputItemRemove>
              <template #render="{ props: removeProps, state: remove }">
                <button
                  v-bind="removeProps"
                  class="inline-flex size-5 items-center justify-center rounded-xl outline-none"
                  :class="remove.disabled ? 'opacity-50' : 'hover:bg-current/10'"
                >
                  <X class="size-3" />
                </button>
              </template>
            </FileInputItemRemove>
          </li>
        </template>
      </FileInputItem>
    </FileInputList>
  </FileInput>
</template>

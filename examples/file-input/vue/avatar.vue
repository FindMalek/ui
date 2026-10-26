<script setup lang="ts">
import { User } from "@lucide/vue"
import { FileInput, FileInputDropzone, FileInputTrigger } from "@ui-sdk/vue/file-input"
import { ref, watchEffect } from "vue"

const value = ref<File[]>([])
const url = ref<string | null>(null)

watchEffect((onCleanup) => {
  const [file] = value.value
  if (!file) {
    url.value = null
    return
  }
  const next = URL.createObjectURL(file)
  url.value = next
  onCleanup(() => URL.revokeObjectURL(next))
})
</script>

<template>
  <FileInput
    v-model:value="value"
    accept="image/*"
    :max-size="5_000_000"
    class="flex w-full max-w-md min-w-0 items-center gap-4 text-foreground"
  >
    <FileInputDropzone
      class="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-muted-foreground data-drag-accept:ring-3 data-drag-accept:ring-ring/30 data-drag-reject:ring-3 data-drag-reject:ring-foreground/30"
    >
      <img v-if="url" :src="url" alt="" class="size-full object-cover" />
      <User aria-hidden="true" v-else class="size-6" />
    </FileInputDropzone>
    <div class="flex min-w-0 flex-col gap-1.5">
      <div class="flex flex-wrap gap-2">
        <FileInputTrigger
          class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10"
          >{{ url ? "Change photo" : "Upload photo" }}</FileInputTrigger
        >
        <button
          v-if="url"
          type="button"
          class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10"
          @click="value = []"
        >
          Remove
        </button>
      </div>
      <p class="min-h-5 text-sm text-muted-foreground">Or drop an image on the avatar. Up to 5 MB.</p>
    </div>
  </FileInput>
</template>

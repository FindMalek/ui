<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipTrigger } from "@ui-sdk/vue/tooltip"
import { computed, ref } from "vue"

const title = ref("")
const status = ref("Draft")
const blocked = computed(() => !title.value.trim())

function publish() {
  if (!blocked.value) {
    status.value = `Published “${title.value.trim()}”`
  }
}
</script>

<template>
  <div class="flex w-full max-w-xs flex-col gap-3">
    <input
      v-model="title"
      placeholder="Post title"
      aria-label="Post title"
      class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none"
    />
    <div class="flex items-center gap-3">
      <Tooltip :disabled="!blocked">
        <TooltipTrigger
          :aria-disabled="blocked || undefined"
          class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none"
          @click="publish"
          >Publish</TooltipTrigger
        >
        <TooltipContent
          class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none"
          >Add a title to publish</TooltipContent
        >
      </Tooltip>
      <output class="text-sm text-muted-foreground">{{ status }}</output>
    </div>
  </div>
</template>

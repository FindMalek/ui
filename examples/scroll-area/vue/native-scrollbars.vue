<script setup lang="ts">
import { ScrollArea, ScrollAreaContent, ScrollAreaViewport } from "@ui-sdk/vue/scroll-area"

const tags = Array.from({ length: 50 }, (_, index) => `v1.2.0-beta.${50 - index}`)
</script>

<template>
  <ScrollArea class="h-72 w-48 rounded-2xl border border-border">
    <ScrollAreaViewport
      class="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
    >
      <ScrollAreaContent class="p-4 text-sm">
        <div v-for="tag in tags" :key="tag" class="py-1.5">{{ tag }}</div>
      </ScrollAreaContent>
    </ScrollAreaViewport>
  </ScrollArea>
</template>

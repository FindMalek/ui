<script setup lang="ts">
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
  type ScrollAreaType,
} from "@ui-sdk/vue/scroll-area"

const types: ScrollAreaType[] = ["hover", "scroll", "auto", "always"]

const tags = Array.from({ length: 20 }, (_, index) => `v1.2.0-beta.${50 - index}`)
</script>

<template>
  <div class="grid w-full max-w-md grid-cols-2 gap-4">
    <div v-for="type in types" :key="type" class="flex flex-col gap-2">
      <code class="text-xs text-muted-foreground">type="{{ type }}"</code>
      <ScrollArea :type="type" class="h-40 w-full rounded-2xl border border-border">
        <ScrollAreaViewport
          class="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
        >
          <ScrollAreaContent class="px-3 py-2 text-sm">
            <div v-for="tag in tags" :key="tag" class="py-1">{{ tag }}</div>
          </ScrollAreaContent>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar
          class="flex w-2.5 border-s border-s-transparent p-px opacity-0 transition-opacity duration-150 data-visible:opacity-100 motion-reduce:transition-none"
        >
          <ScrollAreaThumb class="relative flex-1 rounded-full bg-border" />
        </ScrollAreaScrollbar>
      </ScrollArea>
    </div>
  </div>
</template>

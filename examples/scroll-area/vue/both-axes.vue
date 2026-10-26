<script setup lang="ts">
import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@ui-sdk/vue/scroll-area"

const releases = Array.from({ length: 12 }, (_, row) => ({
  version: `v1.${12 - row}.0`,
  cells: [
    "Stable",
    "Downloads 12k",
    "Node 20+",
    "MIT",
    "4.1 MB",
    `2026-0${(row % 9) + 1}-14`,
    "No breaking changes",
  ],
}))
</script>

<template>
  <ScrollArea type="auto" class="h-64 w-full max-w-md rounded-2xl border border-border">
    <ScrollAreaViewport
      class="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
    >
      <ScrollAreaContent>
        <table class="text-sm whitespace-nowrap">
          <tbody>
            <tr v-for="release in releases" :key="release.version" class="border-b border-border">
              <th class="px-4 py-2 text-start font-medium">{{ release.version }}</th>
              <td v-for="cell in release.cells" :key="cell" class="px-4 py-2 text-muted-foreground">
                {{ cell }}
              </td>
            </tr>
          </tbody>
        </table>
      </ScrollAreaContent>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar class="flex w-2.5 border-s border-s-transparent p-px">
      <ScrollAreaThumb class="relative flex-1 rounded-full bg-border" />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar
      orientation="horizontal"
      class="flex h-2.5 flex-col border-t border-t-transparent p-px"
    >
      <ScrollAreaThumb class="relative flex-1 rounded-full bg-border" />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner class="bg-muted" />
  </ScrollArea>
</template>

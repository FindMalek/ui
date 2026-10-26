<script lang="ts">
  import {
    ScrollArea,
    ScrollAreaContent,
    ScrollAreaScrollbar,
    ScrollAreaThumb,
    ScrollAreaViewport,
  } from "@ui-sdk/svelte/scroll-area"

  const tags = Array.from({ length: 50 }, (_, index) => `v1.2.0-beta.${50 - index}`)
</script>

<ScrollArea class="h-72 w-48 rounded-2xl border border-border">
  <ScrollAreaViewport
    class="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
  >
    <ScrollAreaContent class="p-4">
      <h4 class="mb-4 text-sm leading-none font-medium">Tags</h4>
      {#each tags as tag (tag)}
        <div class="border-b border-border py-2 text-sm last:border-0">
          {tag}
        </div>
      {/each}
    </ScrollAreaContent>
  </ScrollAreaViewport>
  <ScrollAreaScrollbar
    class="flex w-2.5 border-s border-s-transparent p-px opacity-0 transition-opacity duration-150 data-visible:opacity-100 motion-reduce:transition-none"
  >
    <ScrollAreaThumb class="relative flex-1 rounded-full bg-border" />
  </ScrollAreaScrollbar>
</ScrollArea>

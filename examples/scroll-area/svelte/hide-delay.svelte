<script lang="ts">
  import {
    ScrollArea,
    ScrollAreaContent,
    ScrollAreaScrollbar,
    ScrollAreaThumb,
    ScrollAreaViewport,
  } from "@ui-sdk/svelte/scroll-area"

  const tags = Array.from({ length: 20 }, (_, index) => `v1.2.0-beta.${50 - index}`)
</script>

<div class="flex gap-4">
  {#each [0, 2000] as delay (delay)}
    <div class="flex flex-col gap-2">
      <code class="text-xs text-muted-foreground">scrollHideDelay={delay}</code>
      <ScrollArea
        type="scroll"
        scrollHideDelay={delay}
        class="h-40 w-40 rounded-2xl border border-border"
      >
        <ScrollAreaViewport
          class="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
        >
          <ScrollAreaContent class="px-3 py-2 text-sm">
            {#each tags as tag (tag)}
              <div class="py-1">{tag}</div>
            {/each}
          </ScrollAreaContent>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar
          class="flex w-2.5 border-s border-s-transparent p-px opacity-0 transition-opacity duration-300 data-visible:opacity-100 data-visible:duration-75 motion-reduce:transition-none"
        >
          <ScrollAreaThumb class="relative flex-1 rounded-full bg-border" />
        </ScrollAreaScrollbar>
      </ScrollArea>
    </div>
  {/each}
</div>

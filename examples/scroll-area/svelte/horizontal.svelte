<script lang="ts">
  import {
    ScrollArea,
    ScrollAreaContent,
    ScrollAreaScrollbar,
    ScrollAreaThumb,
    ScrollAreaViewport,
  } from "@ui-sdk/svelte/scroll-area"

  const artworks = [
    { title: "Dunes at dusk" },
    { title: "Harbor fog" },
    { title: "Moss study" },
    { title: "Night market" },
    { title: "Salt flats" },
    { title: "Copper roofs" },
  ]
</script>

<ScrollArea class="w-96 max-w-full rounded-2xl border border-border whitespace-nowrap">
  <ScrollAreaViewport
    class="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
  >
    <ScrollAreaContent class="flex w-max gap-4 p-4">
      {#each artworks as artwork (artwork.title)}
        <figure class="shrink-0">
          <div class="h-40 w-32 rounded-2xl bg-muted"></div>
          <figcaption class="pt-2 text-xs text-muted-foreground">{artwork.title}</figcaption>
        </figure>
      {/each}
    </ScrollAreaContent>
  </ScrollAreaViewport>
  <ScrollAreaScrollbar
    orientation="horizontal"
    class="flex h-2.5 flex-col border-t border-t-transparent p-px opacity-0 transition-opacity duration-150 data-visible:opacity-100 motion-reduce:transition-none"
  >
    <ScrollAreaThumb class="relative flex-1 rounded-full bg-border" />
  </ScrollAreaScrollbar>
</ScrollArea>

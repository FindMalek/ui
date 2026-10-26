<script lang="ts">
  import { paginationRange } from "@ui-sdk/svelte/pagination"

  let slide = $state(1)
  const items = $derived(paginationRange({ page: slide, pageCount: 20, siblings: 2, boundaries: 1 }))
</script>

<div class="flex flex-col items-center gap-3">
  <div
    role="group"
    aria-label="Slides"
    class="flex h-6 items-center gap-2"
  >
    {#each items as item (item)}
      {#if typeof item === "number"}
        <button
          type="button"
          aria-label={`Slide ${item}`}
          aria-current={item === slide ? "true" : undefined}
          class="size-2.5 rounded-full bg-foreground/20 outline-none transition-[width] hover:bg-foreground/40 focus-visible:ring-3 focus-visible:ring-ring/30 aria-[current=true]:w-6 aria-[current=true]:bg-primary motion-reduce:transition-none"
          onclick={() => (slide = item)}
        ></button>
      {:else}
        <span
          aria-hidden="true"
          class="size-1.5 rounded-full bg-foreground/20"
        ></span>
      {/if}
    {/each}
  </div>
  <output class="text-sm text-muted-foreground">Slide {slide} of 20</output>
</div>

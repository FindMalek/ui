<script lang="ts">
  import { ChevronLeft, ChevronRight } from "@lucide/svelte"
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselViewport,
  } from "@ui-sdk/svelte/carousel"

  const photos = [
    { name: "Dunes" },
    { name: "Forest" },
    { name: "Glacier" },
    { name: "Canyon" },
    { name: "Meadow" },
    { name: "Harbor" },
  ]
</script>

<Carousel
  aria-label="Photos"
  align="center"
  class="mx-auto grid w-full max-w-sm gap-3"
>
  <CarouselViewport
    class="cursor-grab data-dragging:cursor-grabbing rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30"
  >
    <CarouselContent class="gap-3">
      {#each photos as photo (photo.name)}
        <CarouselItem class="basis-4/5">
          <div class="flex items-center justify-center rounded-3xl text-lg font-medium aspect-video bg-muted">
            {photo.name}
          </div>
        </CarouselItem>
      {/each}
    </CarouselContent>
  </CarouselViewport>
  <div class="flex items-center justify-between">
    <CarouselPrevious
      aria-label="Previous slide"
      class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
    >
      <ChevronLeft class="size-4 rtl:-scale-x-100" />
    </CarouselPrevious>
    <CarouselNext
      aria-label="Next slide"
      class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
    >
      <ChevronRight class="size-4 rtl:-scale-x-100" />
    </CarouselNext>
  </div>
</Carousel>

<script lang="ts">
  import { ChevronLeft, ChevronRight } from "@lucide/svelte"
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselViewport,
    createCarouselController,
  } from "@ui-sdk/svelte/carousel"

  const slides = [1, 2, 3, 4, 5]

  const carousel = createCarouselController()
</script>

<div class="mx-auto grid w-full max-w-xs gap-3">
  <div class="flex items-center justify-between">
    <span class="text-sm font-medium">Featured</span>
    <div class="flex gap-2">
      <CarouselPrevious
        controller={carousel}
        aria-label="Previous slide"
        class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
      >
        <ChevronLeft class="size-4 rtl:-scale-x-100" />
      </CarouselPrevious>
      <CarouselNext
        controller={carousel}
        aria-label="Next slide"
        class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
      >
        <ChevronRight class="size-4 rtl:-scale-x-100" />
      </CarouselNext>
    </div>
  </div>
  <Carousel
    aria-label="Featured"
    controller={carousel}
    drag={false}
  >
    <CarouselViewport
      class="rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30"
    >
      <CarouselContent class="gap-4">
        {#each slides as slide (slide)}
          <CarouselItem class="basis-full">
            <div class="flex aspect-square items-center justify-center rounded-3xl bg-muted text-4xl font-semibold">
              {slide}
            </div>
          </CarouselItem>
        {/each}
      </CarouselContent>
    </CarouselViewport>
  </Carousel>
  <button
    type="button"
    class="inline-flex h-8 gap-1.5 px-3 text-sm font-medium shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
    onclick={() => carousel.setPage(5)}
  >
    Show the last slide
  </button>
</div>

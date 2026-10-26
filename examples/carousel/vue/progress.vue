<script setup lang="ts">
import { ChevronLeft, ChevronRight } from "@lucide/vue"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselViewport,
} from "@ui-sdk/vue/carousel"
import { ref } from "vue"

const slides = [1, 2, 3, 4, 5]

const rested = ref(1)
</script>

<template>
  <Carousel
    aria-label="Featured"
    class="mx-auto grid w-full max-w-xs gap-3"
    @page-change-complete="(page: number) => (rested = page)"
  >
    <CarouselViewport
      class="rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30"
    >
      <CarouselContent class="gap-4">
        <CarouselItem v-for="slide in slides" :key="slide" class="basis-full">
          <div
            class="flex aspect-square items-center justify-center rounded-3xl bg-muted text-4xl font-semibold"
          >
            {{ slide }}
          </div>
        </CarouselItem>
      </CarouselContent>
    </CarouselViewport>
    <div class="flex items-center gap-3">
      <CarouselPrevious
        aria-label="Previous slide"
        class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
      >
        <ChevronLeft class="size-4 rtl:-scale-x-100" />
      </CarouselPrevious>
      <div class="h-1.5 flex-1 overflow-hidden rounded-full bg-input">
        <div class="h-full origin-left bg-primary [scale:var(--carousel-progress)_1] rtl:origin-right" />
      </div>
      <CarouselNext
        aria-label="Next slide"
        class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
      >
        <ChevronRight class="size-4 rtl:-scale-x-100" />
      </CarouselNext>
    </div>
    <p class="text-center text-sm text-muted-foreground">Rested on slide {{ rested }}</p>
  </Carousel>
</template>

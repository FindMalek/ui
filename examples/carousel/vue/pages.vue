<script setup lang="ts">
import { ChevronLeft, ChevronRight } from "@lucide/vue"
import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselViewport,
} from "@ui-sdk/vue/carousel"

const products = [1, 2, 3, 4, 5, 6, 7, 8]
</script>

<template>
  <Carousel aria-label="Products" :slides-per-page="3" class="mx-auto grid w-full max-w-sm gap-3">
    <CarouselViewport
      class="rounded-2xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30"
    >
      <CarouselContent class="gap-3">
        <CarouselItem v-for="product in products" :key="product" class="basis-[calc((100%-1.5rem)/3)]">
          <div
            class="flex aspect-square items-center justify-center rounded-2xl bg-muted text-2xl font-semibold"
          >
            {{ product }}
          </div>
        </CarouselItem>
      </CarouselContent>
    </CarouselViewport>
    <div class="flex items-center justify-between">
      <CarouselPrevious
        aria-label="Previous page"
        class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
      >
        <ChevronLeft class="size-4 rtl:-scale-x-100" />
      </CarouselPrevious>
      <CarouselIndicatorGroup v-slot="{ state }" aria-label="Choose a page" class="flex justify-center gap-2">
        <CarouselIndicator
          v-for="index in state.pageCount ?? 3"
          :key="index"
          :page="index"
          :aria-label="`Page ${index}`"
          class="size-2 rounded-full bg-foreground/20 outline-none focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-primary cursor-default"
        />
      </CarouselIndicatorGroup>
      <CarouselNext
        aria-label="Next page"
        class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
      >
        <ChevronRight class="size-4 rtl:-scale-x-100" />
      </CarouselNext>
    </div>
  </Carousel>
</template>

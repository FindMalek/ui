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

const page = ref(1)
const reason = ref("")
</script>

<template>
  <Carousel
    v-slot="{ state }"
    v-model:page="page"
    aria-label="Featured"
    class="mx-auto grid w-full max-w-xs gap-3"
    @page-change="(_page: number, details: { reason: string }) => (reason = details.reason)"
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
    <p class="text-center text-sm text-muted-foreground">
      Slide {{ state.page }} of {{ state.pageCount ?? slides.length }}{{ reason && ` · ${reason}` }}
    </p>
  </Carousel>
</template>

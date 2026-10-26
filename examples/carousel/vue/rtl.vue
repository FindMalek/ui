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

const slides = [1, 2, 3, 4, 5]
</script>

<template>
  <div dir="rtl" class="mx-auto w-full max-w-xs">
    <Carousel aria-label="مميز" class="grid gap-3">
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
          aria-label="الشريحة السابقة"
          class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
        >
          <ChevronLeft class="size-4 rtl:-scale-x-100" />
        </CarouselPrevious>
        <CarouselIndicatorGroup aria-label="اختر شريحة" class="flex justify-center gap-2">
          <CarouselIndicator
            v-for="slide in slides"
            :key="slide"
            :page="slide"
            :aria-label="`الشريحة ${slide}`"
            class="size-2 rounded-full bg-foreground/20 outline-none focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-primary cursor-default"
          />
        </CarouselIndicatorGroup>
        <CarouselNext
          aria-label="الشريحة التالية"
          class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
        >
          <ChevronRight class="size-4 rtl:-scale-x-100" />
        </CarouselNext>
      </div>
    </Carousel>
  </div>
</template>

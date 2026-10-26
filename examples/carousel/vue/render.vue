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

const photos = [
  { name: "Dunes" },
  { name: "Forest" },
  { name: "Glacier" },
  { name: "Canyon" },
  { name: "Meadow" },
  { name: "Harbor" },
]

const nextFocused = () =>
  typeof document !== "undefined" && document.activeElement?.getAttribute("data-slot") === "carousel-next"
const focusIf = (focus: boolean) => (link: unknown) => {
  if (focus) (link as HTMLElement | null)?.focus()
}
</script>

<template>
  <Carousel aria-label="Photos" class="mx-auto grid w-full max-w-xs gap-3">
    <CarouselViewport
      class="rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30"
    >
      <CarouselContent class="gap-4">
        <CarouselItem
          v-for="photo in photos"
          :key="photo.name"
          v-slot="{ state }"
          class="basis-full opacity-40 transition-opacity duration-300 data-in-view:opacity-100"
        >
          <div
            class="flex items-center justify-center rounded-3xl text-lg font-medium aspect-[4/3] flex-col gap-1 bg-muted"
          >
            {{ photo.name }}
            <span class="text-xs font-normal text-muted-foreground">
              {{ state.index + 1 }} / {{ photos.length }}{{ state.active ? " · showing" : "" }}
            </span>
          </div>
        </CarouselItem>
      </CarouselContent>
    </CarouselViewport>
    <div class="flex items-center justify-between">
      <CarouselPrevious
        class="inline-flex h-8 gap-1.5 px-3 text-sm font-medium shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
      >
        <ChevronLeft class="size-4 rtl:-scale-x-100" />
        Previous
      </CarouselPrevious>
      <CarouselNext
        class="inline-flex h-8 gap-1.5 px-3 text-sm font-medium shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
      >
        <template #render="{ props, state }">
          <a
            v-if="state.disabled"
            :ref="focusIf(nextFocused())"
            href="https://example.com/gallery"
            :class="props.class as string"
            >See all photos</a
          >
          <button v-else v-bind="props">
            Next
            <ChevronRight class="size-4 rtl:-scale-x-100" />
          </button>
        </template>
      </CarouselNext>
    </div>
  </Carousel>
</template>

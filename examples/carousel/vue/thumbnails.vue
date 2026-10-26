<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselViewport } from "@ui-sdk/vue/carousel"
import { ref, useTemplateRef, watch } from "vue"

const photos = [
  { name: "Dunes" },
  { name: "Forest" },
  { name: "Glacier" },
  { name: "Canyon" },
  { name: "Meadow" },
  { name: "Harbor" },
]

const page = ref(1)
const strip = useTemplateRef<{ $el: HTMLElement }>("strip")
watch(page, (next) =>
  strip.value?.$el
    .querySelectorAll("button")
    [next - 1]?.scrollIntoView({ block: "nearest", inline: "nearest" }),
)
</script>

<template>
  <div class="mx-auto grid w-full max-w-sm gap-3">
    <Carousel v-model:page="page" aria-label="Photos">
      <CarouselViewport
        class="rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30"
      >
        <CarouselContent class="gap-4">
          <CarouselItem v-for="photo in photos" :key="photo.name" class="basis-full">
            <div
              class="flex items-center justify-center rounded-3xl text-lg font-medium aspect-video bg-muted"
            >
              {{ photo.name }}
            </div>
          </CarouselItem>
        </CarouselContent>
      </CarouselViewport>
    </Carousel>
    <Carousel ref="strip" aria-label="Thumbnails" drag-free slides-per-page="auto">
      <CarouselViewport
        class="rounded-xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30"
      >
        <CarouselContent class="gap-2">
          <CarouselItem
            v-for="(photo, index) in photos"
            :key="photo.name"
            :aria-label="photo.name"
            class="basis-1/4"
          >
            <button
              type="button"
              :aria-pressed="page === index + 1"
              class="flex cursor-default aspect-square w-full items-center justify-center rounded-xl border-2 border-transparent text-xs font-medium opacity-60 outline-none transition-opacity focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset aria-pressed:border-primary aria-pressed:opacity-100 bg-muted motion-reduce:transition-none"
              @click="page = index + 1"
            >
              {{ photo.name }}
            </button>
          </CarouselItem>
        </CarouselContent>
      </CarouselViewport>
    </Carousel>
  </div>
</template>

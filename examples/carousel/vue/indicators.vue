<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselItem,
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
</script>

<template>
  <Carousel aria-label="Photos" class="mx-auto grid w-full max-w-xs gap-4">
    <CarouselViewport
      class="rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30"
    >
      <CarouselContent class="gap-4">
        <CarouselItem v-for="photo in photos" :key="photo.name" class="basis-full">
          <div class="flex items-center justify-center rounded-3xl text-lg font-medium aspect-[4/3] bg-muted">
            {{ photo.name }}
          </div>
        </CarouselItem>
      </CarouselContent>
    </CarouselViewport>
    <CarouselIndicatorGroup aria-label="Choose a photo" class="flex justify-center gap-2">
      <CarouselIndicator
        v-for="(photo, index) in photos"
        :key="photo.name"
        :page="index + 1"
        :aria-label="photo.name"
        class="size-2 rounded-full bg-foreground/20 outline-none focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-primary cursor-default"
      />
    </CarouselIndicatorGroup>
  </Carousel>
</template>

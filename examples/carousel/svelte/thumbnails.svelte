<script lang="ts">
  import { Carousel, CarouselContent, CarouselItem, CarouselViewport } from "@ui-sdk/svelte/carousel"

  const photos = [
    { name: "Dunes" },
    { name: "Forest" },
    { name: "Glacier" },
    { name: "Canyon" },
    { name: "Meadow" },
    { name: "Harbor" },
  ]

  let page = $state(1)
  let block: HTMLElement | undefined = $state()
  const follow = (next: number) =>
    block?.querySelectorAll("button")[next - 1]?.scrollIntoView({ block: "nearest", inline: "nearest" })
</script>

<div
  bind:this={block}
  class="mx-auto grid w-full max-w-sm gap-3"
>
  <Carousel
    bind:page
    aria-label="Photos"
    onPageChange={follow}
  >
    <CarouselViewport
      class="rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30"
    >
      <CarouselContent class="gap-4">
        {#each photos as photo (photo.name)}
          <CarouselItem class="basis-full">
            <div class="flex items-center justify-center rounded-3xl text-lg font-medium aspect-video bg-muted">
              {photo.name}
            </div>
          </CarouselItem>
        {/each}
      </CarouselContent>
    </CarouselViewport>
  </Carousel>
  <Carousel
    aria-label="Thumbnails"
    dragFree
    slidesPerPage="auto"
  >
    <CarouselViewport
      class="rounded-xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30"
    >
      <CarouselContent class="gap-2">
        {#each photos as photo, index (photo.name)}
          <CarouselItem
            aria-label={photo.name}
            class="basis-1/4"
          >
            <button
              type="button"
              aria-pressed={page === index + 1}
              class="flex cursor-default aspect-square w-full items-center justify-center rounded-xl border-2 border-transparent text-xs font-medium opacity-60 outline-none transition-opacity focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset aria-pressed:border-primary aria-pressed:opacity-100 bg-muted motion-reduce:transition-none"
              onclick={() => (page = index + 1)}
            >
              {photo.name}
            </button>
          </CarouselItem>
        {/each}
      </CarouselContent>
    </CarouselViewport>
  </Carousel>
</div>

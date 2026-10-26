<script lang="ts">
  import { Pause, Play } from "@lucide/svelte"
  import {
    Carousel,
    CarouselContent,
    CarouselIndicator,
    CarouselIndicatorGroup,
    CarouselItem,
    CarouselPlayToggle,
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

  let log = $state("")
</script>

<Carousel
  aria-label="Photos"
  defaultPlaying
  interval={4000}
  class="group/carousel mx-auto grid w-full max-w-xs gap-3"
  onPlayingChange={(playing, details) => (log = `${playing ? "Playing" : "Stopped"} (${details.reason})`)}
>
  <CarouselViewport
    class="rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30"
  >
    <CarouselContent class="gap-4">
      {#each photos as photo (photo.name)}
        <CarouselItem class="basis-full">
          <div class="flex items-center justify-center rounded-3xl text-lg font-medium aspect-[4/3] bg-muted">
            {photo.name}
          </div>
        </CarouselItem>
      {/each}
    </CarouselContent>
  </CarouselViewport>
  <div class="flex items-center gap-3">
    <CarouselPlayToggle
      class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
    >
      {#snippet children(state)}
        {#if state.playing}
          <Pause class={state.paused ? "size-4 opacity-50" : "size-4"} />
          <span class="sr-only">Stop slide rotation</span>
        {:else}
          <Play class="size-4" />
          <span class="sr-only">Start slide rotation</span>
        {/if}
      {/snippet}
    </CarouselPlayToggle>
    <CarouselIndicatorGroup
      aria-label="Choose a photo"
      class="flex flex-1 gap-1.5"
    >
      {#each photos as photo, index (photo.name)}
        <CarouselIndicator
          page={index + 1}
          aria-label={photo.name}
          class="relative h-1.5 flex-1 overflow-hidden rounded-full bg-input outline-none focus-visible:ring-3 focus-visible:ring-ring/30 cursor-default"
        >
          <span
            class="absolute inset-0 hidden origin-left bg-primary group-data-playing/carousel:animate-[carousel-progress_var(--carousel-interval)_linear] group-data-paused/carousel:[animation-play-state:paused] in-data-selected:block rtl:origin-right cursor-default"
          ></span>
        </CarouselIndicator>
      {/each}
    </CarouselIndicatorGroup>
  </div>
  <p
    aria-live="polite"
    class="text-center text-sm text-muted-foreground"
  >{log}</p>
</Carousel>

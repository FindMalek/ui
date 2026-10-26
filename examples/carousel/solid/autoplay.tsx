import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselItem,
  CarouselPlayToggle,
  CarouselViewport,
} from "@ui-sdk/solid/carousel"
import { createSignal, For } from "solid-js"

const photos = [
  { name: "Dunes" },
  { name: "Forest" },
  { name: "Glacier" },
  { name: "Canyon" },
  { name: "Meadow" },
  { name: "Harbor" },
]

function Example() {
  const [log, setLog] = createSignal("")
  return (
    <Carousel
      aria-label="Photos"
      defaultPlaying
      interval={4000}
      onPlayingChange={(playing, details) => setLog(`${playing ? "Playing" : "Stopped"} (${details.reason})`)}
      class="group/carousel mx-auto grid w-full max-w-xs gap-3"
    >
      <CarouselViewport class="rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30">
        <CarouselContent class="gap-4">
          <For each={photos}>
            {(photo) => (
              <CarouselItem class="basis-full">
                <div class="flex items-center justify-center rounded-3xl text-lg font-medium aspect-[4/3] bg-muted">
                  {photo.name}
                </div>
              </CarouselItem>
            )}
          </For>
        </CarouselContent>
      </CarouselViewport>
      <div class="flex items-center gap-3">
        <CarouselPlayToggle class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none">
          {(state) =>
            state.playing ? (
              <>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  class={state.paused ? "size-4 opacity-50" : "size-4"}
                >
                  <rect x="14" y="3" width="5" height="18" rx="1" />
                  <rect x="5" y="3" width="5" height="18" rx="1" />
                </svg>
                <span class="sr-only">Stop slide rotation</span>
              </>
            ) : (
              <>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  class="size-4"
                >
                  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                </svg>
                <span class="sr-only">Start slide rotation</span>
              </>
            )
          }
        </CarouselPlayToggle>
        <CarouselIndicatorGroup aria-label="Choose a photo" class="flex flex-1 gap-1.5">
          <For each={photos}>
            {(photo, index) => (
              <CarouselIndicator
                page={index() + 1}
                aria-label={photo.name}
                class="relative h-1.5 flex-1 overflow-hidden rounded-full bg-input outline-none focus-visible:ring-3 focus-visible:ring-ring/30 cursor-default"
              >
                <span class="absolute inset-0 hidden origin-left bg-primary group-data-playing/carousel:animate-[carousel-progress_var(--carousel-interval)_linear] group-data-paused/carousel:[animation-play-state:paused] in-data-selected:block rtl:origin-right cursor-default" />
              </CarouselIndicator>
            )}
          </For>
        </CarouselIndicatorGroup>
      </div>
      <p aria-live="polite" class="text-center text-sm text-muted-foreground">
        {log()}
      </p>
    </Carousel>
  )
}

export { Example }

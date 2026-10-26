import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselViewport,
} from "@ui-sdk/solid/carousel"
import { For } from "solid-js"

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

function Example() {
  return (
    <Carousel aria-label="Photos" class="mx-auto grid w-full max-w-xs gap-3">
      <CarouselViewport class="rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30">
        <CarouselContent class="gap-4">
          <For each={photos}>
            {(photo) => (
              <CarouselItem
                class={(state) =>
                  `basis-full transition-opacity duration-300 ${state.inView ? "opacity-100" : "opacity-40"}`
                }
              >
                {(state) => (
                  <div class="flex items-center justify-center rounded-3xl text-lg font-medium aspect-[4/3] flex-col gap-1 bg-muted">
                    {photo.name}
                    <span class="text-xs font-normal text-muted-foreground">
                      {state.index + 1} / {photos.length}
                      {state.active && " · showing"}
                    </span>
                  </div>
                )}
              </CarouselItem>
            )}
          </For>
        </CarouselContent>
      </CarouselViewport>
      <div class="flex items-center justify-between">
        <CarouselPrevious class="inline-flex h-8 gap-1.5 px-3 text-sm font-medium shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            class="size-4 rtl:-scale-x-100"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Previous
        </CarouselPrevious>
        <CarouselNext
          class="inline-flex h-8 gap-1.5 px-3 text-sm font-medium shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
          render={(props, state) =>
            state.disabled ? (
              <a
                href="https://example.com/gallery"
                class={props.class}
                ref={(link) => nextFocused() && queueMicrotask(() => link.focus())}
              >
                See all photos
              </a>
            ) : (
              <button {...props}>
                Next
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  class="size-4 rtl:-scale-x-100"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            )
          }
        />
      </div>
    </Carousel>
  )
}

export { Example }

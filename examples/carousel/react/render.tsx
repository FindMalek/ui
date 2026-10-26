"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselViewport,
} from "@ui-sdk/react/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
    <Carousel aria-label="Photos" className="mx-auto grid w-full max-w-xs gap-3">
      <CarouselViewport className="rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30">
        <CarouselContent className="gap-4">
          {photos.map((photo) => (
            <CarouselItem
              key={photo.name}
              className={(state) =>
                `basis-full transition-opacity duration-300 ${state.inView ? "opacity-100" : "opacity-40"}`
              }
            >
              {(state) => (
                <div className="flex items-center justify-center rounded-3xl text-lg font-medium aspect-[4/3] flex-col gap-1 bg-muted">
                  {photo.name}
                  <span className="text-xs font-normal text-muted-foreground">
                    {state.index + 1} / {photos.length}
                    {state.active && " · showing"}
                  </span>
                </div>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselViewport>
      <div className="flex items-center justify-between">
        <CarouselPrevious className="inline-flex h-8 gap-1.5 px-3 text-sm font-medium shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none">
          <ChevronLeft className="size-4 rtl:-scale-x-100" />
          Previous
        </CarouselPrevious>
        <CarouselNext
          className="inline-flex h-8 gap-1.5 px-3 text-sm font-medium shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
          render={(props, state) =>
            state.disabled ? (
              <a
                href="https://example.com/gallery"
                className={props.className}
                ref={nextFocused() ? (link) => link?.focus() : undefined}
              >
                See all photos
              </a>
            ) : (
              <button {...props}>
                Next
                <ChevronRight className="size-4 rtl:-scale-x-100" />
              </button>
            )
          }
        />
      </div>
    </Carousel>
  )
}

export { Example }

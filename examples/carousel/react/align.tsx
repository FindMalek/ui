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

function Example() {
  return (
    <Carousel aria-label="Photos" align="center" className="mx-auto grid w-full max-w-sm gap-3">
      <CarouselViewport className="cursor-grab data-dragging:cursor-grabbing rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30">
        <CarouselContent className="gap-3">
          {photos.map((photo) => (
            <CarouselItem key={photo.name} className="basis-4/5">
              <div className="flex items-center justify-center rounded-3xl text-lg font-medium aspect-video bg-muted">
                {photo.name}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselViewport>
      <div className="flex items-center justify-between">
        <CarouselPrevious
          aria-label="Previous slide"
          className="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
        >
          <ChevronLeft className="size-4 rtl:-scale-x-100" />
        </CarouselPrevious>
        <CarouselNext
          aria-label="Next slide"
          className="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
        >
          <ChevronRight className="size-4 rtl:-scale-x-100" />
        </CarouselNext>
      </div>
    </Carousel>
  )
}

export { Example }

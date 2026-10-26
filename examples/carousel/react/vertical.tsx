"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselViewport,
} from "@ui-sdk/react/carousel"
import { ChevronDown, ChevronUp } from "lucide-react"

const slides = [1, 2, 3, 4, 5]

function Example() {
  return (
    <Carousel aria-label="Featured" orientation="vertical" className="mx-auto grid w-full max-w-xs gap-3">
      <CarouselViewport className="h-48 rounded-2xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30">
        <CarouselContent className="h-full gap-3">
          {slides.map((slide) => (
            <CarouselItem key={slide} className="basis-[calc((100%-0.75rem)/2)]">
              <div className="flex h-full items-center justify-center rounded-2xl bg-muted text-3xl font-semibold">
                {slide}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselViewport>
      <div className="flex justify-center gap-2">
        <CarouselPrevious
          aria-label="Previous slide"
          className="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
        >
          <ChevronUp className="size-4" />
        </CarouselPrevious>
        <CarouselNext
          aria-label="Next slide"
          className="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
        >
          <ChevronDown className="size-4" />
        </CarouselNext>
      </div>
    </Carousel>
  )
}

export { Example }

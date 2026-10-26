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
import * as React from "react"

const slides = [1, 2, 3, 4, 5]

function Example() {
  const [rested, setRested] = React.useState(1)
  return (
    <Carousel
      aria-label="Featured"
      onPageChangeComplete={setRested}
      className="mx-auto grid w-full max-w-xs gap-3"
    >
      <CarouselViewport className="rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30">
        <CarouselContent className="gap-4">
          {slides.map((slide) => (
            <CarouselItem key={slide} className="basis-full">
              <div className="flex aspect-square items-center justify-center rounded-3xl bg-muted text-4xl font-semibold">
                {slide}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselViewport>
      <div className="flex items-center gap-3">
        <CarouselPrevious
          aria-label="Previous slide"
          className="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
        >
          <ChevronLeft className="size-4 rtl:-scale-x-100" />
        </CarouselPrevious>
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-input">
          <div className="h-full origin-left bg-primary [scale:var(--carousel-progress)_1] rtl:origin-right" />
        </div>
        <CarouselNext
          aria-label="Next slide"
          className="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
        >
          <ChevronRight className="size-4 rtl:-scale-x-100" />
        </CarouselNext>
      </div>
      <p className="text-center text-sm text-muted-foreground">Rested on slide {rested}</p>
    </Carousel>
  )
}

export { Example }

"use client"

import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselViewport,
} from "@ui-sdk/react/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [1, 2, 3, 4, 5]

function Example() {
  return (
    <div dir="rtl" className="mx-auto w-full max-w-xs">
      <Carousel aria-label="مميز" className="grid gap-3">
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
        <div className="flex items-center justify-between">
          <CarouselPrevious
            aria-label="الشريحة السابقة"
            className="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
          >
            <ChevronLeft className="size-4 rtl:-scale-x-100" />
          </CarouselPrevious>
          <CarouselIndicatorGroup aria-label="اختر شريحة" className="flex justify-center gap-2">
            {slides.map((slide) => (
              <CarouselIndicator
                key={slide}
                page={slide}
                aria-label={`الشريحة ${slide}`}
                className="size-2 rounded-full bg-foreground/20 outline-none focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-primary cursor-default"
              />
            ))}
          </CarouselIndicatorGroup>
          <CarouselNext
            aria-label="الشريحة التالية"
            className="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
          >
            <ChevronRight className="size-4 rtl:-scale-x-100" />
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  )
}

export { Example }

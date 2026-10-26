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

const products = [1, 2, 3, 4, 5, 6, 7, 8]

function Example() {
  return (
    <Carousel aria-label="Products" slidesPerPage={3} className="mx-auto grid w-full max-w-sm gap-3">
      <CarouselViewport className="rounded-2xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30">
        <CarouselContent className="gap-3">
          {products.map((product) => (
            <CarouselItem key={product} className="basis-[calc((100%-1.5rem)/3)]">
              <div className="flex aspect-square items-center justify-center rounded-2xl bg-muted text-2xl font-semibold">
                {product}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselViewport>
      <div className="flex items-center justify-between">
        <CarouselPrevious
          aria-label="Previous page"
          className="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
        >
          <ChevronLeft className="size-4 rtl:-scale-x-100" />
        </CarouselPrevious>
        <CarouselIndicatorGroup aria-label="Choose a page" className="flex justify-center gap-2">
          {(state) =>
            Array.from({ length: state.pageCount ?? 3 }, (_, index) => (
              <CarouselIndicator
                key={index}
                page={index + 1}
                aria-label={`Page ${index + 1}`}
                className="size-2 rounded-full bg-foreground/20 outline-none focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-primary cursor-default"
              />
            ))
          }
        </CarouselIndicatorGroup>
        <CarouselNext
          aria-label="Next page"
          className="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
        >
          <ChevronRight className="size-4 rtl:-scale-x-100" />
        </CarouselNext>
      </div>
    </Carousel>
  )
}

export { Example }

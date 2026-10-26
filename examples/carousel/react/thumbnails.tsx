"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselViewport } from "@ui-sdk/react/carousel"
import * as React from "react"

const photos = [
  { name: "Dunes" },
  { name: "Forest" },
  { name: "Glacier" },
  { name: "Canyon" },
  { name: "Meadow" },
  { name: "Harbor" },
]

function Example() {
  const [page, setPage] = React.useState(1)
  const strip = React.useRef<HTMLDivElement>(null)
  const show = (next: number) => {
    setPage(next)
    strip.current
      ?.querySelectorAll("button")
      [next - 1]?.scrollIntoView({ block: "nearest", inline: "nearest" })
  }
  return (
    <div className="mx-auto grid w-full max-w-sm gap-3">
      <Carousel aria-label="Photos" page={page} onPageChange={show}>
        <CarouselViewport className="rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30">
          <CarouselContent className="gap-4">
            {photos.map((photo) => (
              <CarouselItem key={photo.name} className="basis-full">
                <div className="flex items-center justify-center rounded-3xl text-lg font-medium aspect-video bg-muted">
                  {photo.name}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </CarouselViewport>
      </Carousel>
      <Carousel ref={strip} aria-label="Thumbnails" dragFree slidesPerPage="auto">
        <CarouselViewport className="rounded-xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30">
          <CarouselContent className="gap-2">
            {photos.map((photo, index) => (
              <CarouselItem key={photo.name} aria-label={photo.name} className="basis-1/4">
                <button
                  type="button"
                  aria-pressed={page === index + 1}
                  onClick={() => setPage(index + 1)}
                  className="flex cursor-default aspect-square w-full items-center justify-center rounded-xl border-2 border-transparent text-xs font-medium opacity-60 outline-none transition-opacity focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset aria-pressed:border-primary aria-pressed:opacity-100 bg-muted motion-reduce:transition-none"
                >
                  {photo.name}
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </CarouselViewport>
      </Carousel>
    </div>
  )
}

export { Example }

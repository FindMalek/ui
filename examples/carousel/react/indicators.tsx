"use client"

import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselItem,
  CarouselViewport,
} from "@ui-sdk/react/carousel"

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
    <Carousel aria-label="Photos" className="mx-auto grid w-full max-w-xs gap-4">
      <CarouselViewport className="rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30">
        <CarouselContent className="gap-4">
          {photos.map((photo) => (
            <CarouselItem key={photo.name} className="basis-full">
              <div className="flex items-center justify-center rounded-3xl text-lg font-medium aspect-[4/3] bg-muted">
                {photo.name}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselViewport>
      <CarouselIndicatorGroup aria-label="Choose a photo" className="flex justify-center gap-2">
        {photos.map((photo, index) => (
          <CarouselIndicator
            key={photo.name}
            page={index + 1}
            aria-label={photo.name}
            className="size-2 rounded-full bg-foreground/20 outline-none focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-primary cursor-default"
          />
        ))}
      </CarouselIndicatorGroup>
    </Carousel>
  )
}

export { Example }

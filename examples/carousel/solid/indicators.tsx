import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselItem,
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

function Example() {
  return (
    <Carousel aria-label="Photos" class="mx-auto grid w-full max-w-xs gap-4">
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
      <CarouselIndicatorGroup aria-label="Choose a photo" class="flex justify-center gap-2">
        <For each={photos}>
          {(photo, index) => (
            <CarouselIndicator
              page={index() + 1}
              aria-label={photo.name}
              class="size-2 rounded-full bg-foreground/20 outline-none focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-primary cursor-default"
            />
          )}
        </For>
      </CarouselIndicatorGroup>
    </Carousel>
  )
}

export { Example }

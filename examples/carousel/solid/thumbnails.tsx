import { Carousel, CarouselContent, CarouselItem, CarouselViewport } from "@ui-sdk/solid/carousel"
import { createSignal, For } from "solid-js"

const photos = [
  { name: "Dunes" },
  { name: "Forest" },
  { name: "Glacier" },
  { name: "Canyon" },
  { name: "Meadow" },
  { name: "Harbor" },
]

function Example() {
  const [page, setPage] = createSignal(1)
  let strip: HTMLDivElement | undefined
  const show = (next: number) => {
    setPage(next)
    strip?.querySelectorAll("button")[next - 1]?.scrollIntoView({ block: "nearest", inline: "nearest" })
  }
  return (
    <div class="mx-auto grid w-full max-w-sm gap-3">
      <Carousel aria-label="Photos" page={page()} onPageChange={show}>
        <CarouselViewport class="rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30">
          <CarouselContent class="gap-4">
            <For each={photos}>
              {(photo) => (
                <CarouselItem class="basis-full">
                  <div class="flex items-center justify-center rounded-3xl text-lg font-medium aspect-video bg-muted">
                    {photo.name}
                  </div>
                </CarouselItem>
              )}
            </For>
          </CarouselContent>
        </CarouselViewport>
      </Carousel>
      <Carousel ref={strip} aria-label="Thumbnails" dragFree slidesPerPage="auto">
        <CarouselViewport class="rounded-xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30">
          <CarouselContent class="gap-2">
            <For each={photos}>
              {(photo, index) => (
                <CarouselItem aria-label={photo.name} class="basis-1/4">
                  <button
                    type="button"
                    aria-pressed={page() === index() + 1 ? "true" : "false"}
                    onClick={() => setPage(index() + 1)}
                    class="flex cursor-default aspect-square w-full items-center justify-center rounded-xl border-2 border-transparent text-xs font-medium opacity-60 outline-none transition-opacity focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset aria-pressed:border-primary aria-pressed:opacity-100 bg-muted motion-reduce:transition-none"
                  >
                    {photo.name}
                  </button>
                </CarouselItem>
              )}
            </For>
          </CarouselContent>
        </CarouselViewport>
      </Carousel>
    </div>
  )
}

export { Example }

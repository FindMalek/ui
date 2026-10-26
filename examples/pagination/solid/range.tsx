import { paginationRange } from "@ui-sdk/solid/pagination"
import { createSignal, For } from "solid-js"

function Example() {
  const [slide, setSlide] = createSignal(1)
  const items = () => paginationRange({ page: slide(), pageCount: 20, siblings: 2, boundaries: 1 })

  return (
    <div class="flex flex-col items-center gap-3">
      <div role="group" aria-label="Slides" class="flex h-6 items-center gap-2">
        <For each={items()}>
          {(item) =>
            typeof item === "number" ? (
              <button
                type="button"
                aria-label={`Slide ${item}`}
                aria-current={item === slide() ? "true" : undefined}
                onClick={() => setSlide(item)}
                class="size-2.5 rounded-full bg-foreground/20 outline-none transition-[width] hover:bg-foreground/40 focus-visible:ring-3 focus-visible:ring-ring/30 aria-[current=true]:w-6 aria-[current=true]:bg-primary motion-reduce:transition-none"
              />
            ) : (
              <span aria-hidden="true" class="size-1.5 rounded-full bg-foreground/20" />
            )
          }
        </For>
      </div>
      <output class="text-sm text-muted-foreground">Slide {slide()} of 20</output>
    </div>
  )
}

export { Example }

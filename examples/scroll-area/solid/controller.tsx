import {
  createScrollAreaController,
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@ui-sdk/solid/scroll-area"
import { createSignal, For } from "solid-js"

const tags = Array.from({ length: 50 }, (_, index) => `v1.2.0-beta.${50 - index}`)

function Example() {
  const controller = createScrollAreaController()
  const [position, setPosition] = createSignal("At the start")
  const read = () =>
    setPosition(controller.isAtEnd() ? "At the end" : controller.isAtStart() ? "At the start" : "In between")
  return (
    <div class="flex w-full max-w-sm flex-col items-center gap-3">
      <ScrollArea controller={controller} class="h-60 w-full rounded-2xl border border-border">
        <ScrollAreaViewport
          onScroll={read}
          class="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
        >
          <ScrollAreaContent class="p-4 text-sm">
            <For each={tags}>{(tag) => <div class="py-1.5">{tag}</div>}</For>
          </ScrollAreaContent>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar class="flex w-2.5 border-s border-s-transparent p-px opacity-0 transition-opacity duration-150 data-visible:opacity-100 motion-reduce:transition-none">
          <ScrollAreaThumb class="relative flex-1 rounded-full bg-border" />
        </ScrollAreaScrollbar>
      </ScrollArea>
      <div class="flex flex-col gap-2">
        <button
          type="button"
          onClick={() => controller.scrollToStart({ behavior: "smooth" })}
          class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors enabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px disabled:opacity-50 motion-reduce:transition-none motion-reduce:transform-none"
        >
          Back to top
        </button>
        <button
          type="button"
          onClick={() => controller.scrollToEnd({ behavior: "instant" })}
          class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors enabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px disabled:opacity-50 motion-reduce:transition-none motion-reduce:transform-none"
        >
          Jump to the end
        </button>
        <output class="text-sm text-muted-foreground">{position()}</output>
      </div>
    </div>
  )
}

export { Example }

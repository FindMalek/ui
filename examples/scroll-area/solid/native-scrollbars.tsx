import { ScrollArea, ScrollAreaContent, ScrollAreaViewport } from "@ui-sdk/solid/scroll-area"
import { For } from "solid-js"

const tags = Array.from({ length: 50 }, (_, index) => `v1.2.0-beta.${50 - index}`)

function Example() {
  return (
    <ScrollArea class="h-72 w-48 rounded-2xl border border-border">
      <ScrollAreaViewport class="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">
        <ScrollAreaContent class="p-4 text-sm">
          <For each={tags}>{(tag) => <div class="py-1.5">{tag}</div>}</For>
        </ScrollAreaContent>
      </ScrollAreaViewport>
    </ScrollArea>
  )
}

export { Example }

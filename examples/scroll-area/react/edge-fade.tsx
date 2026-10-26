"use client"

import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@ui-sdk/react/scroll-area"

const tags = Array.from({ length: 50 }, (_, index) => `v1.2.0-beta.${50 - index}`)

function Example() {
  return (
    <ScrollArea className="h-72 w-48 rounded-2xl border border-border">
      <ScrollAreaViewport className="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">
        <ScrollAreaContent className="p-4 text-sm">
          {tags.map((tag) => (
            <div key={tag} className="py-1.5">
              {tag}
            </div>
          ))}
        </ScrollAreaContent>
      </ScrollAreaViewport>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[min(2rem,var(--scroll-area-overflow-y-start))] [--scroll-area-overflow-y-start:inherit] rounded-t-2xl bg-linear-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[min(2rem,var(--scroll-area-overflow-y-end))] [--scroll-area-overflow-y-end:inherit] rounded-b-2xl bg-linear-to-t from-background to-transparent" />
      <ScrollAreaScrollbar className="flex w-2.5 border-s border-s-transparent p-px opacity-0 transition-opacity duration-150 data-visible:opacity-100 motion-reduce:transition-none">
        <ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
      </ScrollAreaScrollbar>
    </ScrollArea>
  )
}

export { Example }

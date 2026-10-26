"use client"

import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@ui-sdk/react/scroll-area"

const artworks = [
  { title: "Dunes at dusk" },
  { title: "Harbor fog" },
  { title: "Moss study" },
  { title: "Night market" },
  { title: "Salt flats" },
  { title: "Copper roofs" },
]

function Example() {
  return (
    <ScrollArea className="w-96 max-w-full rounded-2xl border border-border whitespace-nowrap">
      <ScrollAreaViewport className="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">
        <ScrollAreaContent className="flex w-max gap-4 p-4">
          {artworks.map((artwork) => (
            <figure key={artwork.title} className="shrink-0">
              <div className="h-40 w-32 rounded-2xl bg-muted" />
              <figcaption className="pt-2 text-xs text-muted-foreground">{artwork.title}</figcaption>
            </figure>
          ))}
        </ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar
        orientation="horizontal"
        className="flex h-2.5 flex-col border-t border-t-transparent p-px opacity-0 transition-opacity duration-150 data-visible:opacity-100 motion-reduce:transition-none"
      >
        <ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
      </ScrollAreaScrollbar>
    </ScrollArea>
  )
}

export { Example }

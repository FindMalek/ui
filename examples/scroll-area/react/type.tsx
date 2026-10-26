"use client"

import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
  type ScrollAreaType,
} from "@ui-sdk/react/scroll-area"

const types: ScrollAreaType[] = ["hover", "scroll", "auto", "always"]

const tags = Array.from({ length: 20 }, (_, index) => `v1.2.0-beta.${50 - index}`)

function Example() {
  return (
    <div className="grid w-full max-w-md grid-cols-2 gap-4">
      {types.map((type) => (
        <div key={type} className="flex flex-col gap-2">
          <code className="text-xs text-muted-foreground">type="{type}"</code>
          <ScrollArea type={type} className="h-40 w-full rounded-2xl border border-border">
            <ScrollAreaViewport className="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">
              <ScrollAreaContent className="px-3 py-2 text-sm">
                {tags.map((tag) => (
                  <div key={tag} className="py-1">
                    {tag}
                  </div>
                ))}
              </ScrollAreaContent>
            </ScrollAreaViewport>
            <ScrollAreaScrollbar className="flex w-2.5 border-s border-s-transparent p-px opacity-0 transition-opacity duration-150 data-visible:opacity-100 motion-reduce:transition-none">
              <ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
            </ScrollAreaScrollbar>
          </ScrollArea>
        </div>
      ))}
    </div>
  )
}

export { Example }

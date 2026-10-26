"use client"

import { ScrollArea, ScrollAreaContent, ScrollAreaViewport } from "@ui-sdk/react/scroll-area"

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
    </ScrollArea>
  )
}

export { Example }

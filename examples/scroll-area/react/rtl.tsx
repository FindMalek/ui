"use client"

import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@ui-sdk/react/scroll-area"

const tags = Array.from({ length: 40 }, (_, index) => `وسم ${index + 1}`)

function Example() {
  return (
    <div dir="rtl">
      <ScrollArea className="h-72 w-48 rounded-2xl border border-border">
        <ScrollAreaViewport className="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">
          <ScrollAreaContent className="p-4">
            <h4 className="mb-4 text-sm leading-none font-medium">الوسوم</h4>
            {tags.map((tag) => (
              <div key={tag} className="border-b border-border py-2 text-sm last:border-0">
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
  )
}

export { Example }

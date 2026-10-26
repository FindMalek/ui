"use client"

import { paginationRange } from "@ui-sdk/react/pagination"
import * as React from "react"

function Example() {
  const [slide, setSlide] = React.useState(1)
  const items = paginationRange({ page: slide, pageCount: 20, siblings: 2, boundaries: 1 })

  return (
    <div className="flex flex-col items-center gap-3">
      <div role="group" aria-label="Slides" className="flex h-6 items-center gap-2">
        {items.map((item) =>
          typeof item === "number" ? (
            <button
              key={item}
              type="button"
              aria-label={`Slide ${item}`}
              aria-current={item === slide ? "true" : undefined}
              onClick={() => setSlide(item)}
              className="size-2.5 rounded-full bg-foreground/20 outline-none transition-[width] hover:bg-foreground/40 focus-visible:ring-3 focus-visible:ring-ring/30 aria-[current=true]:w-6 aria-[current=true]:bg-primary motion-reduce:transition-none"
            />
          ) : (
            <span key={item} aria-hidden className="size-1.5 rounded-full bg-foreground/20" />
          ),
        )}
      </div>
      <output className="text-sm text-muted-foreground">Slide {slide} of 20</output>
    </div>
  )
}

export { Example }

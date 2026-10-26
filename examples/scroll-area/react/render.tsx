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
    <ScrollArea render={<section />} className="h-72 w-56 rounded-2xl border border-border">
      {(state) => (
        <>
          <ScrollAreaViewport
            render={<article />}
            aria-label="Releases"
            className="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
          >
            <ScrollAreaContent className="p-4 pb-10 text-sm">
              {tags.map((tag) => (
                <p key={tag} className="py-1.5">
                  {tag}
                </p>
              ))}
            </ScrollAreaContent>
          </ScrollAreaViewport>
          <p
            aria-hidden
            className={
              state.atEnd || !(state.overflowY || state.overflowX)
                ? "hidden"
                : "pointer-events-none absolute inset-x-0 bottom-0 rounded-b-2xl bg-background/90 py-2 text-center text-xs text-muted-foreground"
            }
          >
            {state.atStart ? "Scroll for older releases" : "Keep going"}
          </p>
          <ScrollAreaScrollbar
            className={(scrollbar) =>
              !scrollbar.visible && !scrollbar.dragging
                ? "flex w-2 border-s border-s-transparent p-px opacity-0 transition-[opacity,width] motion-reduce:transition-none"
                : scrollbar.scrolling || scrollbar.hovering
                  ? "flex w-2.5 border-s border-s-transparent p-px opacity-100 transition-[opacity,width] motion-reduce:transition-none"
                  : "flex w-2 border-s border-s-transparent p-px opacity-100 transition-[opacity,width] motion-reduce:transition-none"
            }
          >
            <ScrollAreaThumb
              className={(thumb) =>
                thumb.dragging
                  ? "relative flex-1 rounded-full bg-muted-foreground"
                  : "relative flex-1 rounded-full bg-border"
              }
            />
          </ScrollAreaScrollbar>
        </>
      )}
    </ScrollArea>
  )
}

export { Example }

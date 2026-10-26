"use client"

import * as React from "react"
import {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@ui-sdk/react/drawer"

function Example() {
  const [container, setContainer] = React.useState<HTMLDivElement | null>(null)
  return (
    <>
      <Drawer container={container}>
        <DrawerTrigger className="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
          Open in the box
        </DrawerTrigger>
        <DrawerBackdrop className="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm" />
        <DrawerContent className="relative mx-auto flex max-h-[85dvh] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit">
          <div aria-hidden className="mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted" />
          <div className="flex flex-col gap-0.5 p-4 text-center md:gap-1.5 md:text-start">
            <DrawerTitle className="text-base font-medium text-foreground">Portaled</DrawerTitle>
            <DrawerDescription className="text-sm text-muted-foreground">
              This drawer is in the box below, in the DOM.
            </DrawerDescription>
          </div>
          <div className="flex flex-col gap-2 p-4 pt-0 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <DrawerClose className="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
              Close
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
      <div className="mt-3 grid h-24 place-items-center rounded-2xl border border-dashed border-border px-6 text-sm text-muted-foreground">
        Container
        <div ref={setContainer} />
      </div>
    </>
  )
}

export { Example }

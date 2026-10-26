"use client"

import * as React from "react"
import {
  createDrawerController,
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@ui-sdk/react/drawer"

type PhotoAction = "share" | "duplicate" | "delete" | "cancel"

function Example() {
  const [photoActions] = React.useState(() => createDrawerController<undefined, PhotoAction>())
  const [result, setResult] = React.useState("")

  async function choose() {
    const { returnValue = "cancel" } = await photoActions.open()
    setResult(returnValue === "cancel" ? "Canceled" : `Chose ${returnValue}`)
  }

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={choose}
        className="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
      >
        Photo options
      </button>
      <span role="status" className="text-sm text-muted-foreground block min-h-5">
        {result}
      </span>
      <Drawer controller={photoActions}>
        <DrawerBackdrop className="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm" />
        <DrawerContent className="mx-auto flex w-full max-w-md flex-col gap-2 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] text-sm outline-none">
          <div className="overflow-hidden rounded-[min(var(--radius-4xl),24px)] bg-popover/95 text-center text-popover-foreground shadow-xl ring-1 ring-foreground/5 backdrop-blur">
            <div className="flex flex-col gap-0.5 px-4 py-3">
              <DrawerTitle className="text-xs font-medium text-muted-foreground">Beach.jpg</DrawerTitle>
              <DrawerDescription className="text-xs text-muted-foreground">
                Taken today at 9:41.
              </DrawerDescription>
            </div>
            <div className="flex flex-col divide-y divide-border border-t border-border">
              <DrawerClose
                value="share"
                className="h-8 cursor-default text-sm outline-none hover:bg-muted focus-visible:bg-muted"
              >
                Share
              </DrawerClose>
              <DrawerClose
                value="duplicate"
                className="h-8 cursor-default text-sm outline-none hover:bg-muted focus-visible:bg-muted"
              >
                Duplicate
              </DrawerClose>
              <DrawerClose
                value="delete"
                className="h-8 cursor-default text-sm text-foreground outline-none hover:bg-foreground/10 focus-visible:bg-foreground/10"
              >
                Delete
              </DrawerClose>
            </div>
          </div>
          <DrawerClose
            value="cancel"
            className="h-8 cursor-default rounded-[min(var(--radius-4xl),24px)] bg-popover text-sm font-medium text-popover-foreground ring-1 ring-foreground/5 outline-none hover:bg-muted focus-visible:bg-muted"
          >
            Cancel
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export { Example }

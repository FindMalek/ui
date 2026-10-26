"use client"

import * as React from "react"
import {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHandle,
  DrawerTitle,
  DrawerTrigger,
  type SnapPoint,
} from "@ui-sdk/react/drawer"

const snapPoints: SnapPoint[] = [0.25, 0.5, 1]

function Example() {
  const [open, setOpen] = React.useState(false)
  const [snapPoint, setSnapPoint] = React.useState<SnapPoint>(0.5)
  const [log, setLog] = React.useState<string[]>([])
  const write = (line: string) => setLog((lines) => [line, ...lines].slice(0, 8))
  return (
    <div className="grid w-full max-w-md gap-3">
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={open}
            onChange={(event) => setOpen(event.target.checked)}
            className="size-4 cursor-default accent-primary"
          />
          open
        </label>
        <fieldset className="flex items-center gap-3">
          <legend className="sr-only">snapPoint</legend>
          {snapPoints.map((point) => (
            <label key={point} className="flex items-center gap-1.5">
              <input
                type="radio"
                name="controlled-snap-point"
                checked={snapPoint === point}
                onChange={() => setSnapPoint(point)}
                className="size-4 cursor-default accent-primary"
              />
              {point}
            </label>
          ))}
        </fieldset>
      </div>
      <Drawer
        open={open}
        onOpenChange={(next, details) => {
          setOpen(next)
          write(`onOpenChange(${next}, "${details.reason}")`)
        }}
        onOpenChangeComplete={(next) => write(`onOpenChangeComplete(${next})`)}
        snapPoints={snapPoints}
        snapPoint={snapPoint}
        onSnapPointChange={(next, details) => {
          setSnapPoint(next)
          write(`onSnapPointChange(${next}, "${details.reason}")`)
        }}
      >
        <DrawerTrigger className="inline-flex cursor-default h-8 w-fit shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
          Open
        </DrawerTrigger>
        <DrawerBackdrop className="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm" />
        <DrawerContent className="relative mx-auto flex h-[calc(100dvh-3rem)] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit">
          <DrawerHandle
            aria-label="Resize"
            className="relative mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted outline-none after:absolute after:-inset-x-2 after:-inset-y-3 focus-visible:ring-3 focus-visible:ring-ring/30 cursor-default"
          />
          <div className="flex flex-col gap-0.5 p-4 text-center md:gap-1.5 md:text-start">
            <DrawerTitle className="text-base font-medium text-foreground">Controlled</DrawerTitle>
            <DrawerDescription className="text-sm text-muted-foreground">
              Open at {snapPoint}. Drag it, or pick a size, and watch the log.
            </DrawerDescription>
          </div>
          <div className="flex flex-wrap justify-center gap-2 px-4 md:justify-start">
            {snapPoints.map((point) => (
              <button
                key={point}
                type="button"
                aria-pressed={snapPoint === point}
                onClick={() => setSnapPoint(point)}
                className="inline-flex cursor-default h-8 min-w-8 items-center justify-center gap-1 rounded-2xl border border-input bg-transparent px-2 text-sm font-medium outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-muted motion-reduce:transition-none"
              >
                {point}
              </button>
            ))}
            <DrawerClose className="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
              Close
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
      <p className="font-mono text-xs text-muted-foreground">
        open: {String(open)}, snapPoint: {snapPoint}
      </p>
      <ol className="h-24 overflow-y-auto rounded-2xl bg-muted p-2 font-mono text-xs leading-5 text-muted-foreground">
        {log.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ol>
    </div>
  )
}

export { Example }

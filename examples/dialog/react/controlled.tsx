"use client"

import * as React from "react"
import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@ui-sdk/react/dialog"

function Example() {
  const [open, setOpen] = React.useState(false)
  const [log, setLog] = React.useState<string[]>([])
  const write = (line: string) => setLog((lines) => [line, ...lines].slice(0, 8))
  return (
    <>
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={open}
          onChange={(event) => setOpen(event.target.checked)}
          className="m-0 size-4 accent-primary"
        />
        open
      </label>
      <Dialog
        open={open}
        onOpenChange={(next, details) => {
          setOpen(next)
          write(`onOpenChange(${next}, "${details.reason}")`)
        }}
        onOpenChangeComplete={(next) => write(`onOpenChangeComplete(${next})`)}
      >
        <DialogTrigger className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 mt-3">
          Open
        </DialogTrigger>
        <DialogBackdrop className="fixed inset-0 bg-black/30 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-sm data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none" />
        <DialogContent className="fixed top-1/2 left-1/2 grid w-full max-w-[calc(100%-2rem)] -translate-1/2 gap-6 rounded-[min(var(--radius-4xl),24px)] border-0 bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 sm:max-w-md motion-reduce:transition-none">
          <div className="flex flex-col gap-1.5">
            <DialogTitle className="m-0 text-base leading-none font-medium">Controlled</DialogTitle>
            <DialogDescription className="m-0 text-sm text-muted-foreground">
              Close it any way you like, and watch the log.
            </DialogDescription>
          </div>
          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <DialogClose className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-colors hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">
              Close
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
      <ol className="m-0 mt-3 h-24 w-full max-w-xs list-none overflow-y-auto rounded-2xl bg-muted p-2 font-mono text-xs leading-5 text-muted-foreground">
        {log.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ol>
    </>
  )
}

export { Example }

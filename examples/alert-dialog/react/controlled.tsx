"use client"

import * as React from "react"
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@ui-sdk/react/alert-dialog"

function Example() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="grid w-full max-w-xs justify-items-start gap-3">
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground transition-colors outline-none select-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50">
          Review changes
        </AlertDialogTrigger>
        <AlertDialogBackdrop className="fixed inset-0 isolate z-50 bg-black/30 supports-backdrop-filter:backdrop-blur-sm" />
        <AlertDialogContent className="fixed top-1/2 left-1/2 z-50 grid max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-xs -translate-x-1/2 -translate-y-1/2 gap-6 overflow-y-auto rounded-[min(var(--radius-4xl),24px)] bg-popover p-6 text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none sm:max-w-md">
          <div className="grid place-items-center gap-1.5 text-center sm:place-items-start sm:text-start">
            <AlertDialogTitle className="m-0 text-lg font-medium">Discard unsaved changes?</AlertDialogTitle>
            <AlertDialogDescription className="m-0 text-sm leading-5 text-balance text-muted-foreground md:text-pretty">
              Your edits will be lost if you leave without saving.
            </AlertDialogDescription>
          </div>
          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <AlertDialogClose className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground transition-colors outline-none select-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50">
              Keep editing
            </AlertDialogClose>
            <AlertDialogClose
              value="confirm"
              className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground transition-colors outline-none select-none hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50"
            >
              Discard
            </AlertDialogClose>
          </div>
        </AlertDialogContent>
      </AlertDialog>
      <output className="min-h-5 text-sm text-muted-foreground">Open: {String(open)}</output>
    </div>
  )
}

export { Example }

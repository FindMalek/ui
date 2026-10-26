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
  const attempts = React.useRef(0)
  const [status, setStatus] = React.useState("")

  async function deleteProject() {
    await new Promise((resolve) => setTimeout(resolve, 1200))
    if (attempts.current++ === 0) throw new Error("Couldn't delete the project. Try again.")
  }

  return (
    <div className="grid w-full max-w-xs justify-items-start gap-3">
      <AlertDialog
        pendingAnnouncement="Deleting project"
        onOpenChange={(open, details) => {
          if (open) setStatus("")
          else if (details.reason === "action") setStatus("Deleted")
        }}
      >
        <AlertDialogTrigger className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground transition-colors outline-none select-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50">
          Delete project
        </AlertDialogTrigger>
        <AlertDialogBackdrop className="fixed inset-0 isolate z-50 bg-black/30 supports-backdrop-filter:backdrop-blur-sm" />
        <AlertDialogContent className="fixed top-1/2 left-1/2 z-50 grid max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-xs -translate-x-1/2 -translate-y-1/2 gap-6 overflow-y-auto rounded-[min(var(--radius-4xl),24px)] bg-popover p-6 text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none sm:max-w-md">
          <div className="grid place-items-center gap-1.5 text-center sm:place-items-start sm:text-start">
            <AlertDialogTitle className="m-0 text-lg font-medium">Delete project?</AlertDialogTitle>
            <AlertDialogDescription className="m-0 text-sm leading-5 text-balance text-muted-foreground md:text-pretty">
              This permanently deletes the project and its files.
            </AlertDialogDescription>
          </div>
          <AlertDialogClose
            value="confirm"
            action={deleteProject}
            className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground transition-colors outline-none select-none hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 min-w-24 data-pending:cursor-wait"
            render={(props, state) => (
              <div className="grid gap-2">
                <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                  <AlertDialogClose className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground transition-colors outline-none select-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50">
                    Cancel
                  </AlertDialogClose>
                  <button {...props}>
                    {state.pending ? "Deleting…" : state.error ? "Try again" : "Delete"}
                  </button>
                </div>
                <p role="alert" className="m-0 min-h-12 text-sm leading-6 text-muted-foreground">
                  {state.error instanceof Error && state.error.message}
                </p>
              </div>
            )}
          />
        </AlertDialogContent>
      </AlertDialog>
      <output aria-live="polite" className="min-h-5 text-sm text-muted-foreground">
        {status}
      </output>
    </div>
  )
}

export { Example }

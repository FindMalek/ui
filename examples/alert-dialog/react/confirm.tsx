"use client"

import * as React from "react"
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  createConfirm,
} from "@ui-sdk/react/alert-dialog"

function Example() {
  const [confirm] = React.useState(() => createConfirm<{ name: string }>())
  const [projects, setProjects] = React.useState(["Acme", "Globex", "Initech"])
  const reset = React.useRef<HTMLButtonElement>(null)

  async function remove(name: string, button: HTMLButtonElement) {
    if (!(await confirm({ name }))) return
    const row = button.closest("li")
    const next = (row?.nextElementSibling ?? row?.previousElementSibling)?.querySelector("button")
    const target = next ?? reset.current
    target?.focus()
    setProjects((list) => list.filter((project) => project !== name))
  }

  return (
    <div className="grid w-full max-w-xs gap-3">
      <ul aria-label="Projects" className="m-0 min-h-36 list-none p-0">
        {projects.map((name) => (
          <li
            key={name}
            className="flex h-12 items-center justify-between gap-3 border-b border-border text-sm text-foreground"
          >
            {name}
            <button
              type="button"
              className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground transition-colors outline-none select-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50"
              onClick={(event) => remove(name, event.currentTarget)}
            >
              Delete
            </button>
          </li>
        ))}
        {projects.length === 0 && (
          <li className="flex h-12 items-center text-sm text-muted-foreground">All projects deleted.</li>
        )}
      </ul>
      <button
        ref={reset}
        type="button"
        className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground transition-colors outline-none select-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50"
        onClick={() => setProjects(["Acme", "Globex", "Initech"])}
      >
        Reset projects
      </button>
      <AlertDialog controller={confirm.controller}>
        <AlertDialogBackdrop className="fixed inset-0 isolate z-50 bg-black/30 supports-backdrop-filter:backdrop-blur-sm" />
        <AlertDialogContent<{
          name: string
        }> className="fixed top-1/2 left-1/2 z-50 grid max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-xs -translate-x-1/2 -translate-y-1/2 gap-6 overflow-y-auto rounded-[min(var(--radius-4xl),24px)] bg-popover p-6 text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none sm:max-w-md">
          {(state) => (
            <>
              <div className="grid place-items-center gap-1.5 text-center sm:place-items-start sm:text-start">
                <AlertDialogTitle className="m-0 text-lg font-medium">
                  Delete {state.payload?.name}?
                </AlertDialogTitle>
                <AlertDialogDescription className="m-0 text-sm leading-5 text-balance text-muted-foreground md:text-pretty">
                  The project and its files will be deleted for everyone.
                </AlertDialogDescription>
              </div>
              <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                <AlertDialogClose className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground transition-colors outline-none select-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50">
                  Cancel
                </AlertDialogClose>
                <AlertDialogClose
                  value="confirm"
                  className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground transition-colors outline-none select-none hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50"
                >
                  Delete
                </AlertDialogClose>
              </div>
            </>
          )}
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export { Example }

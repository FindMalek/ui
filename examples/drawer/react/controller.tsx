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
  DrawerTrigger,
} from "@ui-sdk/react/drawer"

type SharedDocument = { name: string; size: string; uploading?: boolean }

const documents: SharedDocument[] = [
  { name: "Budget.xlsx", size: "48 KB" },
  { name: "Roadmap.pdf", size: "1.2 MB" },
  { name: "Launch video.mp4", size: "310 MB", uploading: true },
]

function Example() {
  const [share] = React.useState(() => createDrawerController<SharedDocument, "copy" | "email">())
  const [status, setStatus] = React.useState("")

  async function shareLatest() {
    const { reason, returnValue } = await share.open({ payload: documents[1] })
    setStatus(returnValue ? `Shared from code: ${returnValue}` : `Closed with ${reason}`)
  }

  return (
    <div className="grid w-full max-w-md gap-3">
      <ul className="divide-y divide-border rounded-2xl border border-border">
        {documents.map((file) => (
          <li key={file.name} className="flex items-center justify-between gap-3 px-3 py-2 text-sm">
            <span>
              {file.name}
              <span className="block text-xs text-muted-foreground">
                {file.uploading ? "Uploading…" : file.size}
              </span>
            </span>
            <DrawerTrigger
              controller={share}
              payload={file}
              disabled={file.uploading}
              aria-label={`Share ${file.name}`}
              className="inline-flex cursor-default h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
            >
              Share
            </DrawerTrigger>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={shareLatest}
          className="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
        >
          Share the roadmap
        </button>
        <span role="status" className="text-sm text-muted-foreground block min-h-5">
          {status}
        </span>
      </div>
      <Drawer
        controller={share}
        onOpenChange={(open, details) =>
          !open && details.returnValue && setStatus(`Shared: ${details.returnValue}`)
        }
      >
        <DrawerBackdrop className="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm" />
        <DrawerContent<SharedDocument> className="relative mx-auto flex max-h-[85dvh] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit">
          {(state) => {
            const file = state.payload
            return (
              <>
                <div aria-hidden className="mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted" />
                <div className="flex flex-col gap-0.5 p-4 text-center md:gap-1.5 md:text-start">
                  <DrawerTitle className="text-base font-medium text-foreground">
                    Share {file?.name}
                  </DrawerTitle>
                  <DrawerDescription className="text-sm text-muted-foreground">
                    Anyone with the link can view it.
                  </DrawerDescription>
                </div>
                <div className="flex flex-col gap-2 p-4 pt-0 pb-[max(1rem,env(safe-area-inset-bottom))]">
                  <DrawerClose
                    value="copy"
                    className="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
                  >
                    Copy link
                  </DrawerClose>
                  <DrawerClose
                    value="email"
                    className="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
                  >
                    Send by email
                  </DrawerClose>
                </div>
              </>
            )
          }}
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export { Example }

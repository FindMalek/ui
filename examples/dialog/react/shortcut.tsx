import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogContent,
  DialogShortcut,
  DialogTitle,
  DialogTrigger,
} from "@ui-sdk/react/dialog"
import { File, Search } from "lucide-react"

const pages = ["Introduction", "Installation", "Dialog", "Alert Dialog", "Menu"]

function Example() {
  return (
    <Dialog>
      <DialogTrigger
        shortcut="mod+j"
        className="inline-flex h-8 shrink-0 cursor-default items-center justify-start gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 w-56"
      >
        <Search aria-hidden="true" className="size-4" />
        Search docs
        <DialogShortcut className="ms-auto inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-muted px-1 font-sans text-xs font-medium text-muted-foreground" />
      </DialogTrigger>
      <DialogBackdrop className="fixed inset-0 bg-black/30 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-sm data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none" />
      <DialogContent className="fixed top-1/2 left-1/2 grid w-full max-w-[calc(100%-2rem)] -translate-1/2 gap-6 rounded-[min(var(--radius-4xl),24px)] border-0 bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 sm:max-w-md motion-reduce:transition-none">
        <DialogTitle className="sr-only">Search docs</DialogTitle>
        <input
          aria-label="Search"
          placeholder="Search…"
          className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base font-normal text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:opacity-50 md:text-sm"
        />
        <div className="grid gap-0.5">
          {pages.map((page) => (
            <DialogClose
              key={page}
              value={page}
              className="flex min-h-7 cursor-default items-center gap-2 rounded-xl border-0 bg-transparent px-2 py-1.5 text-start text-sm outline-none select-none hover:bg-muted focus-visible:bg-muted"
            >
              <File aria-hidden="true" className="size-4 text-muted-foreground" />
              {page}
            </DialogClose>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { Example }

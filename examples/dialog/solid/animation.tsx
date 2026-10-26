import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@ui-sdk/solid/dialog"
import { createSignal } from "solid-js"

function Example() {
  const [status, setStatus] = createSignal("Closed")
  return (
    <>
      <Dialog
        onOpenChange={(open) => setStatus(open ? "Opening" : "Closing")}
        onOpenChangeComplete={(open) => setStatus(open ? "Open" : "Closed")}
      >
        <DialogTrigger class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 data-open:bg-muted">
          Slide in
        </DialogTrigger>
        <DialogBackdrop class="fixed inset-0 bg-black/30 transition-opacity duration-300 supports-backdrop-filter:backdrop-blur-sm data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none" />
        <DialogContent
          keepMounted
          class="fixed top-1/2 left-1/2 grid w-full max-w-[calc(100%-2rem)] -translate-1/2 gap-6 rounded-[min(var(--radius-4xl),24px)] border-0 bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,translate] duration-300 ease-out data-starting-style:translate-y-[-40%] data-starting-style:opacity-0 data-ending-style:translate-y-[-40%] data-ending-style:opacity-0 sm:max-w-md motion-reduce:transition-none"
        >
          <div class="flex flex-col gap-1.5">
            <DialogTitle class="m-0 text-base leading-none font-medium">Slide and fade</DialogTitle>
            <DialogDescription class="m-0 text-sm text-muted-foreground">
              300ms in and out. Focus returns as soon as it starts closing.
            </DialogDescription>
          </div>
          <div class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <DialogClose class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-colors hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">
              Close
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
      <output class="mt-3 block min-h-5 text-sm text-muted-foreground">{status()}</output>
    </>
  )
}

export { Example }

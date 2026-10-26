import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@ui-sdk/solid/dialog"

function Example() {
  let next: HTMLButtonElement | undefined
  return (
    <div class="flex flex-wrap items-center gap-2">
      <Dialog>
        <DialogTrigger class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 data-open:bg-muted">
          Invite
        </DialogTrigger>
        <DialogBackdrop class="fixed inset-0 bg-black/30 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-sm data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none" />
        <DialogContent
          initialFocus="[name=email]"
          finalFocus={() => next}
          class="fixed top-1/2 left-1/2 grid w-full max-w-[calc(100%-2rem)] -translate-1/2 gap-6 rounded-[min(var(--radius-4xl),24px)] border-0 bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 sm:max-w-md motion-reduce:transition-none"
        >
          <div class="flex flex-col gap-1.5">
            <DialogTitle class="m-0 text-base leading-none font-medium">Invite a teammate</DialogTitle>
            <DialogDescription class="m-0 text-sm text-muted-foreground">
              Focus starts on the email.
            </DialogDescription>
          </div>
          <div class="grid gap-4">
            <label class="grid gap-2 text-sm font-medium">
              Name
              <input
                name="name"
                value="Ada"
                class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base font-normal text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:opacity-50 md:text-sm"
              />
            </label>
            <label class="grid gap-2 text-sm font-medium">
              Email
              <input
                name="email"
                type="email"
                class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base font-normal text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:opacity-50 md:text-sm"
              />
            </label>
          </div>
          <div class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <DialogClose class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-colors hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">
              Send invite
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
      <button
        ref={next}
        type="button"
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        Next step
      </button>
    </div>
  )
}

export { Example }

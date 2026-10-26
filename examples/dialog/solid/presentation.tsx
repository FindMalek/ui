import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@ui-sdk/solid/dialog"

function Example() {
  return (
    <Dialog presentation="sheet">
      <DialogTrigger class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 data-open:bg-muted">
        Edit profile
      </DialogTrigger>
      <DialogContent
        class={(state) =>
          state.presentation === "sheet"
            ? "grid gap-6 rounded-t-[min(var(--radius-4xl),24px)] border-0 bg-popover p-6 pb-[max(env(safe-area-inset-bottom),1.5rem)] text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none [--sheet-backdrop:rgb(0_0_0/0.3)]"
            : "fixed top-1/2 left-1/2 grid w-full max-w-[calc(100%-2rem)] -translate-1/2 gap-6 rounded-[min(var(--radius-4xl),24px)] border-0 bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 sm:max-w-md motion-reduce:transition-none backdrop:bg-black/30"
        }
      >
        <div class="flex flex-col gap-1.5">
          <DialogTitle class="m-0 text-base leading-none font-medium">Edit profile</DialogTitle>
          <DialogDescription class="m-0 text-sm text-muted-foreground">
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </div>
        <div class="grid gap-4">
          <label class="grid gap-2 text-sm font-medium">
            Name
            <input
              value="Pedro Duarte"
              class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base font-normal text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:opacity-50 md:text-sm"
            />
          </label>
          <label class="grid gap-2 text-sm font-medium">
            Username
            <input
              value="@peduarte"
              class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base font-normal text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:opacity-50 md:text-sm"
            />
          </label>
        </div>
        <div class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <DialogClose class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">
            Cancel
          </DialogClose>
          <DialogClose
            value="save"
            class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-colors hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            Save changes
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { Example }

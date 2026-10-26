<script lang="ts">
  import { X } from "@lucide/svelte"
  import {
    Dialog,
    DialogBackdrop,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
  } from "@ui-sdk/svelte/dialog"
</script>

<Dialog>
  <DialogTrigger
    class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30"
  >
    Share
  </DialogTrigger>
  <DialogBackdrop
    class="fixed inset-0 bg-black/30 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-sm data-starting-style:opacity-0 data-ending-style:opacity-0"
  />
  <DialogContent
    class="fixed top-1/2 left-1/2 grid w-full max-w-[calc(100%-2rem)] -translate-1/2 gap-6 rounded-[min(var(--radius-4xl),24px)] bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 sm:max-w-md dark:ring-foreground/10"
  >
    <div class="flex flex-col gap-1.5">
      <DialogTitle class="text-base leading-none font-medium">Share link</DialogTitle>
      <DialogDescription class="text-sm text-muted-foreground">
        Anyone who has this link will be able to view this.
      </DialogDescription>
    </div>
    <label class="grid gap-2 text-sm font-medium">
      <span class="sr-only">Link</span>
      <input
        value="https://ui.shadcn.com/docs/installation"
        readonly
        class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base font-normal outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm"
      />
    </label>
    <div class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-start">
      <DialogClose
        class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        Close
      </DialogClose>
    </div>
    <DialogClose
      aria-label="Close"
      class="absolute end-4 top-4 inline-flex size-7 shrink-0 items-center justify-center rounded-2xl border border-transparent bg-secondary bg-clip-padding outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50"
    >
      <X class="size-4" />
    </DialogClose>
  </DialogContent>
</Dialog>

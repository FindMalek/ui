<script lang="ts">
  import {
    Dialog,
    DialogBackdrop,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogShortcut,
    DialogTitle,
    DialogTrigger,
  } from "@ui-sdk/svelte/dialog"
</script>

<Dialog>
  <DialogTrigger shortcut="mod+i">
    {#snippet render({ props, state })}
      <button
        {...props}
        class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30"
      >
        {state.open ? "Viewing" : "View details"}
        <DialogShortcut
          class="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-muted px-1 font-sans text-xs font-medium text-muted-foreground"
        >
          {#snippet children(shortcut)}{shortcut.text}{/snippet}
        </DialogShortcut>
      </button>
    {/snippet}
  </DialogTrigger>
  <DialogBackdrop
    class="fixed inset-0 bg-black/30 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-sm data-starting-style:opacity-0 data-ending-style:opacity-0 data-ending-style:pointer-events-none"
  />
  <DialogContent
    class="fixed top-1/2 left-1/2 grid w-full max-w-[calc(100%-2rem)] -translate-1/2 gap-6 rounded-[min(var(--radius-4xl),24px)] bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 sm:max-w-md dark:ring-foreground/10"
  >
    {#snippet children(state)}
      <div class="flex flex-col gap-1.5">
        <DialogTitle class="text-base leading-none font-medium">
          {#snippet render({ props })}
            <h3 {...props}>Details</h3>
          {/snippet}
        </DialogTitle>
        <DialogDescription class="text-sm text-muted-foreground">
          {state.nested ? "Opened from another dialog." : "Opened from the page."} {state.stack} open
          above it.{state.nestedOpen ? " A child is open." : ""}
        </DialogDescription>
      </div>
      <div class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <DialogClose
          href="https://example.com/details"
          class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          {#snippet render({ props })}
            <a {...props}>
              Open the full page
            </a>
          {/snippet}
        </DialogClose>
      </div>
    {/snippet}
  </DialogContent>
</Dialog>

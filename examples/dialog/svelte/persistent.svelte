<script lang="ts">
  import {
    Dialog,
    DialogBackdrop,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
  } from "@ui-sdk/svelte/dialog"

  let chat: HTMLButtonElement | undefined = $state()
  let messages = $state(0)

  function onOpenChange(open: boolean) {
    if (open) requestAnimationFrame(() => chat?.showPopover())
    else chat?.hidePopover()
  }
</script>

<Dialog persistentElements={() => (chat ? [chat] : [])} {onOpenChange}>
  <DialogTrigger
    class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 data-open:bg-muted"
  >
    Upgrade plan
  </DialogTrigger>
  <DialogBackdrop
    class="fixed inset-0 bg-black/30 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-sm data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none"
  />
  <DialogContent
    class="fixed top-1/2 left-1/2 grid w-full max-w-[calc(100%-2rem)] -translate-1/2 gap-6 rounded-[min(var(--radius-4xl),24px)] border-0 bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 sm:max-w-md motion-reduce:transition-none"
  >
    <div class="flex flex-col gap-1.5">
      <DialogTitle class="m-0 text-base leading-none font-medium">Upgrade to Pro</DialogTitle>
      <DialogDescription class="m-0 text-sm text-muted-foreground">Questions? The chat in the corner still works.</DialogDescription>
    </div>
    <div class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
      <DialogClose
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        Not now
      </DialogClose>
      <DialogClose
        value="upgrade"
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-colors hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        Upgrade
      </DialogClose>
    </div>
  </DialogContent>
</Dialog>
<button
  bind:this={chat}
  type="button"
  popover="manual"
  class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-colors hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 fixed inset-auto end-4 bottom-4 m-0 not-open:hidden"
  onclick={() => messages++}
>
  Chat with us{messages ? ` (${messages})` : ""}
</button>

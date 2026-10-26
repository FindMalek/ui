import {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHandle,
  DrawerTitle,
  DrawerTrigger,
} from "@ui-sdk/solid/drawer"

function Example() {
  return (
    <Drawer snapPoints={[160, "20rem", 1]}>
      <DrawerTrigger class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
        Resize with the handle
      </DrawerTrigger>
      <DrawerBackdrop class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm" />
      <DrawerContent class="relative mx-auto flex h-[calc(100dvh-3rem)] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit">
        <DrawerHandle
          aria-label="Resize"
          class="mx-auto mt-3 flex shrink-0 flex-col items-center gap-1 rounded-xl px-3 py-1 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30 cursor-default"
        >
          {(state) => (
            <>
              <span class="h-1.5 w-[100px] rounded-full bg-muted" />
              <span class="flex items-center gap-1 font-mono text-xs">
                <svg
                  class={state.canExpand ? "size-3" : "size-3 opacity-25"}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 12 7-7 7 7" />
                  <path d="M12 19V5" />
                </svg>
                {state.snapPoint}
                <svg
                  class={state.canCollapse ? "size-3" : "size-3 opacity-25"}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </span>
            </>
          )}
        </DrawerHandle>
        <div class="flex flex-col gap-0.5 p-4 text-center md:gap-1.5 md:text-start">
          <DrawerTitle class="text-base font-medium text-foreground">Handle</DrawerTitle>
          <DrawerDescription class="text-sm text-muted-foreground">
            Focus the handle with Tab, then use the keys below.
          </DrawerDescription>
        </div>
        <dl class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 px-4">
          <dt class="font-mono text-xs leading-5">Press</dt>
          <dd class="text-muted-foreground">The next snap point, then back to the first</dd>
          <dt class="font-mono text-xs leading-5">↑ ↓</dt>
          <dd class="text-muted-foreground">One snap point larger or smaller</dd>
          <dt class="font-mono text-xs leading-5">Home End</dt>
          <dd class="text-muted-foreground">The smallest or the largest</dd>
        </dl>
        <div class="mt-auto flex flex-col gap-2 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <DrawerClose class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
            Close
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export { Example }

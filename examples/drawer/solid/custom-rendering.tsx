import {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHandle,
  DrawerShortcut,
  DrawerTitle,
  DrawerTrigger,
} from "@ui-sdk/solid/drawer"

export function Example() {
  return (
    <Drawer snapPoints={[0.5, 1]}>
      <DrawerTrigger
        shortcut="mod+j"
        render={(props, state) => (
          <button
            {...props}
            class="inline-flex h-8 shrink-0 items-center justify-center gap-2 rounded-2xl border border-border bg-background bg-clip-padding ps-3 pe-1.5 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30"
          >
            {state.open ? "Viewing" : "View details"}
            <DrawerShortcut class="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-muted px-1 font-sans text-xs font-medium text-muted-foreground">
              {(shortcut) => shortcut.text}
            </DrawerShortcut>
          </button>
        )}
      />
      <DrawerBackdrop
        class={(state) =>
          `fixed inset-0 supports-backdrop-filter:backdrop-blur-sm ${state.nested || state.nestedOpen ? "bg-black/15" : "bg-black/30"} ${state.open ? "" : "pointer-events-none"}`
        }
      />
      <DrawerContent
        class={(state) =>
          `relative mx-auto flex h-[calc(100dvh-3rem)] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit dark:ring-foreground/10 ${state.dragging ? "cursor-grabbing shadow-2xl" : "shadow-xl"}`
        }
      >
        {(state) => (
          <>
            <DrawerHandle
              aria-label="Resize"
              class="relative mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted outline-none after:absolute after:-inset-x-2 after:-inset-y-3 focus-visible:ring-3 focus-visible:ring-ring/30"
            />
            <div class="flex flex-col gap-0.5 p-4 text-center md:gap-1.5 md:text-start">
              <DrawerTitle
                render={(props) => <h3 {...props} />}
                class="text-base font-medium text-foreground"
              >
                Details
              </DrawerTitle>
              <DrawerDescription class="text-sm text-muted-foreground">
                {state.dragging
                  ? "Dragging."
                  : state.expanded
                    ? "Expanded to its largest snap point."
                    : `Resting at ${state.snapPoint}, from the ${state.side}.`}{" "}
                {state.stack} open above it.
              </DrawerDescription>
            </div>
            <div class="flex flex-col gap-2 p-4 pt-0">
              <DrawerClose
                render={(props) => <a {...props} href="https://example.com/details" />}
                class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50"
              >
                Open the full page
              </DrawerClose>
            </div>
          </>
        )}
      </DrawerContent>
    </Drawer>
  )
}

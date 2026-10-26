import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverShortcut,
  PopoverTitle,
  PopoverTrigger,
} from "@ui-sdk/solid/popover"

export function Example() {
  return (
    <Popover>
      <PopoverTrigger
        shortcut="mod+u"
        class={(state) =>
          `inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-input/30 ${state.open ? "bg-muted text-foreground" : "bg-background dark:bg-transparent"}`
        }
        render={(props, state) => (
          <button {...props}>
            <svg
              class="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M10.268 21a2 2 0 0 0 3.464 0" />
              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
            </svg>
            {state.open ? "Hide updates" : "Show updates"}
            <PopoverShortcut class="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-muted px-1 font-sans text-xs font-medium text-muted-foreground">
              {(shortcut) => shortcut.text}
            </PopoverShortcut>
          </button>
        )}
      />
      <PopoverContent class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
        <div class="flex flex-col gap-1">
          <PopoverTitle class="text-base font-medium" render={(props) => <h3 {...props} />}>
            Updates
          </PopoverTitle>
          <PopoverDescription class="text-sm text-muted-foreground">Version 2.0 is out.</PopoverDescription>
        </div>
        <PopoverClose
          class="self-start rounded-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30"
          render={(props) => <a {...props} href="https://example.com/changelog" />}
        >
          Read the changelog
        </PopoverClose>
      </PopoverContent>
    </Popover>
  )
}

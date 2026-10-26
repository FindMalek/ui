import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverShortcut,
  PopoverTitle,
  PopoverTrigger,
} from "@ui-sdk/react/popover"
import { Bell } from "lucide-react"

export function Example() {
  return (
    <Popover>
      <PopoverTrigger
        shortcut="mod+u"
        className={(state) =>
          `inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-input/30 ${state.open ? "bg-muted text-foreground" : "bg-background dark:bg-transparent"}`
        }
        render={(props, state) => (
          <button {...props}>
            <Bell className="size-4" />
            {state.open ? "Hide updates" : "Show updates"}
            <PopoverShortcut className="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-muted px-1 font-sans text-xs font-medium text-muted-foreground">
              {(shortcut) => shortcut.text}
            </PopoverShortcut>
          </button>
        )}
      />
      <PopoverContent className="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
        <div className="flex flex-col gap-1">
          <PopoverTitle className="text-base font-medium" render={<h3 />}>
            Updates
          </PopoverTitle>
          <PopoverDescription className="text-sm text-muted-foreground">
            Version 2.0 is out.
          </PopoverDescription>
        </div>
        <PopoverClose
          className="self-start rounded-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30"
          render={<a href="https://example.com/changelog" />}
        >
          Read the changelog
        </PopoverClose>
      </PopoverContent>
    </Popover>
  )
}

"use client"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandItemIcon,
  CommandList,
} from "@ui-sdk/react/command"
import {
  Dialog,
  DialogBackdrop,
  DialogContent,
  DialogShortcut,
  DialogTitle,
  DialogTrigger,
} from "@ui-sdk/react/dialog"
import { Calculator, Calendar, CreditCard, Search, Settings, Smile, User } from "lucide-react"
import * as React from "react"

const commands = [
  { value: "calendar", label: "Calendar", icon: Calendar },
  { value: "emoji", label: "Search Emoji", icon: Smile },
  { value: "calculator", label: "Calculator", icon: Calculator, disabled: true },
  { value: "profile", label: "Profile", icon: User },
  { value: "billing", label: "Billing", icon: CreditCard },
  { value: "settings", label: "Settings", icon: Settings },
]

function Example() {
  const [open, setOpen] = React.useState(false)
  const [ran, setRan] = React.useState("")
  return (
    <div className="flex w-full max-w-sm flex-col items-start gap-3">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger
          shortcut="mod+k"
          className="inline-flex h-8 w-fit shrink-0 cursor-default items-center w-56 max-w-full justify-between gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 text-muted-foreground data-open:bg-muted data-open:text-foreground"
        >
          Search…
          <DialogShortcut className="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-muted px-1 font-sans text-xs leading-4 font-medium text-muted-foreground" />
        </DialogTrigger>
        <DialogBackdrop className="fixed inset-0 bg-black/30 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-sm data-starting-style:opacity-0 data-ending-style:opacity-0" />
        <DialogContent className="fixed top-[min(6rem,10dvh)] left-1/2 max-h-[80dvh] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 overflow-y-auto rounded-3xl border-0 bg-popover p-0 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 sm:max-w-md">
          <DialogTitle className="sr-only">Command palette</DialogTitle>
          <Command
            onAction={(value) => {
              setRan(value)
              setOpen(false)
            }}
            className="flex h-80 flex-col p-1"
          >
            <div className="shrink-0 p-1 pb-0">
              <div className="box-border flex h-8 items-center gap-2 rounded-2xl border border-transparent bg-input/50 px-2.5 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30">
                <Search aria-hidden="true" className="pointer-events-none block size-4 shrink-0 opacity-50" />
                <CommandInput
                  aria-label="Search commands"
                  placeholder="Type a command or search..."
                  className="m-0 h-full w-full min-w-0 border-0 bg-transparent p-0 text-base leading-6 text-inherit outline-none placeholder:text-muted-foreground md:text-sm md:leading-5"
                />
              </div>
            </div>
            <CommandEmpty className="m-0 shrink-0 py-6 text-center text-sm leading-5 text-muted-foreground empty:hidden">
              No results found.
            </CommandEmpty>
            <CommandList className="min-h-0 flex-1 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none">
              <CommandGroup className="overflow-hidden p-1 text-foreground">
                <CommandGroupLabel className="px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground">
                  Suggestions
                </CommandGroupLabel>
                {commands.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    disabled={item.disabled}
                    className="group relative flex min-h-7 cursor-default items-center gap-2 rounded-2xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
                  >
                    <CommandItemIcon className="flex shrink-0 text-muted-foreground group-data-highlighted:text-foreground">
                      <item.icon className="pointer-events-none block size-4 shrink-0" />
                    </CommandItemIcon>
                    {item.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
      <output className="block min-h-5 text-sm leading-5 text-muted-foreground">
        {ran ? `Ran ${ran}` : "Press ⌘K or Ctrl+K"}
      </output>
    </div>
  )
}

export { Example }

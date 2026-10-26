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
  CommandSeparator,
  CommandShortcut,
} from "@ui-sdk/react/command"
import { Calculator, Calendar, CreditCard, Search, Settings, Smile, User } from "lucide-react"

const suggestions = [
  { value: "calendar", label: "Calendar", icon: Calendar },
  { value: "emoji", label: "Search Emoji", icon: Smile },
  { value: "calculator", label: "Calculator", icon: Calculator, disabled: true },
]

const settings = [
  { value: "profile", label: "Profile", icon: User, shortcut: "mod+p" },
  { value: "billing", label: "Billing", icon: CreditCard, shortcut: "mod+b" },
  { value: "settings", label: "Settings", icon: Settings, shortcut: "mod+s" },
]

function Example() {
  return (
    <Command className="flex h-80 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5">
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
          {suggestions.map((item) => (
            <CommandItem
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              className="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              <CommandItemIcon className="flex shrink-0 text-muted-foreground group-data-highlighted:text-foreground">
                <item.icon className="pointer-events-none block size-4 shrink-0" />
              </CommandItemIcon>
              <span>{item.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator className="my-1 h-px bg-border/50" />
        <CommandGroup className="overflow-hidden p-1 text-foreground">
          <CommandGroupLabel className="px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground">
            Settings
          </CommandGroupLabel>
          {settings.map((item) => (
            <CommandItem
              key={item.value}
              value={item.value}
              shortcut={item.shortcut}
              className="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              <CommandItemIcon className="flex shrink-0 text-muted-foreground group-data-highlighted:text-foreground">
                <item.icon className="pointer-events-none block size-4 shrink-0" />
              </CommandItemIcon>
              <span>{item.label}</span>
              <CommandShortcut className="ms-auto shrink-0 text-xs leading-4 tracking-widest text-muted-foreground group-data-highlighted:text-foreground" />
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

export { Example }

"use client"

import {
  Command,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandItemIcon,
  CommandList,
  CommandShortcut,
} from "@ui-sdk/react/command"
import { CreditCard, Settings, User } from "lucide-react"
import * as React from "react"

const settings = [
  { value: "profile", label: "Profile", icon: User, shortcut: "mod+p" },
  { value: "billing", label: "Billing", icon: CreditCard, shortcut: "mod+b" },
  { value: "settings", label: "Settings", icon: Settings, shortcut: "mod+s" },
]

function Example() {
  const [ran, setRan] = React.useState("")
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Command
        onAction={setRan}
        className="flex h-80 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5"
      >
        <div className="shrink-0 p-1 pb-0">
          <CommandInput
            aria-label="Search settings"
            placeholder="Search settings..."
            className="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
          />
        </div>
        <CommandList className="min-h-0 flex-1 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none">
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
                <CommandShortcut className="ms-auto shrink-0 text-xs leading-4 tracking-widest text-muted-foreground group-data-highlighted:text-foreground">
                  {(state) => state.text}
                </CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
      <output className="block min-h-5 text-sm leading-5 text-muted-foreground">
        {ran ? `Ran ${ran}` : "Try a shortcut"}
      </output>
    </div>
  )
}

export { Example }

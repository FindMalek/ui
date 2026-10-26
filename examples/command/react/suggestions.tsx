"use client"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandItemText,
  CommandList,
  type CommandData,
} from "@ui-sdk/react/command"
import { Search } from "lucide-react"

const commands: CommandData = [
  "Home",
  "Inbox",
  "Documents",
  "Downloads",
  "Pictures",
  "Music",
  "New file",
  "New folder",
  "Copy",
  "Cut",
  "Paste",
  "Delete",
  "Zoom in",
  "Zoom out",
  "Notifications",
  "Help",
  "Keyboard shortcuts",
  "Settings",
]

const suggested: CommandData = [
  { type: "group", label: "Suggested", items: ["New file", "Settings", "Help"] },
]

function Example() {
  return (
    <Command
      items={commands}
      emptyItems={suggested}
      announcement={(change) => (change.type === "results" ? `${change.count} commands` : null)}
      className="flex h-80 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5"
    >
      <div className="shrink-0 p-1 pb-0">
        <div className="box-border flex h-8 items-center gap-2 rounded-2xl border border-transparent bg-input/50 px-2.5 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30">
          <Search aria-hidden="true" className="pointer-events-none block size-4 shrink-0 opacity-50" />
          <CommandInput
            aria-label="Search commands"
            placeholder="Search commands…"
            className="m-0 h-full w-full min-w-0 border-0 bg-transparent p-0 text-base leading-6 text-inherit outline-none placeholder:text-muted-foreground md:text-sm md:leading-5"
          />
        </div>
      </div>
      <CommandEmpty className="m-0 shrink-0 py-6 text-center text-sm leading-5 text-muted-foreground empty:hidden">
        No results found.
      </CommandEmpty>
      <CommandList className="min-h-0 flex-1 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none max-h-64 p-1">
        {(state) =>
          (state.items as (string | { label: string; items: string[] })[]).map((entry) =>
            typeof entry === "string" ? (
              <CommandItem
                key={entry}
                value={entry}
                className="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
              >
                <CommandItemText className="[&_mark]:bg-transparent [&_mark]:font-semibold [&_mark]:text-foreground" />
              </CommandItem>
            ) : (
              <CommandGroup key={entry.label}>
                <CommandGroupLabel className="px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground">
                  {entry.label}
                </CommandGroupLabel>
                {entry.items.map((command) => (
                  <CommandItem
                    key={command}
                    value={command}
                    className="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
                  >
                    <CommandItemText className="[&_mark]:bg-transparent [&_mark]:font-semibold [&_mark]:text-foreground" />
                  </CommandItem>
                ))}
              </CommandGroup>
            ),
          )
        }
      </CommandList>
    </Command>
  )
}

export { Example }

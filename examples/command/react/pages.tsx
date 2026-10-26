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
  CommandPage,
  createCommandController,
} from "@ui-sdk/react/command"
import { ArrowLeft, Moon, Users } from "lucide-react"
import * as React from "react"

const themes = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
]

const teams = [
  { value: "design", label: "Design" },
  { value: "engineering", label: "Engineering" },
  { value: "marketing", label: "Marketing" },
]

function Example() {
  const command = React.useState(() => createCommandController())[0]
  const [pages, setPages] = React.useState<string[]>([])
  return (
    <Command
      controller={command}
      pages={pages}
      onPagesChange={setPages}
      onAction={(value) => {
        if (value === "back") command.pop()
      }}
      className="flex h-80 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5"
    >
      <div className="flex min-h-7 shrink-0 flex-wrap items-center gap-1 px-2 pt-1">
        {pages.map((page) => (
          <span
            key={page}
            className="inline-flex h-5 items-center rounded-2xl bg-muted px-2 text-xs leading-4 font-medium text-muted-foreground capitalize"
          >
            {page}
          </span>
        ))}
      </div>
      <div className="shrink-0 p-1 pb-0">
        <CommandInput
          aria-label="Search commands"
          placeholder={pages.length ? "Search… (Backspace to go back)" : "What do you need?"}
          className="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
        />
      </div>
      <CommandEmpty className="m-0 shrink-0 py-6 text-center text-sm leading-5 text-muted-foreground empty:hidden">
        No results found.
      </CommandEmpty>
      <CommandList className="min-h-0 flex-1 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none p-1">
        <CommandPage>
          <CommandGroup>
            <CommandGroupLabel className="px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground">
              Workspace
            </CommandGroupLabel>
            <CommandItem
              value="theme"
              page="theme"
              className="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 in-data-has-icons:not-data-has-icon:ps-8"
            >
              <CommandItemIcon className="flex shrink-0 text-muted-foreground group-data-highlighted:text-foreground">
                <Moon className="pointer-events-none block size-4 shrink-0" />
              </CommandItemIcon>
              Change theme…
            </CommandItem>
            <CommandItem
              value="teams"
              page="teams"
              className="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 in-data-has-icons:not-data-has-icon:ps-8"
            >
              <CommandItemIcon className="flex shrink-0 text-muted-foreground group-data-highlighted:text-foreground">
                <Users className="pointer-events-none block size-4 shrink-0" />
              </CommandItemIcon>
              Switch team…
            </CommandItem>
          </CommandGroup>
        </CommandPage>
        <CommandPage value="theme">
          {themes.map((theme) => (
            <CommandItem
              key={theme.value}
              value={theme.value}
              className="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 in-data-has-icons:not-data-has-icon:ps-8"
            >
              {theme.label}
            </CommandItem>
          ))}
        </CommandPage>
        <CommandPage value="teams">
          {teams.map((team) => (
            <CommandItem
              key={team.value}
              value={team.value}
              className="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 in-data-has-icons:not-data-has-icon:ps-8"
            >
              {team.label}
            </CommandItem>
          ))}
        </CommandPage>
        {pages.length > 0 && (
          <CommandItem
            value="back"
            className="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 in-data-has-icons:not-data-has-icon:ps-8"
          >
            <CommandItemIcon
              mirror
              className="flex shrink-0 text-muted-foreground group-data-highlighted:text-foreground"
            >
              <ArrowLeft className="pointer-events-none block size-4 shrink-0" />
            </CommandItemIcon>
            Go back
          </CommandItem>
        )}
      </CommandList>
    </Command>
  )
}

export { Example }

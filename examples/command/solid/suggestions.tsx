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
} from "@ui-sdk/solid/command"
import { For } from "solid-js"

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
      class="flex h-80 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5"
    >
      <div class="shrink-0 p-1 pb-0">
        <div class="box-border flex h-8 items-center gap-2 rounded-2xl border border-transparent bg-input/50 px-2.5 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30">
          <svg
            class="pointer-events-none block size-4 shrink-0 opacity-50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
          <CommandInput
            aria-label="Search commands"
            placeholder="Search commands…"
            class="m-0 h-full w-full min-w-0 border-0 bg-transparent p-0 text-base leading-6 text-inherit outline-none placeholder:text-muted-foreground md:text-sm md:leading-5"
          />
        </div>
      </div>
      <CommandEmpty class="m-0 shrink-0 py-6 text-center text-sm leading-5 text-muted-foreground empty:hidden">
        No results found.
      </CommandEmpty>
      <CommandList class="min-h-0 flex-1 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none max-h-64 p-1">
        {(state) => (
          <For each={state.items as (string | { label: string; items: string[] })[]}>
            {(entry) =>
              typeof entry === "string" ? (
                <CommandItem
                  value={entry}
                  class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
                >
                  <CommandItemText class="[&_mark]:bg-transparent [&_mark]:font-semibold [&_mark]:text-foreground" />
                </CommandItem>
              ) : (
                <CommandGroup>
                  <CommandGroupLabel class="px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground">
                    {entry.label}
                  </CommandGroupLabel>
                  <For each={entry.items}>
                    {(command) => (
                      <CommandItem
                        value={command}
                        class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
                      >
                        <CommandItemText class="[&_mark]:bg-transparent [&_mark]:font-semibold [&_mark]:text-foreground" />
                      </CommandItem>
                    )}
                  </For>
                </CommandGroup>
              )
            }
          </For>
        )}
      </CommandList>
    </Command>
  )
}

export { Example }

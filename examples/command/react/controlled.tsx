import { Command, CommandInput, CommandItem, CommandList, CommandPage } from "@ui-sdk/react/command"
import * as React from "react"

const themes = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
]

export function Example() {
  const [value, setValue] = React.useState<string | null>("dark")
  const [query, setQuery] = React.useState("")
  const [pages, setPages] = React.useState(["theme"])
  const [reason, setReason] = React.useState("")
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Command
        value={value}
        onValueChange={(next, details) => {
          setValue(next)
          setReason(details.reason)
        }}
        query={query}
        onQueryChange={setQuery}
        pages={pages}
        onPagesChange={setPages}
        className="flex flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground shadow-sm ring-1 ring-foreground/5 dark:ring-foreground/10"
      >
        <div className="p-1 pb-0">
          <CommandInput
            aria-label="Search themes"
            placeholder="Search themes..."
            className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm"
          />
        </div>
        <CommandList className="p-1 outline-none">
          <CommandPage>
            <CommandItem
              value="theme"
              page="theme"
              className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              Change theme…
            </CommandItem>
          </CommandPage>
          <CommandPage value="theme">
            {themes.map((theme) => (
              <CommandItem
                key={theme.value}
                value={theme.value}
                className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
              >
                {theme.label}
              </CommandItem>
            ))}
          </CommandPage>
        </CommandList>
      </Command>
      <output className="text-sm text-muted-foreground">
        Highlighted {value ?? "nothing"} ({reason || "start"}), text “{query}”, pages [{pages.join(", ")}]
      </output>
      <Command
        defaultValue="system"
        defaultQuery="s"
        defaultPages={[]}
        debug
        className="flex flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground shadow-sm ring-1 ring-foreground/5 dark:ring-foreground/10"
      >
        <div className="p-1 pb-0">
          <CommandInput
            aria-label="Search themes, uncontrolled"
            className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm"
          />
        </div>
        <CommandList className="p-1 outline-none">
          {themes.map((theme) => (
            <CommandItem
              key={theme.value}
              value={theme.value}
              className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              {theme.label}
            </CommandItem>
          ))}
        </CommandList>
      </Command>
    </div>
  )
}

import * as React from "react"
import { fuzzyScore, matchRanges, matchSegments } from "@ui-sdk/core/text-match"
import { ChevronDownIcon } from "lucide-react"
import { CommandSearch, CommandSearchCommand, CommandSearchInput, CommandSearchList } from "./command-search"

type Mode = "contains" | "startsWith" | "fuzzy"

const commands = [
  "Git push",
  "Git pull",
  "Go to file",
  "Open settings",
  "Settings",
  "Résumé template",
  "Toggle sidebar",
]

function Highlight({ text, query, mode }: { text: string; query: string; mode: Mode }) {
  return matchSegments(text, matchRanges(text, query, mode)).map((segment, index) =>
    segment.match ? (
      <mark key={index} className="rounded-sm bg-amber-200 text-foreground dark:bg-amber-500/40">
        {segment.text}
      </mark>
    ) : (
      segment.text
    ),
  )
}

function matches(text: string, query: string, mode: Mode) {
  if (!query.trim()) return true
  return mode === "fuzzy" ? fuzzyScore(text, query) > 0 : matchRanges(text, query, mode).length > 0
}

function Example() {
  const [mode, setMode] = React.useState<Mode>("fuzzy")
  return (
    <CommandSearch className="flex w-64 flex-col gap-2 text-sm">
      {({ query }) => (
        <>
          <div className="flex gap-2">
            <CommandSearchInput
              aria-label="Search commands"
              placeholder="Search"
              className="h-8 min-w-0 flex-1 rounded-lg border border-border bg-transparent px-3 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            />
            <div className="relative w-32 shrink-0">
              <select
                aria-label="Match"
                value={mode}
                onChange={(event) => setMode(event.target.value as Mode)}
                className="h-8 w-full appearance-none rounded-lg border border-border bg-background ps-3 pe-8 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <option value="fuzzy">Fuzzy</option>
                <option value="contains">Contains</option>
                <option value="startsWith">Starts with</option>
              </select>
              <ChevronDownIcon
                className="pointer-events-none absolute end-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
          </div>
          <CommandSearchList className="flex min-h-44 flex-col gap-1">
            {commands
              .filter((command) => matches(command, query, mode))
              .map((command) => (
                <CommandSearchCommand key={command} className="px-1">
                  <Highlight text={command} query={query} mode={mode} />
                </CommandSearchCommand>
              ))}
          </CommandSearchList>
        </>
      )}
    </CommandSearch>
  )
}

export { Example }

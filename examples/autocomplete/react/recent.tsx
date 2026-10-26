"use client"

import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteItemText,
  AutocompleteList,
} from "@ui-sdk/react/autocomplete"

const recent = ["react hooks", "tailwind grid", "web components", "vue v-model"]
const topics = [...recent, "react server components", "tailwind colors", "vue router"]
const recentSearches = [{ type: "group" as const, label: "Recent searches", items: recent }]

function Example() {
  return (
    <Autocomplete
      items={topics}
      emptyItems={recentSearches}
      openOnFocus
      announcement={(change) =>
        change.type === "results" ? `${change.count} ${change.count === 1 ? "topic" : "topics"}` : null
      }
    >
      <AutocompleteInput
        type="search"
        aria-label="Search docs"
        placeholder="Search docs…"
        className="m-0 box-border h-8 w-72 max-w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
      />
      <AutocompleteContent className="max-h-[min(18rem,var(--available-height))] scroll-py-1 overflow-x-hidden overflow-y-auto box-border w-(--anchor-width) min-w-36 rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
        <AutocompleteEmpty className="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden">
          No topics found.
        </AutocompleteEmpty>
        <AutocompleteList>
          {(state) =>
            (state.items as (string | (typeof recentSearches)[number])[]).map((entry) =>
              typeof entry === "string" ? (
                <AutocompleteItem
                  key={entry}
                  value={entry}
                  className="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2"
                >
                  <AutocompleteItemText className="[&_mark]:bg-transparent [&_mark]:font-semibold [&_mark]:text-foreground" />
                </AutocompleteItem>
              ) : (
                <AutocompleteGroup key={entry.label}>
                  <AutocompleteGroupLabel className="px-2 py-1 text-xs leading-4 text-muted-foreground">
                    {entry.label}
                  </AutocompleteGroupLabel>
                  {entry.items.map((topic) => (
                    <AutocompleteItem
                      key={topic}
                      value={topic}
                      className="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2"
                    >
                      <AutocompleteItemText className="[&_mark]:bg-transparent [&_mark]:font-semibold [&_mark]:text-foreground" />
                    </AutocompleteItem>
                  ))}
                </AutocompleteGroup>
              ),
            )
          }
        </AutocompleteList>
      </AutocompleteContent>
    </Autocomplete>
  )
}

export { Example }

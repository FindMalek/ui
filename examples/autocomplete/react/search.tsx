"use client"

import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@ui-sdk/react/autocomplete"
import * as React from "react"

const recent = ["react hooks", "tailwind grid", "web components", "vue v-model"]

function Example() {
  const [searched, setSearched] = React.useState("")
  return (
    <form
      role="search"
      className="flex w-72 max-w-full flex-col gap-4"
      onSubmit={(event) => event.preventDefault()}
    >
      <Autocomplete submitOnSelect name="q" onSubmit={(value) => setSearched(value)}>
        <AutocompleteInput
          type="search"
          aria-label="Search"
          placeholder="Search…"
          className="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
        />
        <AutocompleteContent className="max-h-[min(18rem,var(--available-height))] scroll-py-1 overflow-x-hidden overflow-y-auto box-border w-(--anchor-width) min-w-36 rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
          <AutocompleteList>
            {recent.map((search) => (
              <AutocompleteItem
                key={search}
                value={search}
                className="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2"
              >
                {search}
              </AutocompleteItem>
            ))}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
      <output className="block min-h-10 text-sm leading-5 break-all text-muted-foreground">
        {searched ? `Searched “${searched}”` : "Press Enter to search"}
      </output>
    </form>
  )
}

export { Example }

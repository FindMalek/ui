"use client"

import { useAsyncOptions } from "@ui-sdk/react/async-options"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxList,
  ComboboxStatus,
  ComboboxTrigger,
} from "@ui-sdk/react/combobox"
import { Check, ChevronDown } from "lucide-react"

const movieTitles = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "Pulp Fiction",
  "Schindler's List",
  "The Lord of the Rings",
  "Fight Club",
  "Forrest Gump",
  "Inception",
  "The Matrix",
  "Goodfellas",
  "Interstellar",
  "Parasite",
  "Spirited Away",
  "Whiplash",
  "The Prestige",
  "The Departed",
  "Gladiator",
  "Alien",
  "Casablanca",
  "Amélie",
  "Arrival",
]

function searchMoviePages(query: string, { signal, page }: { signal: AbortSignal; page: number }) {
  return new Promise<{ items: { value: string; label: string }[]; hasMore: boolean }>((resolve, reject) => {
    const timer = setTimeout(() => {
      const needle = query.trim().toLowerCase()
      const found = movieTitles
        .filter((title) => title.toLowerCase().includes(needle))
        .map((title) => ({ value: title.toLowerCase().replace(/\W+/g, "-"), label: title }))
      resolve({ items: found.slice(page * 5, page * 5 + 5), hasMore: found.length > page * 5 + 5 })
    }, 500)
    signal.addEventListener("abort", () => {
      clearTimeout(timer)
      reject(signal.reason)
    })
  })
}

function Example() {
  const movies = useAsyncOptions(searchMoviePages, { immediate: true })

  return (
    <Combobox
      items={movies.items}
      filter={false}
      status={movies.status}
      onQueryChange={(query) => movies.setQuery(query)}
      onLoadMore={movies.loadMore}
    >
      <div className="flex w-72 max-w-full flex-col gap-2">
        <ComboboxLabel className="text-sm leading-none font-medium">Movie</ComboboxLabel>
        <div className="relative">
          <ComboboxInput
            placeholder="Search movies"
            className="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-8 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
          />
          <ComboboxTrigger
            aria-label="Show movies"
            className="group inline-flex size-6 cursor-default items-center justify-center rounded-xl border border-transparent bg-transparent p-0 text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50 absolute end-1 top-1/2 -translate-y-1/2"
          >
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none block size-4 shrink-0 transition-transform group-data-open:rotate-180"
            />
          </ComboboxTrigger>
        </div>
      </div>
      <ComboboxContent className="flex max-h-[min(12rem,var(--available-height))] w-(--anchor-width) flex-col overflow-hidden box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
        <ComboboxEmpty className="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden">
          {(state) => (state.empty && !state.loading ? "No movies found." : null)}
        </ComboboxEmpty>
        <ComboboxList className="min-h-0 scroll-py-1 overflow-y-auto p-1">
          {(state) =>
            (state.items as { value: string; label: string; disabled?: boolean }[]).map((item) => (
              <ComboboxItem
                key={item.value}
                value={item.value}
                label={item.label}
                disabled={item.disabled}
                className="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2"
              >
                {item.label}
                <ComboboxItemIndicator className="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
                  <Check aria-hidden="true" className="pointer-events-none block size-4 shrink-0" />
                </ComboboxItemIndicator>
              </ComboboxItem>
            ))
          }
        </ComboboxList>
        <ComboboxStatus className="min-h-7 border-t border-border px-3 py-1.5 text-xs leading-4 text-muted-foreground empty:hidden">
          {(state) =>
            state.loading ? "Loading more…" : movies.hasMore ? `${state.count} loaded` : `All ${state.count}`
          }
        </ComboboxStatus>
      </ComboboxContent>
    </Combobox>
  )
}

export { Example }

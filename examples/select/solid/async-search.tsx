import { createAsyncOptions } from "@ui-sdk/core/async-options"
import {
  Select,
  SelectContent,
  SelectEmpty,
  SelectInput,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectList,
  SelectStatus,
  SelectTrigger,
  SelectValue,
} from "@ui-sdk/solid/select"
import { For, createSignal, onCleanup } from "solid-js"

const countryList = [
  { value: "ar", label: "Argentina" },
  { value: "au", label: "Australia" },
  { value: "at", label: "Austria" },
  { value: "be", label: "Belgium" },
  { value: "br", label: "Brazil" },
  { value: "ca", label: "Canada" },
  { value: "cl", label: "Chile" },
  { value: "cn", label: "China" },
  { value: "dk", label: "Denmark" },
  { value: "fi", label: "Finland" },
  { value: "fr", label: "France" },
  { value: "de", label: "Germany" },
  { value: "gr", label: "Greece" },
  { value: "in", label: "India" },
  { value: "ie", label: "Ireland" },
  { value: "it", label: "Italy" },
  { value: "jp", label: "Japan" },
  { value: "mx", label: "Mexico" },
  { value: "nl", label: "Netherlands" },
  { value: "no", label: "Norway" },
  { value: "pt", label: "Portugal" },
  { value: "es", label: "Spain" },
  { value: "se", label: "Sweden" },
  { value: "ch", label: "Switzerland" },
]

function searchCountries(query: string, { signal, page }: { signal: AbortSignal; page: number }) {
  return new Promise<{ items: typeof countryList; hasMore: boolean }>((resolve, reject) => {
    const timer = setTimeout(() => {
      const needle = query.trim().toLowerCase()
      const found = countryList.filter((country) => country.label.toLowerCase().includes(needle))
      resolve({ items: found.slice(page * 6, page * 6 + 6), hasMore: found.length > page * 6 + 6 })
    }, 400)
    signal.addEventListener("abort", () => {
      clearTimeout(timer)
      reject(signal.reason)
    })
  })
}

function Example() {
  const [query, setQuery] = createSignal("")
  const results = createAsyncOptions(searchCountries, { immediate: true })
  const [loaded, setLoaded] = createSignal(results.getState())
  onCleanup(results.subscribe(() => setLoaded(results.getState())))
  onCleanup(() => results.cancel())

  return (
    <Select
      items={loaded().items}
      filter={false}
      status={loaded().status}
      query={query()}
      onQueryChange={(next) => {
        setQuery(next)
        results.setQuery(next)
      }}
      onLoadMore={results.loadMore}
      placeholder="Select a country"
    >
      <div class="flex w-64 max-w-full flex-col gap-2">
        <SelectLabel class="text-sm leading-none font-medium">Country</SelectLabel>
        <SelectTrigger class="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent">
          <SelectValue class="min-w-0 flex-1 truncate text-start" />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            class="pointer-events-none block size-4 shrink-0 text-muted-foreground"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </SelectTrigger>
      </div>
      <SelectContent class="flex max-h-[min(16rem,var(--available-height))] w-(--anchor-width) flex-col overflow-hidden box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none">
        <SelectInput
          aria-label="Search countries"
          placeholder="Search countries…"
          class="m-1 box-border h-8 min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
        />
        <SelectEmpty class="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden">
          {(state) => (state.empty && !state.loading ? `No countries match “${state.query}”.` : null)}
        </SelectEmpty>
        <SelectList class="min-h-0 overflow-y-auto p-1 aria-busy:opacity-60">
          {(state) => (
            <For each={state.items as { value: string; label: string; disabled?: boolean }[]}>
              {(item) => (
                <SelectItem
                  value={item.value}
                  label={item.label}
                  disabled={item.disabled}
                  class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
                >
                  {item.label}
                  <SelectItemIndicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                      class="pointer-events-none block size-4 shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </SelectItemIndicator>
                </SelectItem>
              )}
            </For>
          )}
        </SelectList>
        <SelectStatus class="min-h-7 border-t border-border px-3 py-1.5 text-xs leading-4 text-muted-foreground empty:hidden">
          {(state) =>
            state.loading
              ? "Loading…"
              : state.status === "error"
                ? "Couldn't load countries."
                : `${state.count} shown`
          }
        </SelectStatus>
      </SelectContent>
    </Select>
  )
}

export { Example }

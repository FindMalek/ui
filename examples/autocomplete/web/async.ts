import { createAsyncOptions } from "@ui-sdk/core/async-options"
import "@ui-sdk/web/autocomplete"

function searchCities(query: string, { signal }: { signal: AbortSignal }) {
  const cities = [
    "Amsterdam",
    "Athens",
    "Barcelona",
    "Berlin",
    "Boston",
    "Brussels",
    "Buenos Aires",
    "Cairo",
    "Chicago",
    "Copenhagen",
    "Dublin",
    "Lisbon",
    "London",
    "Los Angeles",
    "Madrid",
    "Paris",
    "Prague",
    "Rome",
    "Seoul",
    "Tokyo",
  ]
  return new Promise<string[]>((resolve, reject) => {
    const timer = setTimeout(() => {
      const needle = query.trim().toLowerCase()
      resolve(cities.filter((city) => city.toLowerCase().startsWith(needle)))
    }, 300)
    signal.addEventListener("abort", () => {
      clearTimeout(timer)
      reject(new DOMException("Aborted", "AbortError"))
    })
  })
}

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-autocomplete filter="false">
      <div class="flex w-64 max-w-full flex-col gap-2">
        <ui-autocomplete-label class="text-sm leading-none font-medium">City</ui-autocomplete-label>
        <ui-autocomplete-input>
          <input placeholder="e.g. Paris" class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5" />
        </ui-autocomplete-input>
      </div>
      <ui-autocomplete-content class="max-h-[min(18rem,var(--available-height))] scroll-py-1 overflow-x-hidden overflow-y-auto box-border w-(--anchor-width) min-w-36 rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
        <ui-autocomplete-status class="min-h-7 px-2 py-1.5 text-xs leading-4 text-muted-foreground empty:hidden"></ui-autocomplete-status>
        <ui-autocomplete-empty class="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden data-loading:hidden">No cities start with “<span></span>”.</ui-autocomplete-empty>
        <ui-autocomplete-list class="transition-opacity aria-busy:opacity-60"></ui-autocomplete-list>
      </ui-autocomplete-content>
      <template>
        <ui-autocomplete-item class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2">
        </ui-autocomplete-item>
      </template>
    </ui-autocomplete>
  `
  const autocomplete = root.querySelector("ui-autocomplete")!
  const status = root.querySelector("ui-autocomplete-status")!
  const query = root.querySelector("ui-autocomplete-empty span")!
  const results = createAsyncOptions(searchCities, { debounce: 200 })
  const update = () => {
    const { items, status: loading } = results.getState()
    autocomplete.items = items
    autocomplete.setAttribute("status", loading)
    status.textContent =
      loading === "loading"
        ? "Searching…"
        : items.length
          ? `${items.length} ${items.length === 1 ? "city" : "cities"}`
          : ""
  }
  results.subscribe(update)
  update()
  autocomplete.addEventListener("valuechange", (event) => {
    query.textContent = event.detail.value
    results.setQuery(event.detail.value)
  })
  autocomplete.addEventListener("loadmore", () => results.loadMore())
}

export { mount }

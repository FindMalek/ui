import { createAsyncOptions } from "@ui-sdk/core/async-options"
import "@ui-sdk/web/combobox"
import { Check, ChevronDown, createElement } from "lucide"

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

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-combobox filter="false">
      <div class="flex w-72 max-w-full flex-col gap-2">
        <ui-combobox-label class="text-sm leading-none font-medium">Movie</ui-combobox-label>
        <div class="relative">
          <ui-combobox-input>
            <input placeholder="Search movies" class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-8 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5" />
          </ui-combobox-input>
          <ui-combobox-trigger>
            <button aria-label="Show movies" class="group inline-flex size-6 cursor-default items-center justify-center rounded-xl border border-transparent bg-transparent p-0 text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50 absolute end-1 top-1/2 -translate-y-1/2">${createElement(ChevronDown, { class: "pointer-events-none block size-4 shrink-0 transition-transform group-data-open:rotate-180", "aria-hidden": "true" }).outerHTML}</button>
          </ui-combobox-trigger>
        </div>
      </div>
      <ui-combobox-content class="flex max-h-[min(12rem,var(--available-height))] w-(--anchor-width) flex-col overflow-hidden box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
        <ui-combobox-empty class="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden data-loading:hidden">No movies found.</ui-combobox-empty>
        <ui-combobox-list class="min-h-0 scroll-py-1 overflow-y-auto p-1"></ui-combobox-list>
        <ui-combobox-status class="min-h-7 border-t border-border px-3 py-1.5 text-xs leading-4 text-muted-foreground empty:hidden"></ui-combobox-status>
      </ui-combobox-content>
      <template>
        <ui-combobox-item class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2">
          <ui-combobox-item-indicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">${createElement(Check, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-combobox-item-indicator>
        </ui-combobox-item>
      </template>
    </ui-combobox>
  `
  const combobox = root.querySelector("ui-combobox")!
  const status = root.querySelector("ui-combobox-status")!
  const movies = createAsyncOptions(searchMoviePages, { immediate: true })
  const update = () => {
    const { items, status: loading, hasMore } = movies.getState()
    combobox.items = items
    combobox.setAttribute("status", loading)
    status.textContent =
      loading === "loading" ? "Loading more…" : hasMore ? `${items.length} loaded` : `All ${items.length}`
  }
  movies.subscribe(update)
  update()
  combobox.addEventListener("querychange", (event) => movies.setQuery(event.detail.value))
  combobox.addEventListener("loadmore", () => movies.loadMore())
}

export { mount }

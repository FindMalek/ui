import { createAsyncOptions } from "@ui-sdk/core/async-options"
import "@ui-sdk/web/select"
import { Check, ChevronDown, createElement } from "lucide"

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

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-select filter="false" placeholder="Select a country">
      <div class="flex w-64 max-w-full flex-col gap-2">
        <ui-select-label class="text-sm leading-none font-medium">Country</ui-select-label>
        <ui-select-trigger>
          <button class="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent">
            <ui-select-value class="min-w-0 flex-1 truncate text-start"></ui-select-value>
            ${createElement(ChevronDown, { class: "pointer-events-none block size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-select-trigger>
      </div>
      <ui-select-content class="flex max-h-[min(16rem,var(--available-height))] w-(--anchor-width) flex-col overflow-hidden box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none">
        <ui-select-input>
          <input aria-label="Search countries" placeholder="Search countries…" class="m-1 box-border h-8 min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5" />
        </ui-select-input>
        <ui-select-empty class="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden data-loading:hidden">No countries match “<span></span>”.</ui-select-empty>
        <ui-select-list class="min-h-0 overflow-y-auto p-1 aria-busy:opacity-60"></ui-select-list>
        <ui-select-status class="min-h-7 border-t border-border px-3 py-1.5 text-xs leading-4 text-muted-foreground empty:hidden"></ui-select-status>
      </ui-select-content>
      <template>
        <ui-select-item class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
          <ui-select-item-indicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">${createElement(Check, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-select-item-indicator>
        </ui-select-item>
      </template>
    </ui-select>
  `
  const select = root.querySelector("ui-select")!
  const status = root.querySelector("ui-select-status")!
  const query = root.querySelector("ui-select-empty span")!
  const results = createAsyncOptions(searchCountries, { immediate: true })
  const update = () => {
    const { items, status: loading } = results.getState()
    select.items = items
    select.setAttribute("status", loading)
    status.textContent =
      loading === "loading"
        ? "Loading…"
        : loading === "error"
          ? "Couldn't load countries."
          : `${items.length} shown`
  }
  results.subscribe(update)
  update()
  select.addEventListener("querychange", (event) => {
    query.textContent = event.detail.value
    results.setQuery(event.detail.value)
  })
  select.addEventListener("loadmore", () => results.loadMore())
}

export { mount }

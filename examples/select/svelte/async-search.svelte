<script lang="ts">
  import { Check, ChevronDown } from "@lucide/svelte"
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
  } from "@ui-sdk/svelte/select"
  import { useAsyncOptions } from "@ui-sdk/svelte/async-options"

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

  let query = $state("")
  const countries = useAsyncOptions(searchCountries, { immediate: true })
</script>

<Select
  bind:query
  items={countries.state.items}
  filter={false}
  status={countries.state.status}
  placeholder="Select a country"
  onQueryChange={(next) => countries.setQuery(next)}
  onLoadMore={countries.loadMore}
>
  <div class="flex w-64 max-w-full flex-col gap-2">
    <SelectLabel class="text-sm leading-none font-medium">Country</SelectLabel>
    <SelectTrigger
      class="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent"
    >
      <SelectValue class="min-w-0 flex-1 truncate text-start" />
      <ChevronDown class="pointer-events-none block size-4 shrink-0 text-muted-foreground" />
    </SelectTrigger>
  </div>
  <SelectContent
    class="flex max-h-[min(16rem,var(--available-height))] w-(--anchor-width) flex-col overflow-hidden box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none"
  >
    <SelectInput
      aria-label="Search countries"
      placeholder="Search countries…"
      class="m-1 box-border h-8 min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
    />
    <SelectEmpty class="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden">
      {#snippet children(state)}
        {#if state.empty && !state.loading}No countries match “{state.query}”.{/if}
      {/snippet}
    </SelectEmpty>
    <SelectList class="min-h-0 overflow-y-auto p-1 aria-busy:opacity-60">
      {#snippet children(state)}
        {#each (state.items as { value: string; label: string; disabled?: boolean }[]) as item (item.value)}
          <SelectItem value={item.value} label={item.label} disabled={item.disabled} class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
            {item.label}
            <SelectItemIndicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
              <Check class="pointer-events-none block size-4 shrink-0" />
            </SelectItemIndicator>
          </SelectItem>
        {/each}
      {/snippet}
    </SelectList>
    <SelectStatus class="min-h-7 border-t border-border px-3 py-1.5 text-xs leading-4 text-muted-foreground empty:hidden">
      {#snippet children(state)}
        {state.loading ? "Loading…" : state.status === "error" ? "Couldn't load countries." : `${state.count} shown`}
      {/snippet}
    </SelectStatus>
  </SelectContent>
</Select>

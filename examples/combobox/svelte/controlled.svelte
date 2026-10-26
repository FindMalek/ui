<script lang="ts">
  import { Check, ChevronDown } from "@lucide/svelte"
  import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxItemIndicator,
    ComboboxLabel,
    ComboboxList,
    ComboboxTrigger,
  } from "@ui-sdk/svelte/combobox"

  const countries = [
    { value: "ar", label: "Argentina" },
    { value: "au", label: "Australia" },
    { value: "at", label: "Austria" },
    { value: "be", label: "Belgium" },
    { value: "br", label: "Brazil" },
    { value: "ca", label: "Canada" },
    { value: "cl", label: "Chile" },
    { value: "dk", label: "Denmark" },
    { value: "fi", label: "Finland" },
    { value: "fr", label: "France" },
    { value: "de", label: "Germany" },
    { value: "gr", label: "Greece" },
    { value: "jp", label: "Japan" },
    { value: "nl", label: "Netherlands" },
    { value: "es", label: "Spain" },
    { value: "se", label: "Sweden" },
    { value: "ch", label: "Switzerland" },
  ]

  const countryLabel = (value: string) => countries.find((country) => country.value === value)?.label ?? value

  let value = $state<string | null>("fr")
  let query = $state("France")
  let open = $state(false)
  let log = $state("")
</script>

<div class="flex w-64 flex-col gap-3">
  <Combobox
    bind:value
    bind:query
    bind:open
    itemToLabel={countryLabel}
    debug
    onValueChange={(next, details) => (log = `value: ${next} (${details.reason})`)}
    onQueryChange={(next, details) => (log = `query: “${next}” (${details.reason})`)}
    onOpenChange={(next, details) => (log = `open: ${next} (${details.reason})`)}
  >
    <div class="flex flex-col gap-2">
      <ComboboxLabel class="text-sm leading-none font-medium">Country</ComboboxLabel>
      <div class="relative">
        <ComboboxInput
          placeholder="Search countries"
          class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 py-1 ps-2.5 pe-8 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm"
        />
        <ComboboxTrigger
          aria-label="Show countries"
          class="group absolute end-1 top-1/2 inline-flex size-6 -translate-y-1/2 items-center justify-center rounded-xl text-muted-foreground outline-none transition-[color,background-color] hover:bg-muted hover:text-foreground data-open:bg-muted data-disabled:pointer-events-none dark:hover:bg-muted/50"
        >
          <ChevronDown class="size-4 transition-transform group-data-open:rotate-180" />
        </ComboboxTrigger>
      </div>
    </div>
    <ComboboxContent
      class="max-h-[min(18rem,var(--available-height))] w-(--anchor-width) min-w-36 origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
    >
      <ComboboxEmpty class="py-2 text-center text-sm text-muted-foreground empty:hidden">No countries found.</ComboboxEmpty>
      <ComboboxList>
        {#each countries as country (country.value)}
          <ComboboxItem
            value={country.value}
            label={country.label}
            class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm ring-ring/30 outline-none select-none ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 in-data-[modality=keyboard]:data-highlighted:ring-2"
          >
            {country.label}
            <ComboboxItemIndicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
              <Check class="size-4" />
            </ComboboxItemIndicator>
          </ComboboxItem>
        {/each}
      </ComboboxList>
    </ComboboxContent>
  </Combobox>
  <div class="flex gap-2">
    <button
      type="button"
      class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30"
      onclick={() => (value = "jp")}
    >
      Japan
    </button>
    <button
      type="button"
      class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30"
      onclick={() => (open = true)}
    >
      Open
    </button>
  </div>
  <output class="text-sm text-muted-foreground">{log || "Change something"}</output>
</div>

<script lang="ts">
  import { Check, ChevronDown } from "@lucide/svelte"
  import {
    Combobox,
    ComboboxContent,
    ComboboxGroup,
    ComboboxGroupLabel,
    ComboboxInput,
    ComboboxItem,
    ComboboxItemIndicator,
    ComboboxLabel,
    ComboboxList,
    ComboboxSeparator,
    ComboboxTrigger,
  } from "@ui-sdk/svelte/combobox"

  const fruits: { value: string; label: string; keywords?: string[]; disabled?: boolean }[] = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry", keywords: ["red"] },
  ]

  const citrus: { value: string; label: string; keywords?: string[]; disabled?: boolean }[] = [
    { value: "lemon", label: "Lemon" },
    { value: "lime", label: "Lime" },
    { value: "orange", label: "Orange", disabled: true },
  ]
</script>



<Combobox>
  <div class="flex w-64 max-w-full flex-col gap-2">
    <ComboboxLabel class="text-sm leading-none font-medium">Fruit</ComboboxLabel>
    <div class="relative">
      <ComboboxInput
        placeholder="Search fruits"
        class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-8 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
      />
      <ComboboxTrigger
        aria-label="Show fruits"
        class="group inline-flex size-6 cursor-default items-center justify-center rounded-xl border border-transparent bg-transparent p-0 text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50 absolute end-1 top-1/2 -translate-y-1/2"
      >
        <ChevronDown aria-hidden="true" class="pointer-events-none block size-4 shrink-0 transition-transform group-data-open:rotate-180" />
      </ComboboxTrigger>
    </div>
  </div>
  <ComboboxContent
    class="max-h-[min(18rem,var(--available-height))] scroll-py-1 overflow-x-hidden overflow-y-auto box-border w-(--anchor-width) min-w-36 rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0"
  >
    <ComboboxList class="flex flex-col">
      {#each fruits as fruit (fruit.value)}
          <ComboboxItem
    value={fruit.value}
    label={fruit.label}
    keywords={fruit.keywords}
    disabled={fruit.disabled}
    class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2"
  >
    {fruit.label}
    <ComboboxItemIndicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
      <Check aria-hidden="true" class="pointer-events-none block size-4 shrink-0" />
    </ComboboxItemIndicator>
  </ComboboxItem>
      {/each}
      <ComboboxSeparator class="pointer-events-none -mx-1 my-1 h-px bg-border" />
      <ComboboxGroup class="flex flex-col">
        <ComboboxGroupLabel class="px-2 py-1 text-xs leading-4 text-muted-foreground">Citrus</ComboboxGroupLabel>
        {#each citrus as fruit (fruit.value)}
            <ComboboxItem
    value={fruit.value}
    label={fruit.label}
    keywords={fruit.keywords}
    disabled={fruit.disabled}
    class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2"
  >
    {fruit.label}
    <ComboboxItemIndicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
      <Check aria-hidden="true" class="pointer-events-none block size-4 shrink-0" />
    </ComboboxItemIndicator>
  </ComboboxItem>
        {/each}
      </ComboboxGroup>
    </ComboboxList>
  </ComboboxContent>
</Combobox>

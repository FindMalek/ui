<script lang="ts">
  import { Check, ChevronDown } from "@lucide/svelte"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectItemIndicator,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@ui-sdk/svelte/select"

  const fruits = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "blueberry", label: "Blueberry" },
    { value: "grapes", label: "Grapes" },
    { value: "pineapple", label: "Pineapple" },
  ]

  let value = $state<string[]>(["apple", "grapes"])
</script>

<div class="flex w-64 max-w-full flex-col gap-3">
  <Select bind:value multiple placeholder="Select fruits">
    <div class="flex flex-col gap-2">
      <SelectLabel class="text-sm leading-none font-medium">Fruits</SelectLabel>
      <SelectTrigger
        class="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent"
      >
        <SelectValue class="min-w-0 flex-1 truncate text-start">
          {#snippet children(state)}
            {state.placeholder
              ? "Select fruits"
              : state.labels.length > 2
                ? `${state.labels[0]} and ${state.labels.length - 1} more`
                : state.label}
          {/snippet}
        </SelectValue>
        <ChevronDown class="pointer-events-none block size-4 shrink-0 text-muted-foreground" />
      </SelectTrigger>
    </div>
    <SelectContent
      class="max-h-(--available-height) scroll-py-1 overflow-x-hidden overflow-y-auto box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none"
    >
      {#each fruits as fruit (fruit.value)}
        <SelectItem
          value={fruit.value}
          class="group relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          <span
            class="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 group-data-selected:border-primary group-data-selected:bg-primary group-data-selected:text-primary-foreground"
          >
            <SelectItemIndicator>
              <Check class="pointer-events-none block size-3.5 shrink-0" />
            </SelectItemIndicator>
          </span>
          {fruit.label}
        </SelectItem>
      {/each}
    </SelectContent>
  </Select>
  <output class="block min-h-10 text-sm leading-5 break-all text-muted-foreground">Value: {JSON.stringify(value)}</output>
</div>

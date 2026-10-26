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
</script>

<Select placeholder="Select a fruit" presentation="sheet">
  <div class="flex w-56 max-w-full flex-col gap-2">
    <SelectLabel class="text-sm leading-none font-medium">Fruit</SelectLabel>
    <SelectTrigger
      class="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent"
    >
      <SelectValue class="min-w-0 flex-1 truncate text-start" />
      <ChevronDown class="pointer-events-none block size-4 shrink-0 text-muted-foreground" />
    </SelectTrigger>
  </div>
  <SelectContent
    class="group data-[presentation=popover]:max-h-(--available-height) data-[presentation=popover]:scroll-py-1 data-[presentation=popover]:overflow-x-hidden data-[presentation=popover]:overflow-y-auto data-[presentation=popover]:box-border data-[presentation=popover]:min-w-(--anchor-width) data-[presentation=popover]:rounded-2xl data-[presentation=popover]:border-0 data-[presentation=popover]:bg-popover data-[presentation=popover]:p-1 data-[presentation=popover]:text-sm data-[presentation=popover]:leading-5 data-[presentation=popover]:text-popover-foreground data-[presentation=popover]:shadow-lg data-[presentation=popover]:ring-1 data-[presentation=popover]:ring-foreground/5 data-[presentation=popover]:outline-none data-[presentation=sheet]:box-border data-[presentation=sheet]:max-h-[70dvh] data-[presentation=sheet]:overflow-y-auto data-[presentation=sheet]:rounded-t-3xl data-[presentation=sheet]:border-0 data-[presentation=sheet]:bg-popover data-[presentation=sheet]:px-2 data-[presentation=sheet]:pt-2 data-[presentation=sheet]:pb-[max(env(safe-area-inset-bottom),0.75rem)] data-[presentation=sheet]:text-base data-[presentation=sheet]:leading-6 data-[presentation=sheet]:text-popover-foreground data-[presentation=sheet]:ring-1 data-[presentation=sheet]:ring-foreground/5 data-[presentation=sheet]:outline-none data-[presentation=sheet]:[--sheet-backdrop:rgb(0_0_0/0.3)]"
  >
    {#each fruits as fruit (fruit.value)}
      <SelectItem
        value={fruit.value}
        class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 group-data-[presentation=sheet]:py-3"
      >
        {fruit.label}
        <SelectItemIndicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
          <Check class="pointer-events-none block size-4 shrink-0" />
        </SelectItemIndicator>
      </SelectItem>
    {/each}
  </SelectContent>
</Select>

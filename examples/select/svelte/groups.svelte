<script lang="ts">
  import { Check, ChevronDown } from "@lucide/svelte"
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectGroupLabel,
    SelectItem,
    SelectItemIndicator,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
  } from "@ui-sdk/svelte/select"

  const produce = [
    {
      label: "Fruits",
      items: [
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
        { value: "orange", label: "Orange" },
      ],
    },
    {
      label: "Vegetables",
      items: [
        { value: "carrot", label: "Carrot" },
        { value: "broccoli", label: "Broccoli" },
        { value: "spinach", label: "Spinach" },
      ],
    },
  ]
</script>

<Select placeholder="Select produce">
  <SelectTrigger
    aria-label="Produce"
    class="flex h-8 w-56 max-w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent"
  >
    <SelectValue class="min-w-0 flex-1 truncate text-start" />
    <ChevronDown class="pointer-events-none block size-4 shrink-0 text-muted-foreground" />
  </SelectTrigger>
  <SelectContent
    class="max-h-(--available-height) scroll-py-1 overflow-x-hidden overflow-y-auto box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none"
  >
    {#each produce as group, index (group.label)}
      {#if index > 0}
        <SelectSeparator class="pointer-events-none -mx-1 my-1 h-px bg-border" />
      {/if}
      <SelectGroup>
        <SelectGroupLabel class="px-2 py-1 text-xs leading-4 text-muted-foreground">
          {group.label}
        </SelectGroupLabel>
        {#each group.items as item (item.value)}
          <SelectItem
            value={item.value}
            class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            {item.label}
            <SelectItemIndicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
              <Check class="pointer-events-none block size-4 shrink-0" />
            </SelectItemIndicator>
          </SelectItem>
        {/each}
      </SelectGroup>
    {/each}
  </SelectContent>
</Select>

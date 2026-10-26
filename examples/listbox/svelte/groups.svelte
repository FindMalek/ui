<script lang="ts">
  import { Check } from "@lucide/svelte"
  import {
    Listbox,
    ListboxGroup,
    ListboxGroupLabel,
    ListboxItem,
    ListboxItemIndicator,
    ListboxSeparator,
  } from "@ui-sdk/svelte/listbox"

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

<Listbox
  multiple
  defaultValue={["banana"]}
  aria-label="Produce"
  class="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none"
>
  {#each produce as group, index (group.label)}
    {#if index > 0}
      <ListboxSeparator class="-mx-1 my-1 h-px bg-border/50" />
    {/if}
    <ListboxGroup class="flex flex-col gap-0.5">
      <ListboxGroupLabel class="px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground">{group.label}</ListboxGroupLabel>
      {#each group.items as item (item.value)}
        <ListboxItem
          value={item.value}
          class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
        >
          {item.label}
          <ListboxItemIndicator
            class="pointer-events-none absolute end-2 flex size-4 items-center justify-center"
          >
            <Check aria-hidden="true" class="pointer-events-none block size-4 shrink-0" />
          </ListboxItemIndicator>
        </ListboxItem>
      {/each}
    </ListboxGroup>
  {/each}
</Listbox>

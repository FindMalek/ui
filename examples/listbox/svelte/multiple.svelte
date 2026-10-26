<script lang="ts">
  import { Check } from "@lucide/svelte"
  import { Listbox, ListboxItem, ListboxItemIndicator } from "@ui-sdk/svelte/listbox"

  const toppings = [
    { value: "basil", label: "Basil" },
    { value: "cheese", label: "Extra cheese" },
    { value: "mushroom", label: "Mushroom" },
    { value: "olive", label: "Olive" },
    { value: "onion", label: "Onion" },
    { value: "pepper", label: "Pepper" },
  ]

  let value = $state<string[]>(["cheese", "onion"])
</script>

<div class="flex w-full max-w-64 flex-col gap-3">
  <Listbox
    bind:value
    multiple
    aria-label="Toppings"
    class="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none"
  >
    {#each toppings as topping (topping.value)}
      <ListboxItem
        value={topping.value}
        class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
      >
        <ListboxItemIndicator
          keepMounted
          class="pointer-events-none flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 text-transparent data-selected:border-primary data-selected:bg-primary data-selected:text-primary-foreground"
        >
          <Check aria-hidden="true" class="pointer-events-none block size-3.5 shrink-0" />
        </ListboxItemIndicator>
        {topping.label}
      </ListboxItem>
    {/each}
  </Listbox>
  <output class="m-0 block min-h-10 text-sm leading-5 break-words text-muted-foreground">Value: {JSON.stringify(value)}</output>
</div>

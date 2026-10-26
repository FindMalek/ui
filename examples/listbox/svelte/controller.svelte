<script lang="ts">
  import { Check } from "@lucide/svelte"
  import { createListboxController, Listbox, ListboxItem, ListboxItemIndicator } from "@ui-sdk/svelte/listbox"

  const toppings = [
    { value: "basil", label: "Basil" },
    { value: "cheese", label: "Extra cheese" },
    { value: "mushroom", label: "Mushroom" },
    { value: "olive", label: "Olive" },
    { value: "onion", label: "Onion" },
    { value: "pepper", label: "Pepper" },
  ]

  const controller = createListboxController<string, true>()
</script>

<div class="flex w-full max-w-64 flex-col gap-3 items-start">
  <div class="flex flex-wrap gap-2">
    <button type="button"
      class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
      onclick={() => controller.selectAll()}
    >
      Select all
    </button>
    <button type="button"
      class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
      onclick={() => controller.clear()}
    >
      Clear
    </button>
    <button type="button"
      class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
      onclick={() => controller.focus()}
    >
      Focus
    </button>
  </div>
  <Listbox
    multiple
    {controller}
    aria-label="Toppings"
    class="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none"
  >
    {#each toppings as topping (topping.value)}
      <ListboxItem
        value={topping.value}
        class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
      >
        {topping.label}
        <ListboxItemIndicator
          class="pointer-events-none absolute end-2 flex size-4 items-center justify-center"
        >
          <Check aria-hidden="true" class="pointer-events-none block size-4 shrink-0" />
        </ListboxItemIndicator>
      </ListboxItem>
    {/each}
  </Listbox>
</div>

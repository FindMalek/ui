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

  let submitted = $state("")

  function onSubmit(event: SubmitEvent) {
    event.preventDefault()
    submitted = new FormData(event.target as HTMLFormElement).getAll("toppings").join(", ")
  }
</script>

<div class="flex w-full max-w-64 flex-col gap-3 items-start">
  <form id="pizza-order" class="flex flex-wrap items-center gap-2" onsubmit={onSubmit}>
    <button
      class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
    >
      Order
    </button>
    <button
      type="reset"
      class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
    >
      Reset
    </button>
  </form>
  <Listbox
    multiple
    name="toppings"
    form="pizza-order"
    required
    defaultValue={["cheese"]}
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
  <output class="m-0 block min-h-10 text-sm leading-5 break-words text-muted-foreground">Submitted: {submitted || "nothing yet"}</output>
</div>

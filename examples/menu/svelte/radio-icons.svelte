<script lang="ts">
  import { Check, CreditCard, Landmark, Wallet } from "@lucide/svelte"
  import {
    Menu,
    MenuContent,
    MenuGroupLabel,
    MenuRadioGroup,
    MenuRadioItem,
    MenuTrigger,
  } from "@ui-sdk/svelte/menu"

  const methods = [
    { value: "card", label: "Credit card", icon: CreditCard },
    { value: "wallet", label: "Wallet", icon: Wallet },
    { value: "bank", label: "Bank transfer", icon: Landmark, disabled: true },
  ]

  let method = $state("card")
  const current = $derived(methods.find((option) => option.value === method)!)
</script>

<Menu>
  <MenuTrigger
    class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30"
  >
    <current.icon class="size-4" />
    Payment method
  </MenuTrigger>
  <MenuContent
    class="min-w-48 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
  >
    <MenuRadioGroup bind:value={method}>
      <MenuGroupLabel class="px-2 py-1 text-xs text-muted-foreground">Pay with</MenuGroupLabel>
      {#each methods as option (option.value)}
        <MenuRadioItem
          class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
          value={option.value}
          disabled={option.disabled}
        >
          <option.icon class="size-4 text-muted-foreground group-data-checked:text-current" />
          {option.label}
          <Check class="invisible ms-auto size-4 group-data-checked:visible" />
        </MenuRadioItem>
      {/each}
    </MenuRadioGroup>
  </MenuContent>
</Menu>
<output class="mt-3 text-sm text-muted-foreground">Paying with {current.label.toLowerCase()}</output>

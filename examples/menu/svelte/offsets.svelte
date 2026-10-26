<script lang="ts">
  import { Check, ChevronDown } from "@lucide/svelte"
  import {
    Menu,
    MenuContent,
    MenuGroupLabel,
    MenuRadioGroup,
    MenuRadioItem,
    MenuTrigger,
  } from "@ui-sdk/svelte/menu"

  const fonts = [
    "Inter",
    "Geist",
    "IBM Plex Sans",
    "Source Sans",
    "Work Sans",
    "Manrope",
    "DM Sans",
    "Figtree",
    "Outfit",
    "Lexend",
    "Nunito",
    "Rubik",
    "Karla",
    "Barlow",
    "Mulish",
    "Urbanist",
    "Sora",
    "Onest",
  ]

  let font = $state("Inter")
</script>

<Menu>
  <MenuTrigger
    class="inline-flex cursor-default h-8 w-44 shrink-0 items-center justify-between gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground motion-reduce:transition-none"
  >
    {font}
    <ChevronDown aria-hidden="true" class="size-4 text-muted-foreground" />
  </MenuTrigger>
  <MenuContent
    class="max-h-(--available-height) w-[calc(var(--anchor-width)+8px)] overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
    sideOffset={8}
    alignOffset={-4}
    collisionPadding={24}
  >
    <MenuRadioGroup bind:value={font}>
      <MenuGroupLabel class="px-2 py-1 text-xs text-muted-foreground">Font</MenuGroupLabel>
      {#each fonts as name (name)}
        <MenuRadioItem
          class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
          value={name}
          closeOnSelect
        >
          {name}
          <Check aria-hidden="true" class="invisible ms-auto size-4 group-data-checked:visible" />
        </MenuRadioItem>
      {/each}
    </MenuRadioGroup>
  </MenuContent>
</Menu>

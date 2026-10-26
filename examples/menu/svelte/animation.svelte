<script lang="ts">
  import { ChevronRight } from "@lucide/svelte"
  import {
    Menu,
    MenuContent,
    MenuItem,
    MenuSeparator,
    MenuSub,
    MenuSubContent,
    MenuSubTrigger,
    MenuTrigger,
  } from "@ui-sdk/svelte/menu"

  let status = $state("Closed")
</script>

<Menu
  onOpenChange={(open: boolean) => (status = open ? "Opening" : "Closing")}
  onOpenChangeComplete={(open: boolean) => (status = open ? "Open" : "Closed")}
>
  <MenuTrigger
    class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
  >
    Animated
  </MenuTrigger>
  <MenuContent
    class="min-w-44 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale,translate] data-starting-style:opacity-0 data-ending-style:opacity-0 not-data-nested:duration-300 not-data-nested:ease-out not-data-nested:data-ending-style:duration-150 not-data-nested:data-ending-style:ease-in not-data-nested:data-starting-style:scale-90 not-data-nested:data-ending-style:scale-95 not-data-nested:data-[side=bottom]:data-starting-style:-translate-y-2 not-data-nested:data-[side=top]:data-starting-style:translate-y-2 data-nested:duration-200 data-nested:ease-out data-nested:data-ending-style:duration-100 data-nested:data-[side=right]:data-starting-style:-translate-x-2 data-nested:data-[side=left]:data-starting-style:translate-x-2 motion-reduce:transition-none"
    keepMounted
  >
    <MenuItem
      class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
    >
      Back
    </MenuItem>
    <MenuItem
      class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
    >
      Forward
    </MenuItem>
    <MenuItem
      class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
    >
      Reload
    </MenuItem>
    <MenuSeparator class="-mx-1 my-1 h-px bg-border/50" />
    <MenuSub>
      <MenuSubTrigger
        class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 data-open:bg-accent data-open:text-accent-foreground"
      >
        More tools
        <ChevronRight aria-hidden="true" class="ms-auto size-4 rtl:rotate-180" />
      </MenuSubTrigger>
      <MenuSubContent
        class="min-w-44 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale,translate] data-starting-style:opacity-0 data-ending-style:opacity-0 not-data-nested:duration-300 not-data-nested:ease-out not-data-nested:data-ending-style:duration-150 not-data-nested:data-ending-style:ease-in not-data-nested:data-starting-style:scale-90 not-data-nested:data-ending-style:scale-95 not-data-nested:data-[side=bottom]:data-starting-style:-translate-y-2 not-data-nested:data-[side=top]:data-starting-style:translate-y-2 data-nested:duration-200 data-nested:ease-out data-nested:data-ending-style:duration-100 data-nested:data-[side=right]:data-starting-style:-translate-x-2 data-nested:data-[side=left]:data-starting-style:translate-x-2 motion-reduce:transition-none"
      >
        <MenuItem
          class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
        >
          Save page as…
        </MenuItem>
        <MenuItem
          class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
        >
          Developer tools
        </MenuItem>
      </MenuSubContent>
    </MenuSub>
  </MenuContent>
</Menu>
<output class="mt-3 text-sm text-muted-foreground block min-h-5">{status}</output>

<script lang="ts">
  import { Menu, MenuContent, MenuItem, MenuTrigger } from "@ui-sdk/svelte/menu"

  const sides = ["top", "right", "bottom", "left"] as const
  const aligns = ["start", "center", "end"] as const

  let side = $state<(typeof sides)[number]>("bottom")
  let align = $state<(typeof aligns)[number]>("start")
</script>

<div class="mb-6 flex flex-col items-center gap-2">
  <div
    class="inline-flex cursor-default h-8 w-fit items-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
    role="group"
    aria-label="Side"
  >
    {#each sides as value (value)}
      <button
        class="inline-flex cursor-default h-full items-center justify-center rounded-2xl border border-transparent px-2.5 text-xs font-medium text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
        aria-pressed={side === value}
        onclick={() => side = value}
      >
        {value}
      </button>
    {/each}
  </div>
  <div
    class="inline-flex cursor-default h-8 w-fit items-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
    role="group"
    aria-label="Align"
  >
    {#each aligns as value (value)}
      <button
        class="inline-flex cursor-default h-full items-center justify-center rounded-2xl border border-transparent px-2.5 text-xs font-medium text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
        aria-pressed={align === value}
        onclick={() => align = value}
      >
        {value}
      </button>
    {/each}
  </div>
</div>
<Menu>
  <MenuTrigger
    class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
  >
    Placement
  </MenuTrigger>
  <MenuContent
    class="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
    {side}
    {align}
  >
    <MenuItem
      class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
    >
      Cut
    </MenuItem>
    <MenuItem
      class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
    >
      Copy
    </MenuItem>
    <MenuItem
      class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
    >
      Paste
    </MenuItem>
  </MenuContent>
</Menu>

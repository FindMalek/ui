<script lang="ts">
  import { Menu, MenuContent, MenuContextTrigger, MenuItem, MenuSeparator } from "@ui-sdk/svelte/menu"

  let action = $state("")
</script>

<Menu onAction={(value: string) => (action = value)}>
  <MenuContextTrigger
    class="flex h-36 w-full max-w-sm items-center justify-center rounded-2xl border border-dashed border-border text-sm text-muted-foreground outline-none select-none transition-[color,background-color,box-shadow] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted/50 motion-reduce:transition-none"
    tabindex={0}
  >
    Right-click or long-press here
  </MenuContextTrigger>
  <MenuContent
    class="min-w-40 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
  >
    <MenuItem
      class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
      value="back"
    >
      Back
    </MenuItem>
    <MenuItem
      class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
      value="forward"
      disabled
    >
      Forward
    </MenuItem>
    <MenuItem
      class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
      value="reload"
    >
      Reload
    </MenuItem>
    <MenuSeparator class="-mx-1 my-1 h-px bg-border/50" />
    <MenuItem
      class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
      value="save"
    >
      Save page as…
    </MenuItem>
    <MenuItem
      class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
      value="print"
    >
      Print…
    </MenuItem>
  </MenuContent>
</Menu>
<output class="mt-3 text-sm text-muted-foreground block min-h-5">{action ? `Last action: ${action}` : "No action yet"}</output>

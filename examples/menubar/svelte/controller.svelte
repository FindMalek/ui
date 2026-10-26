<script lang="ts">
  import { createMenubarController, Menubar } from "@ui-sdk/svelte/menubar"
  import { Menu, MenuContent, MenuItem, MenuTrigger } from "@ui-sdk/svelte/menu"
  import { useShortcut } from "@ui-sdk/svelte/shortcuts"

  const menubar = createMenubarController()

  let open = $state("none")
  useShortcut("alt+m", () => menubar.focus())
</script>

<div class="flex flex-col items-start gap-3">
  <Menubar
    controller={menubar}
    class="flex h-8 w-fit items-center rounded-2xl border border-border p-[3px] data-open:border-ring"
  >
    {#each ["File", "Edit"] as label (label)}
      <Menu onOpenChange={(next: boolean) => (open = next ? label : "none")}>
        <MenuTrigger
          class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted"
        >
          {label}
        </MenuTrigger>
        <MenuContent
          class="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
        >
          <MenuItem
            closeOnSelect={false}
            class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
            onSelect={() => menubar.close()}
          >
            Close from the controller
          </MenuItem>
        </MenuContent>
      </Menu>
    {/each}
  </Menubar>
  <div class="flex items-center gap-2">
    <button
      type="button"
      class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
      onclick={() => menubar.focus()}
    >
      Focus menubar
    </button>
    <output class="text-sm text-muted-foreground block min-h-5">Open: {open} · Alt+M focuses it too</output>
  </div>
</div>

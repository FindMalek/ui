<script lang="ts">
  import { Check } from "@lucide/svelte"
  import { Menu, MenuCheckboxItem, MenuContent, MenuItemIndicator, MenuTrigger } from "@ui-sdk/svelte/menu"
  import { Menubar } from "@ui-sdk/svelte/menubar"

  let statusBar = $state(true)
</script>

<div class="flex flex-col items-start gap-3">
  <Menubar class="flex h-8 w-fit items-center rounded-2xl border border-border p-[3px]">
    <Menu>
      <MenuTrigger
        class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted"
      >
        View
      </MenuTrigger>
      <MenuContent
        class="min-w-36 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
      >
        <MenuCheckboxItem
          bind:checked={statusBar}
          value="status-bar"
          class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          <MenuItemIndicator class="pointer-events-none absolute start-1.5 flex size-4 items-center justify-center">
            <Check class="size-4" />
          </MenuItemIndicator>
          Status Bar
        </MenuCheckboxItem>
        <MenuCheckboxItem
          value="activity-bar"
          defaultChecked
          class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          <MenuItemIndicator class="pointer-events-none absolute start-1.5 flex size-4 items-center justify-center">
            <Check class="size-4" />
          </MenuItemIndicator>
          Activity Bar
        </MenuCheckboxItem>
      </MenuContent>
    </Menu>
    <Menu>
      <MenuTrigger
        class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted"
      >
        Format
      </MenuTrigger>
      <MenuContent
        class="min-w-36 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
      >
        <MenuCheckboxItem
          value="strikethrough"
          class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          <MenuItemIndicator class="pointer-events-none absolute start-1.5 flex size-4 items-center justify-center">
            <Check class="size-4" />
          </MenuItemIndicator>
          Strikethrough
        </MenuCheckboxItem>
        <MenuCheckboxItem
          value="code"
          class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          <MenuItemIndicator class="pointer-events-none absolute start-1.5 flex size-4 items-center justify-center">
            <Check class="size-4" />
          </MenuItemIndicator>
          Code
        </MenuCheckboxItem>
      </MenuContent>
    </Menu>
  </Menubar>
  <output class="text-sm text-muted-foreground">Status bar {statusBar ? "shown" : "hidden"}</output>
</div>

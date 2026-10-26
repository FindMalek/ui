<script lang="ts">
  import { Check, ChevronRight } from "@lucide/svelte"
  import {
    Menu,
    MenuCheckboxItem,
    MenuContent,
    MenuItem,
    MenuItemIndicator,
    MenuRadioGroup,
    MenuRadioItem,
    MenuSeparator,
    MenuSub,
    MenuSubContent,
    MenuSubTrigger,
    MenuTrigger,
  } from "@ui-sdk/svelte/menu"
  import { Menubar } from "@ui-sdk/svelte/menubar"

  const profiles = [
    { value: "andy", label: "Andy" },
    { value: "benoit", label: "Benoit" },
    { value: "luis", label: "Luis" },
  ]
</script>

<Menubar class="flex h-8 w-fit items-center rounded-2xl border border-border p-[3px]">
  <Menu>
    <MenuTrigger
      class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted"
    >
      File
    </MenuTrigger>
    <MenuContent
      class="min-w-48 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 **:data-[slot=menu-shortcut]:ms-auto **:data-[slot=menu-shortcut]:text-xs **:data-[slot=menu-shortcut]:tracking-widest **:data-[slot=menu-shortcut]:text-muted-foreground data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
    >
      <MenuItem
        shortcut="mod+t"
        class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        New Tab
      </MenuItem>
      <MenuItem
        shortcut="mod+n"
        class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        New Window
      </MenuItem>
      <MenuItem
        disabled
        class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        New Incognito Window
      </MenuItem>
      <MenuSeparator class="-mx-1 my-1 h-px bg-border/50" />
      <MenuSub>
        <MenuSubTrigger
          class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground"
        >
          Share
          <ChevronRight aria-hidden="true" class="ms-auto size-4 rtl:rotate-180" />
        </MenuSubTrigger>
        <MenuSubContent
          class="min-w-32 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
        >
          <MenuItem
            class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            Email link
          </MenuItem>
          <MenuItem
            class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            Messages
          </MenuItem>
          <MenuItem
            class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            Notes
          </MenuItem>
        </MenuSubContent>
      </MenuSub>
      <MenuSeparator class="-mx-1 my-1 h-px bg-border/50" />
      <MenuItem
        shortcut="mod+p"
        class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        Print…
      </MenuItem>
    </MenuContent>
  </Menu>
  <Menu>
    <MenuTrigger
      class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted"
    >
      Edit
    </MenuTrigger>
    <MenuContent
      class="min-w-48 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 **:data-[slot=menu-shortcut]:ms-auto **:data-[slot=menu-shortcut]:text-xs **:data-[slot=menu-shortcut]:tracking-widest **:data-[slot=menu-shortcut]:text-muted-foreground data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
    >
      <MenuItem
        shortcut="mod+z"
        class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        Undo
      </MenuItem>
      <MenuItem
        shortcut="mod+shift+z"
        class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        Redo
      </MenuItem>
      <MenuSeparator class="-mx-1 my-1 h-px bg-border/50" />
      <MenuItem
        class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        Cut
      </MenuItem>
      <MenuItem
        class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        Copy
      </MenuItem>
      <MenuItem
        class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        Paste
      </MenuItem>
    </MenuContent>
  </Menu>
  <Menu>
    <MenuTrigger
      class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted"
    >
      View
    </MenuTrigger>
    <MenuContent
      class="min-w-48 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 **:data-[slot=menu-shortcut]:ms-auto **:data-[slot=menu-shortcut]:text-xs **:data-[slot=menu-shortcut]:tracking-widest **:data-[slot=menu-shortcut]:text-muted-foreground data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
    >
      <MenuCheckboxItem
        value="bookmarks"
        class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        <MenuItemIndicator class="pointer-events-none absolute start-1.5 flex size-4 items-center justify-center">
          <Check aria-hidden="true" class="size-4" />
        </MenuItemIndicator>
        Always Show Bookmarks Bar
      </MenuCheckboxItem>
      <MenuCheckboxItem
        value="urls"
        defaultChecked
        class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        <MenuItemIndicator class="pointer-events-none absolute start-1.5 flex size-4 items-center justify-center">
          <Check aria-hidden="true" class="size-4" />
        </MenuItemIndicator>
        Always Show Full URLs
      </MenuCheckboxItem>
      <MenuSeparator class="-mx-1 my-1 h-px bg-border/50" />
      <MenuItem
        shortcut="mod+r"
        class="flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-2 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        Reload
      </MenuItem>
      <MenuItem
        class="flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-2 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        Toggle Fullscreen
      </MenuItem>
    </MenuContent>
  </Menu>
  <Menu>
    <MenuTrigger
      class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted"
    >
      Profiles
    </MenuTrigger>
    <MenuContent
      class="min-w-48 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
    >
      <MenuRadioGroup defaultValue="benoit">
        {#each profiles as profile (profile.value)}
          <MenuRadioItem
            value={profile.value}
            class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            <MenuItemIndicator class="pointer-events-none absolute start-1.5 flex size-4 items-center justify-center">
              <span class="size-2 rounded-full bg-current"></span>
            </MenuItemIndicator>
            {profile.label}
          </MenuRadioItem>
        {/each}
      </MenuRadioGroup>
      <MenuSeparator class="-mx-1 my-1 h-px bg-border/50" />
      <MenuItem
        class="flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-2 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        Edit…
      </MenuItem>
      <MenuItem
        class="flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-2 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        Add Profile…
      </MenuItem>
    </MenuContent>
  </Menu>
</Menubar>

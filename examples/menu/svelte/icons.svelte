<script lang="ts">
  import { Download, Link, Mail, Reply, Share } from "@lucide/svelte"
  import { Menu, MenuContent, MenuItem, MenuItemIcon, MenuSeparator, MenuTrigger } from "@ui-sdk/svelte/menu"

  let action = $state("")
</script>

<Menu onAction={(value: string) => (action = value)}>
  <MenuTrigger
    class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
  >
    <Share class="size-4" />
    Share
  </MenuTrigger>
  <MenuContent
    class="min-w-40 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
  >
    <MenuItem
      class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
      value="copy-link"
    >
      <MenuItemIcon class="flex text-muted-foreground group-data-highlighted:text-accent-foreground">
        <Link class="size-4" />
      </MenuItemIcon>
      Copy link
    </MenuItem>
    <MenuItem
      class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
      value="email"
    >
      <MenuItemIcon class="flex text-muted-foreground group-data-highlighted:text-accent-foreground">
        <Mail class="size-4" />
      </MenuItemIcon>
      Email
    </MenuItem>
    <MenuItem
      class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
      value="reply"
    >
      <MenuItemIcon
        mirror
        class="flex text-muted-foreground group-data-highlighted:text-accent-foreground"
      >
        <Reply class="size-4" />
      </MenuItemIcon>
      Reply
    </MenuItem>
    <MenuSeparator class="-mx-1 my-1 h-px bg-border/50" />
    <MenuItem
      class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
      value="download"
    >
      <MenuItemIcon class="flex text-muted-foreground group-data-highlighted:text-accent-foreground">
        <Download class="size-4" />
      </MenuItemIcon>
      Download
    </MenuItem>
    <MenuItem
      class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 in-data-has-icons:not-data-has-icon:ps-8"
      value="embed"
    >
      Embed
    </MenuItem>
  </MenuContent>
</Menu>
<output class="mt-3 text-sm text-muted-foreground block min-h-5">{action ? `Ran ${action}` : "Pick an item"}</output>

import { Menu, MenuContent, MenuItem, MenuItemIcon, MenuSeparator, MenuTrigger } from "@ui-sdk/react/menu"
import { Menubar } from "@ui-sdk/react/menubar"
import { CircleHelp, File, Folder, Redo, Save, Settings, Trash, Undo } from "lucide-react"

export function Example() {
  return (
    <Menubar className="flex h-8 w-fit items-center rounded-2xl border border-border p-[3px]">
      <Menu>
        <MenuTrigger className="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted">
          File
        </MenuTrigger>
        <MenuContent className="min-w-36 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
          <MenuItem className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
            <MenuItemIcon className="flex text-muted-foreground">
              <File className="size-4" />
            </MenuItemIcon>
            New File
          </MenuItem>
          <MenuItem className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
            <MenuItemIcon className="flex text-muted-foreground">
              <Folder className="size-4" />
            </MenuItemIcon>
            Open Folder
          </MenuItem>
          <MenuItem className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
            <MenuItemIcon className="flex text-muted-foreground">
              <Save className="size-4" />
            </MenuItemIcon>
            Save
          </MenuItem>
        </MenuContent>
      </Menu>
      <Menu>
        <MenuTrigger className="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted">
          Edit
        </MenuTrigger>
        <MenuContent className="min-w-36 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
          <MenuItem className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
            <MenuItemIcon mirror className="flex text-muted-foreground">
              <Undo className="size-4" />
            </MenuItemIcon>
            Undo
          </MenuItem>
          <MenuItem className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
            <MenuItemIcon mirror className="flex text-muted-foreground">
              <Redo className="size-4" />
            </MenuItemIcon>
            Redo
          </MenuItem>
        </MenuContent>
      </Menu>
      <Menu>
        <MenuTrigger className="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted">
          More
        </MenuTrigger>
        <MenuContent className="min-w-36 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
          <MenuItem className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
            <MenuItemIcon className="flex text-muted-foreground">
              <Settings className="size-4" />
            </MenuItemIcon>
            Settings
          </MenuItem>
          <MenuItem className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
            <MenuItemIcon className="flex text-muted-foreground">
              <CircleHelp className="size-4" />
            </MenuItemIcon>
            Help
          </MenuItem>
          <MenuSeparator className="-mx-1 my-1 h-px bg-border/50" />
          <MenuItem
            destructive
            className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm text-destructive outline-none select-none data-highlighted:bg-destructive/10 data-highlighted:text-destructive data-disabled:pointer-events-none data-disabled:opacity-50 dark:data-highlighted:bg-destructive/20"
          >
            <MenuItemIcon className="flex">
              <Trash className="size-4" />
            </MenuItemIcon>
            Delete
          </MenuItem>
        </MenuContent>
      </Menu>
    </Menubar>
  )
}

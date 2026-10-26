"use client"

import * as React from "react"
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@ui-sdk/react/menu"

function Example() {
  const [action, setAction] = React.useState("")

  return (
    <>
      <Menu onAction={setAction}>
        <MenuTrigger className="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
          Project
        </MenuTrigger>
        <MenuContent className="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
          <MenuGroup>
            <MenuGroupLabel className="px-2 py-1 text-xs text-muted-foreground">Project</MenuGroupLabel>
            <MenuItem
              className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
              value="overview"
            >
              Overview
            </MenuItem>
            <MenuItem
              className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
              value="members"
            >
              Members
            </MenuItem>
            <MenuItem
              className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
              value="settings"
            >
              Settings
            </MenuItem>
          </MenuGroup>
          <MenuSeparator className="-mx-1 my-1 h-px bg-border/50" />
          <MenuGroup>
            <MenuGroupLabel className="px-2 py-1 text-xs text-muted-foreground">Help</MenuGroupLabel>
            <MenuItem
              className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
              value="docs"
            >
              Documentation
            </MenuItem>
            <MenuItem
              className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
              value="feedback"
            >
              Send feedback
            </MenuItem>
          </MenuGroup>
        </MenuContent>
      </Menu>
      <output className="mt-3 text-sm text-muted-foreground block min-h-5">
        {action ? `Ran ${action}` : "Pick an item"}
      </output>
    </>
  )
}

export { Example }

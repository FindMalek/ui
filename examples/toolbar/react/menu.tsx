"use client"

import { Menu, MenuContent, MenuItem, MenuItemIcon, MenuTrigger } from "@ui-sdk/react/menu"
import { Toolbar, ToolbarButton } from "@ui-sdk/react/toolbar"
import { Link, Mail, Save, Share } from "lucide-react"
import * as React from "react"

function Example() {
  const [action, setAction] = React.useState("nothing yet")
  return (
    <div className="flex flex-col items-start gap-3">
      <Toolbar
        aria-label="Document"
        className="flex w-fit items-center gap-1 rounded-3xl border border-border p-1"
      >
        <ToolbarButton
          onClick={() => setAction("save")}
          className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
        >
          <Save className="size-4" />
          Save
        </ToolbarButton>
        <Menu onAction={setAction}>
          <ToolbarButton
            render={<MenuTrigger />}
            className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none data-open:bg-muted"
          >
            <Share className="size-4" />
            Share
          </ToolbarButton>
          <MenuContent className="max-h-(--available-height) overflow-x-hidden overflow-y-auto rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none min-w-36">
            <MenuItem
              value="email"
              className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 leading-5"
            >
              <MenuItemIcon className="flex text-muted-foreground">
                <Mail className="size-4" />
              </MenuItemIcon>
              Email
            </MenuItem>
            <MenuItem
              value="link"
              className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 leading-5"
            >
              <MenuItemIcon className="flex text-muted-foreground">
                <Link className="size-4" />
              </MenuItemIcon>
              Copy link
            </MenuItem>
          </MenuContent>
        </Menu>
        <ToolbarButton
          onClick={() => setAction("print")}
          className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
        >
          Print
        </ToolbarButton>
      </Toolbar>
      <output className="text-sm text-muted-foreground">Last: {action}</output>
    </div>
  )
}

export { Example }

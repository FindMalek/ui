"use client"

import * as React from "react"
import { Menu, MenuContent, MenuItem, MenuTrigger } from "@ui-sdk/react/menu"
import { createMenubarController, Menubar } from "@ui-sdk/react/menubar"
import { useShortcut } from "@ui-sdk/react/shortcuts"

function Example() {
  const [menubar] = React.useState(() => createMenubarController())
  const [open, setOpen] = React.useState("none")
  useShortcut("alt+m", () => menubar.focus())
  return (
    <div className="flex flex-col items-start gap-3">
      <Menubar
        controller={menubar}
        className="flex h-8 w-fit items-center rounded-2xl border border-border p-[3px] data-open:border-ring"
      >
        {["File", "Edit"].map((label) => (
          <Menu key={label} onOpenChange={(next) => setOpen(next ? label : "none")}>
            <MenuTrigger className="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted">
              {label}
            </MenuTrigger>
            <MenuContent className="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
              <MenuItem
                closeOnSelect={false}
                onSelect={() => menubar.close()}
                className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
              >
                Close from the controller
              </MenuItem>
            </MenuContent>
          </Menu>
        ))}
      </Menubar>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => menubar.focus()}
          className="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
        >
          Focus menubar
        </button>
        <output className="text-sm text-muted-foreground block min-h-5">
          Open: {open} · Alt+M focuses it too
        </output>
      </div>
    </div>
  )
}

export { Example }

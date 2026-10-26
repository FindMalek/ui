"use client"

import * as React from "react"
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@ui-sdk/react/menu"
import { Check, Monitor, ZoomIn, ZoomOut } from "lucide-react"

function Example() {
  const [zoom, setZoom] = React.useState(100)
  const [fit, setFit] = React.useState(false)

  return (
    <Menu>
      <MenuTrigger
        className="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
        aria-label={`Zoom ${fit ? "to fit" : `${zoom}%`}`}
      >
        <ZoomIn className="size-4" />
        {fit ? "Fit" : `${zoom}%`}
      </MenuTrigger>
      <MenuContent className="min-w-44 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
        <MenuGroup>
          <MenuGroupLabel className="px-2 py-1 text-xs text-muted-foreground">Zoom {zoom}%</MenuGroupLabel>
          <MenuItem
            className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
            closeOnSelect={false}
            disabled={zoom >= 200}
            onSelect={() => setZoom(Math.min(200, zoom + 10))}
          >
            <ZoomIn className="size-4 text-muted-foreground group-data-highlighted:text-current" />
            Zoom in
          </MenuItem>
          <MenuItem
            className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
            closeOnSelect={false}
            disabled={zoom <= 50}
            onSelect={() => setZoom(Math.max(50, zoom - 10))}
          >
            <ZoomOut className="size-4 text-muted-foreground group-data-highlighted:text-current" />
            Zoom out
          </MenuItem>
          <MenuItem
            className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
            onSelect={() => setZoom(100)}
          >
            <span className="size-4 shrink-0" />
            Reset to 100%
          </MenuItem>
        </MenuGroup>
        <MenuSeparator className="-mx-1 my-1 h-px bg-border/50" />
        <MenuCheckboxItem
          className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
          value="fit"
          checked={fit}
          onCheckedChange={setFit}
          closeOnSelect
        >
          <Monitor className="size-4 text-muted-foreground group-data-highlighted:text-current" />
          Fit to window
          <Check aria-hidden="true" className="invisible ms-auto size-4 group-data-checked:visible" />
        </MenuCheckboxItem>
      </MenuContent>
    </Menu>
  )
}

export { Example }

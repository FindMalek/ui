"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectTrigger,
  SelectValue,
} from "@ui-sdk/react/select"
import { Toolbar, ToolbarButton, ToolbarSeparator } from "@ui-sdk/react/toolbar"
import { Check, ChevronsUpDown, Monitor, ZoomIn, ZoomOut } from "lucide-react"
import * as React from "react"

const zooms = ["50%", "75%", "100%", "150%", "200%"]

function Example() {
  const [zoom, setZoom] = React.useState("100%")
  const index = zooms.indexOf(zoom)
  return (
    <Toolbar aria-label="View" className="flex w-fit items-center gap-1 rounded-3xl border border-border p-1">
      <ToolbarButton
        aria-label="Zoom out"
        disabled={index === 0}
        onClick={() => setZoom(zooms[index - 1])}
        className="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
      >
        <ZoomOut className="size-4" />
      </ToolbarButton>
      <Select value={zoom} onValueChange={(value) => value && setZoom(value)}>
        <ToolbarButton
          render={<SelectTrigger />}
          aria-label="Zoom"
          className="inline-flex h-8 w-22 shrink-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none tabular-nums data-open:bg-muted"
        >
          <SelectValue />
          <ChevronsUpDown className="size-4 text-muted-foreground" />
        </ToolbarButton>
        <SelectContent className="max-h-(--available-height) overflow-x-hidden overflow-y-auto rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none min-w-(--anchor-width)">
          {zooms.map((zoom) => (
            <SelectItem
              key={zoom}
              value={zoom}
              className="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm tabular-nums outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 leading-5"
            >
              {zoom}
              <SelectItemIndicator className="absolute end-2 flex size-4 items-center justify-center">
                <Check className="size-4" />
              </SelectItemIndicator>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <ToolbarButton
        aria-label="Zoom in"
        disabled={index === zooms.length - 1}
        onClick={() => setZoom(zooms[index + 1])}
        className="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
      >
        <ZoomIn className="size-4" />
      </ToolbarButton>
      <ToolbarSeparator className="mx-1 h-5 w-px shrink-0 bg-border" />
      <ToolbarButton
        aria-label="Fit to screen"
        onClick={() => setZoom("100%")}
        className="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
      >
        <Monitor className="size-4" />
      </ToolbarButton>
    </Toolbar>
  )
}

export { Example }

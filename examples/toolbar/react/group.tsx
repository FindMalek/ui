"use client"

import { Toolbar, ToolbarButton, ToolbarGroup, ToolbarSeparator } from "@ui-sdk/react/toolbar"
import { Copy, Download, Redo, Undo } from "lucide-react"

function Example() {
  return (
    <Toolbar
      aria-label="Editor"
      className="flex w-fit items-center gap-1 rounded-3xl border border-border p-1"
    >
      <ToolbarGroup aria-label="Clipboard" className="flex items-center gap-1">
        <ToolbarButton
          aria-label="Copy"
          className="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
        >
          <Copy className="size-4" />
        </ToolbarButton>
        <ToolbarButton
          aria-label="Download"
          className="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
        >
          <Download className="size-4" />
        </ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator className="mx-1 h-5 w-px shrink-0 bg-border" />
      <ToolbarGroup disabled aria-label="History" className="flex items-center gap-1">
        <ToolbarButton
          aria-label="Undo"
          className="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
        >
          <Undo className="size-4" />
        </ToolbarButton>
        <ToolbarButton
          aria-label="Redo"
          className="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
        >
          <Redo className="size-4" />
        </ToolbarButton>
      </ToolbarGroup>
    </Toolbar>
  )
}

export { Example }

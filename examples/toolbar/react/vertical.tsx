"use client"

import { Toggle, ToggleGroup } from "@ui-sdk/react/toggle"
import { Toolbar, ToolbarButton, ToolbarSeparator } from "@ui-sdk/react/toolbar"
import { Image, MoveHorizontal, Pencil, Trash } from "lucide-react"

function Example() {
  return (
    <Toolbar
      orientation="vertical"
      aria-label="Tools"
      className="flex w-fit flex-col items-center gap-1 rounded-3xl border border-border p-1"
    >
      <ToggleGroup
        defaultValue={["pencil"]}
        aria-label="Tool"
        orientation="vertical"
        className="flex flex-col items-center gap-1"
      >
        <Toggle
          value="pencil"
          aria-label="Pencil"
          className="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2 text-sm font-medium outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
        >
          <Pencil className="size-4" />
        </Toggle>
        <Toggle
          value="image"
          aria-label="Image"
          className="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2 text-sm font-medium outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
        >
          <Image className="size-4" />
        </Toggle>
        <Toggle
          value="move"
          aria-label="Move"
          className="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2 text-sm font-medium outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
        >
          <MoveHorizontal className="size-4" />
        </Toggle>
      </ToggleGroup>
      <ToolbarSeparator className="my-1 h-px w-5 shrink-0 bg-border" />
      <ToolbarButton
        aria-label="Delete"
        className="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
      >
        <Trash className="size-4" />
      </ToolbarButton>
    </Toolbar>
  )
}

export { Example }

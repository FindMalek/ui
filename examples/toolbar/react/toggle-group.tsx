"use client"

import { Toggle, ToggleGroup } from "@ui-sdk/react/toggle"
import { Toolbar, ToolbarButton, ToolbarSeparator } from "@ui-sdk/react/toolbar"
import { Bold, Code, Italic, Strikethrough } from "lucide-react"
import * as React from "react"

const formats = [
  { value: "bold", label: "Bold", icon: Bold },
  { value: "italic", label: "Italic", icon: Italic },
  { value: "strikethrough", label: "Strikethrough", icon: Strikethrough },
]

function Example() {
  const [style, setStyle] = React.useState<string[]>(["bold"])
  return (
    <div className="flex flex-col items-start gap-3">
      <Toolbar
        aria-label="Text"
        className="flex w-fit items-center gap-1 rounded-3xl border border-border p-1"
      >
        <ToggleGroup
          multiple
          value={style}
          onValueChange={setStyle}
          aria-label="Text style"
          className="flex items-center gap-1"
        >
          {formats.map(({ value, label, icon: Icon }) => (
            <Toggle
              key={value}
              value={value}
              aria-label={label}
              className="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2 text-sm font-medium outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
            >
              <Icon className="size-4" />
            </Toggle>
          ))}
        </ToggleGroup>
        <ToolbarSeparator className="mx-1 h-5 w-px shrink-0 bg-border" />
        <Toggle
          aria-label="Code"
          className="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2 text-sm font-medium outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
        >
          <Code className="size-4" />
        </Toggle>
        <ToolbarButton
          onClick={() => setStyle([])}
          className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
        >
          Clear
        </ToolbarButton>
      </Toolbar>
      <output className="text-sm text-muted-foreground">Style: {style.join(", ") || "none"}</output>
    </div>
  )
}

export { Example }

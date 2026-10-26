"use client"

import { NumberInput, NumberInputControl } from "@ui-sdk/react/number-input"
import { Toolbar, ToolbarButton, ToolbarInput } from "@ui-sdk/react/toolbar"
import { Bold, Search } from "lucide-react"

function Example() {
  return (
    <Toolbar aria-label="Text" className="flex w-fit items-center gap-1 rounded-3xl border border-border p-1">
      <ToolbarButton
        aria-label="Bold"
        className="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
      >
        <Bold className="size-4" />
      </ToolbarButton>
      <NumberInput defaultValue={14} min={8} max={72}>
        <ToolbarInput
          render={<NumberInputControl aria-label="Font size" />}
          className="h-8 w-14 min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base tabular-nums outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm motion-reduce:transition-none"
        />
      </NumberInput>
      <ToolbarInput
        aria-label="Find"
        placeholder="Find…"
        className="h-8 w-28 min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm motion-reduce:transition-none"
      />
      <ToolbarButton
        aria-label="Search"
        className="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
      >
        <Search className="size-4" />
      </ToolbarButton>
    </Toolbar>
  )
}

export { Example }

"use client"

import { Listbox, ListboxItem, ListboxItemIndicator } from "@ui-sdk/react/listbox"
import { Check } from "lucide-react"
import * as React from "react"

const timezones = Array.from({ length: 27 }, (_, index) => {
  const offset = index - 12
  const label = `UTC${offset < 0 ? "−" : "+"}${String(Math.abs(offset)).padStart(2, "0")}:00`
  return { value: `utc${offset}`, label }
})

function Example() {
  const [highlighted, setHighlighted] = React.useState<string | null>(null)

  return (
    <div className="flex w-full max-w-64 flex-col gap-3">
      <Listbox
        defaultValue="utc9"
        onHighlight={(value) => setHighlighted(value)}
        aria-label="Time zone"
        className="box-border max-h-56 scroll-py-1 overflow-y-auto flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none"
      >
        {timezones.map((zone, index) => (
          <ListboxItem
            key={zone.value}
            value={zone.value}
            index={index}
            className="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 tabular-nums"
          >
            {zone.label}
            <ListboxItemIndicator className="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
              <Check aria-hidden="true" className="pointer-events-none block size-4 shrink-0" />
            </ListboxItemIndicator>
          </ListboxItem>
        ))}
      </Listbox>
      <output className="m-0 block min-h-10 text-sm leading-5 break-words text-muted-foreground">
        Focused: {highlighted ?? "none"}
      </output>
    </div>
  )
}

export { Example }

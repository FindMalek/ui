"use client"

import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from "@ui-sdk/react/collapsible"
import { ChevronRight } from "lucide-react"

function Example() {
  return (
    <Collapsible
      className={(state) =>
        state.open
          ? "w-full max-w-sm rounded-3xl border border-border bg-muted/50 p-2 text-sm text-card-foreground transition-colors"
          : "w-full max-w-sm rounded-3xl border border-border bg-card p-2 text-sm text-card-foreground transition-colors"
      }
    >
      <CollapsibleTrigger
        className="group flex h-8 items-center gap-1.5 rounded-2xl border border-transparent px-3 text-start font-medium cursor-default outline-none select-none transition-[color,background-color,box-shadow] motion-reduce:transition-none bg-secondary text-secondary-foreground not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
        render={(props, state) => (
          <h3 className="flex items-center justify-between gap-4 text-sm font-normal">
            <button {...props} />
            <span className="pe-3 text-muted-foreground tabular-nums">
              {state.open ? "3 updates" : "Arrives Thursday"}
            </span>
          </h3>
        )}
      >
        <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-open:rotate-90 motion-reduce:transition-none rtl:-scale-x-100" />
        Track parcel
      </CollapsibleTrigger>
      <CollapsiblePanel
        className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0 motion-reduce:transition-none"
        render={<ol />}
      >
        <li className="flex justify-between gap-4 px-3 pt-2 pb-1 text-muted-foreground">
          Out for delivery <span className="tabular-nums">07:40</span>
        </li>
        <li className="flex justify-between gap-4 px-3 py-1 text-muted-foreground">
          Arrived at the local depot <span className="tabular-nums">05:12</span>
        </li>
        <li className="flex justify-between gap-4 px-3 pt-1 pb-2 text-muted-foreground">
          Left the sorting center <span className="tabular-nums">Wed 21:03</span>
        </li>
      </CollapsiblePanel>
    </Collapsible>
  )
}

export { Example }

import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from "@ui-sdk/react/collapsible"
import { Settings } from "lucide-react"

function Example() {
  return (
    <Collapsible className="flex w-full max-w-sm flex-col rounded-3xl border border-border bg-card p-5 text-sm text-card-foreground">
      <p className="text-base font-medium">Radius</p>
      <p className="mt-1 text-muted-foreground">Set the corner radius of the element.</p>
      <div className="mt-4 flex items-end gap-2">
        <label className="flex flex-1 flex-col gap-2">
          <span className="leading-none font-medium">Radius</span>
          <input
            className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 motion-reduce:transition-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm"
            type="number"
            min={0}
            defaultValue={8}
          />
        </label>
        <CollapsibleTrigger className="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding text-secondary-foreground px-3 font-medium whitespace-nowrap cursor-default outline-none select-none transition-[color,background-color,box-shadow] motion-reduce:transition-none not-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px motion-reduce:transform-none motion-reduce:transition-none">
          <Settings className="size-4" />
          Edit each axis
        </CollapsibleTrigger>
      </div>
      <CollapsiblePanel className="-mx-1 -mb-1 h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0 motion-reduce:transition-none">
        <div className="grid grid-cols-2 gap-2 px-1 pt-3 pb-1">
          <label className="flex flex-col gap-2">
            <span className="leading-none font-medium">Radius X</span>
            <input
              className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 motion-reduce:transition-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm"
              type="number"
              min={0}
              defaultValue={8}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="leading-none font-medium">Radius Y</span>
            <input
              className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 motion-reduce:transition-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm"
              type="number"
              min={0}
              defaultValue={8}
            />
          </label>
        </div>
      </CollapsiblePanel>
    </Collapsible>
  )
}

export { Example }

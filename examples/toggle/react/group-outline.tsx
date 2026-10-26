import { Toggle, ToggleGroup } from "@ui-sdk/react/toggle"

export function Example() {
  return (
    <ToggleGroup defaultValue={["all"]} aria-label="Calls" className="flex w-fit items-center gap-1">
      <Toggle
        value="all"
        className="inline-flex h-8 min-w-8 shrink-0 items-center justify-center rounded-2xl border border-input bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        All
      </Toggle>
      <Toggle
        value="missed"
        className="inline-flex h-8 min-w-8 shrink-0 items-center justify-center rounded-2xl border border-input bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        Missed
      </Toggle>
    </ToggleGroup>
  )
}

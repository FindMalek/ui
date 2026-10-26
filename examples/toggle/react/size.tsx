import { Toggle } from "@ui-sdk/react/toggle"

export function Example() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle className="inline-flex h-7 min-w-7 shrink-0 items-center justify-center rounded-2xl border border-input bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50">
        Small
      </Toggle>
      <Toggle className="inline-flex h-8 min-w-8 shrink-0 items-center justify-center rounded-2xl border border-input bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50">
        Default
      </Toggle>
      <Toggle className="inline-flex h-9 min-w-9 shrink-0 items-center justify-center rounded-2xl border border-input bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50">
        Large
      </Toggle>
    </div>
  )
}

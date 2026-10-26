import { Toggle, ToggleIcon } from "@ui-sdk/react/toggle"
import { Italic } from "lucide-react"

function Example() {
  return (
    <Toggle className="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none">
      <ToggleIcon className="flex">
        <Italic className="size-4" />
      </ToggleIcon>
      Italic
    </Toggle>
  )
}

export { Example }

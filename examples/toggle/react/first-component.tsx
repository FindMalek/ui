import { Toggle } from "@ui-sdk/react/toggle"

function Example() {
  return (
    <Toggle className="inline-flex h-8 min-w-8 cursor-default items-center justify-center gap-1 rounded-2xl border border-input bg-transparent px-2.5 py-0 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-colors outline-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted motion-reduce:transition-none">
      Bookmark
    </Toggle>
  )
}

export { Example }

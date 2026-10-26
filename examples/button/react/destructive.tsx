import { Button } from "@ui-sdk/react/button"
import { Trash } from "lucide-react"

export function Example() {
  return (
    <Button className="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-destructive/10 bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-destructive outline-none select-none transition-[color,background-color,box-shadow] hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-3 focus-visible:ring-destructive/20 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40">
      <Trash className="size-4" />
      Delete
    </Button>
  )
}

import { Separator } from "@ui-sdk/react/separator"

export function Example() {
  return (
    <div className="flex w-full max-w-xs items-center gap-3 text-xs text-muted-foreground">
      <Separator decorative className="h-px flex-1 bg-border" />
      <span>or</span>
      <Separator decorative className="h-px flex-1 bg-border" />
    </div>
  )
}

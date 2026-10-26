import { Separator } from "@ui-sdk/solid/separator"

export function Example() {
  return (
    <div class="flex w-full max-w-xs items-center gap-3 text-xs text-muted-foreground">
      <Separator decorative class="h-px flex-1 bg-border" />
      <span>or</span>
      <Separator decorative class="h-px flex-1 bg-border" />
    </div>
  )
}

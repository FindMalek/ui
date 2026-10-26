import { Separator } from "@ui-sdk/react/separator"

export function Example() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4 text-sm text-foreground">
      <div className="flex flex-col gap-1.5">
        <p className="font-medium">Account</p>
        <p className="text-muted-foreground">Manage your profile and preferences.</p>
      </div>
      <Separator className="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch" />
      <p>Your changes are saved automatically.</p>
    </div>
  )
}

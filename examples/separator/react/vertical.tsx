import { Separator } from "@ui-sdk/react/separator"

export function Example() {
  return (
    <div className="flex h-5 items-center gap-4 text-sm text-foreground">
      <span>Profile</span>
      <Separator
        orientation="vertical"
        className="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch"
      />
      <span>Billing</span>
      <Separator
        orientation="vertical"
        className="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch"
      />
      <span>Settings</span>
    </div>
  )
}

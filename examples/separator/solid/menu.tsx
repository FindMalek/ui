import { Separator } from "@ui-sdk/solid/separator"

export function Example() {
  return (
    <div class="flex items-center gap-2 text-sm text-foreground md:gap-4">
      <div class="flex flex-col gap-1">
        <span class="font-medium">Settings</span>
        <span class="text-xs text-muted-foreground">Manage preferences</span>
      </div>
      <Separator
        orientation="vertical"
        class="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch"
      />
      <div class="flex flex-col gap-1">
        <span class="font-medium">Account</span>
        <span class="text-xs text-muted-foreground">Profile & security</span>
      </div>
      <Separator
        orientation="vertical"
        class="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch"
      />
      <div class="flex flex-col gap-1">
        <span class="font-medium">Help</span>
        <span class="text-xs text-muted-foreground">Support & docs</span>
      </div>
    </div>
  )
}

import "@ui-sdk/web/separator"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex items-center gap-2 text-sm text-foreground md:gap-4">
      <div class="flex flex-col gap-1">
        <span class="font-medium">Settings</span>
        <span class="text-xs text-muted-foreground">Manage preferences</span>
      </div>
      <ui-separator orientation="vertical" class="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch"></ui-separator>
      <div class="flex flex-col gap-1">
        <span class="font-medium">Account</span>
        <span class="text-xs text-muted-foreground">Profile &amp; security</span>
      </div>
      <ui-separator orientation="vertical" class="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch"></ui-separator>
      <div class="flex flex-col gap-1">
        <span class="font-medium">Help</span>
        <span class="text-xs text-muted-foreground">Support &amp; docs</span>
      </div>
    </div>
  `
}

import "@ui-sdk/web/separator"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex h-5 items-center gap-4 text-sm text-foreground">
      <span>Profile</span>
      <ui-separator orientation="vertical" class="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch"></ui-separator>
      <span>Billing</span>
      <ui-separator orientation="vertical" class="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch"></ui-separator>
      <span>Settings</span>
    </div>
  `
}

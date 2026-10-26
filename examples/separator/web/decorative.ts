import "@ui-sdk/web/separator"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-xs items-center gap-3 text-xs text-muted-foreground">
      <ui-separator decorative class="h-px flex-1 bg-border"></ui-separator>
      <span>or</span>
      <ui-separator decorative class="h-px flex-1 bg-border"></ui-separator>
    </div>
  `
}

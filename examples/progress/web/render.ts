import "@ui-sdk/web/progress"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-progress value="18" class="flex w-full max-w-xs flex-wrap items-center gap-x-3 gap-y-2">
      <ui-progress-label class="text-sm font-medium">Battery</ui-progress-label>
      <span class="ms-auto text-sm text-muted-foreground tabular-nums"><ui-progress-value></ui-progress-value> charged</span>
      <ui-progress-track class="block h-2 w-full overflow-hidden rounded-full bg-muted">
        <ui-progress-indicator class="h-full bg-destructive transition-[width] data-complete:bg-primary"></ui-progress-indicator>
      </ui-progress-track>
    </ui-progress>
  `
}

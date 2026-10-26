import "@ui-sdk/web/progress"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-progress value="56" class="flex w-full max-w-xs flex-wrap items-center gap-x-3 gap-y-2">
      <ui-progress-label class="text-sm font-medium">Upload progress</ui-progress-label>
      <ui-progress-value class="ms-auto text-sm text-muted-foreground tabular-nums"></ui-progress-value>
      <ui-progress-track class="h-2 w-full overflow-hidden rounded-full bg-muted">
        <ui-progress-indicator class="h-full bg-primary transition-[width]"></ui-progress-indicator>
      </ui-progress-track>
    </ui-progress>
  `
}

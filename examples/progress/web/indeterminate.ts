import "@ui-sdk/web/progress"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-progress class="flex w-full max-w-xs flex-wrap gap-3 text-foreground">
      <ui-progress-label class="text-sm font-medium">Connecting</ui-progress-label>
      <ui-progress-track class="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
        <ui-progress-indicator class="h-full bg-primary data-indeterminate:w-full data-indeterminate:animate-pulse motion-reduce:animate-none"></ui-progress-indicator>
      </ui-progress-track>
    </ui-progress>
  `
}

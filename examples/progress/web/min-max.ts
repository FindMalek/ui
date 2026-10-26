import "@ui-sdk/web/progress"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-progress value="3" min="1" max="5" class="flex w-full max-w-xs flex-wrap gap-3 text-foreground">
      <ui-progress-label class="text-sm font-medium">Setup, step 3 of 5</ui-progress-label>
      <ui-progress-value class="ms-auto text-sm text-muted-foreground tabular-nums"></ui-progress-value>
      <ui-progress-track class="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
        <ui-progress-indicator class="h-full bg-primary transition-[width] motion-reduce:transition-none"></ui-progress-indicator>
      </ui-progress-track>
    </ui-progress>
  `
}

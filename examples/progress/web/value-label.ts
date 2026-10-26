import type { GaugeLabelDetails } from "@ui-sdk/core/progress"
import "@ui-sdk/web/progress"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-progress value="3" max="12" class="flex w-full max-w-xs flex-wrap gap-3 text-foreground">
      <ui-progress-label class="text-sm font-medium">Copying files</ui-progress-label>
      <ui-progress-value class="ms-auto text-sm text-muted-foreground tabular-nums">3 of 12</ui-progress-value>
      <ui-progress-track class="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
        <ui-progress-indicator class="h-full bg-primary transition-[width] motion-reduce:transition-none"></ui-progress-indicator>
      </ui-progress-track>
    </ui-progress>
  `
  const progress = root.querySelector("ui-progress") as HTMLElement & {
    getValueLabel: (value: number | null, details: GaugeLabelDetails) => string
  }
  progress.getValueLabel = (value, details) => `${value} of ${details.max} files, ${details.formatted}`
}

import "@ui-sdk/web/meter"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-meter value="42" class="flex w-full max-w-xs flex-wrap items-center gap-x-3 gap-y-2">
      <ui-meter-label class="text-sm font-medium">Battery</ui-meter-label>
      <ui-meter-value class="ms-auto text-sm text-muted-foreground tabular-nums"></ui-meter-value>
      <ui-meter-track class="h-2 w-full overflow-hidden rounded-full bg-muted">
        <ui-meter-indicator class="h-full bg-primary transition-[width]"></ui-meter-indicator>
      </ui-meter-track>
    </ui-meter>
  `
}

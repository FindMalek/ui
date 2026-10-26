import "@ui-sdk/web/meter"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-meter value="68" class="flex w-full max-w-xs flex-wrap gap-3 text-foreground">
      <ui-meter-label class="text-sm font-medium">Storage used</ui-meter-label>
      <ui-meter-value class="ms-auto text-sm text-muted-foreground tabular-nums"></ui-meter-value>
      <ui-meter-track class="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
        <ui-meter-indicator class="h-full bg-primary transition-[width] motion-reduce:transition-none"></ui-meter-indicator>
      </ui-meter-track>
    </ui-meter>
  `
}

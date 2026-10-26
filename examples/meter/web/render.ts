import "@ui-sdk/web/meter"

export function mount(root: HTMLElement) {
  const value = 91
  const color = value >= 90 ? "bg-destructive" : value >= 70 ? "bg-amber-500" : "bg-primary"
  root.innerHTML = `
    <ui-meter value="${value}" class="flex w-full max-w-xs flex-wrap items-center gap-x-3 gap-y-2">
      <ui-meter-label class="text-sm font-medium">Disk</ui-meter-label>
      <span class="ms-auto text-sm text-muted-foreground tabular-nums"><ui-meter-value></ui-meter-value> used</span>
      <ui-meter-track class="block h-2 w-full overflow-hidden rounded-full bg-muted">
        <ui-meter-indicator class="h-full ${color} transition-[width]"></ui-meter-indicator>
      </ui-meter-track>
    </ui-meter>
  `
}

import type { UiMeterElement } from "@ui-sdk/web"
import "@ui-sdk/web/meter"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-meter value="750" max="1000" class="flex w-full max-w-xs flex-wrap gap-3 text-foreground">
      <ui-meter-label class="text-sm font-medium">API requests</ui-meter-label>
      <ui-meter-value class="ms-auto text-sm text-muted-foreground tabular-nums">750 / 1,000</ui-meter-value>
      <ui-meter-track class="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
        <ui-meter-indicator class="h-full bg-primary transition-[width] motion-reduce:transition-none"></ui-meter-indicator>
      </ui-meter-track>
    </ui-meter>
  `
  const meter = root.querySelector("ui-meter") as UiMeterElement
  meter.getValueLabel = (value, details) => `${value} of ${details.max} requests, ${details.formatted}`
}

import type { UiMeterElement } from "@ui-sdk/web"
import "@ui-sdk/web/meter"

const meters = [
  { label: "Storage", value: 120, max: 250, format: { style: "unit", unit: "gigabyte" } },
  {
    label: "Budget",
    value: 1840,
    max: 2500,
    format: { style: "currency", currency: "USD", maximumFractionDigits: 0 },
  },
  { label: "Seats", value: 18, max: 25, format: (seats: number) => `${seats} of 25 seats` },
  { label: "Auslastung", value: 40, locale: "de-DE" },
] satisfies {
  label: string
  value: number
  max?: number
  format?: Intl.NumberFormatOptions | ((value: number) => string)
  locale?: string
}[]

export function mount(root: HTMLElement) {
  const items = meters.map(
    (meter) => `
      <ui-meter value="${meter.value}" ${"max" in meter ? `max="${meter.max}"` : ""} ${"locale" in meter ? `locale="${meter.locale}"` : ""} class="flex flex-wrap gap-3 text-foreground">
        <ui-meter-label class="text-sm font-medium">${meter.label}</ui-meter-label>
        <ui-meter-value class="ms-auto text-sm text-muted-foreground tabular-nums"></ui-meter-value>
        <ui-meter-track class="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
          <ui-meter-indicator class="h-full bg-primary transition-[width] motion-reduce:transition-none"></ui-meter-indicator>
        </ui-meter-track>
      </ui-meter>`,
  )
  root.innerHTML = `<div class="flex w-full max-w-xs flex-col gap-5 text-foreground">${items.join("")}</div>`
  root.querySelectorAll<UiMeterElement>("ui-meter").forEach((element, index) => {
    const meter = meters[index]
    if ("format" in meter) element.format = meter.format
  })
}

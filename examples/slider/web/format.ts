import type { NumberFormat } from "@ui-sdk/core/slider"
import "@ui-sdk/web/slider"

const sliders = [
  {
    label: "Budget",
    defaultValue: 40,
    max: 100,
    step: 1,
    format: { style: "currency", currency: "USD", maximumFractionDigits: 0 },
  },
  { label: "Opacity", defaultValue: 0.6, max: 1, step: 0.01, format: { style: "percent" } },
  { label: "Weight", defaultValue: 20, max: 50, step: 0.5, format: { style: "unit", unit: "kilogram" } },
  {
    label: "Duration",
    defaultValue: 90,
    max: 600,
    step: 15,
    format: (seconds: number) => `${Math.floor(seconds / 60)} min ${seconds % 60} s`,
  },
  {
    label: "Preis",
    defaultValue: 40,
    max: 100,
    step: 1,
    format: { style: "currency", currency: "EUR" },
    locale: "de-DE",
  },
] satisfies {
  label: string
  defaultValue: number
  max: number
  step: number
  format: Intl.NumberFormatOptions | ((value: number) => string)
  locale?: string
}[]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-xs flex-col gap-5">
      ${sliders
        .map(
          (slider) => `
            <ui-slider default-value="${slider.defaultValue}" max="${slider.max}" step="${slider.step}"${"locale" in slider ? ` locale="${slider.locale}"` : ""} class="flex flex-col gap-2">
              <div class="flex items-center justify-between text-sm">
                <span class="font-medium">${slider.label}</span>
                <ui-slider-value class="text-muted-foreground tabular-nums"></ui-slider-value>
              </div>
              <ui-slider-control class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
                <ui-slider-track class="h-1 w-full rounded-2xl bg-input/90">
                  <ui-slider-indicator class="rounded-2xl bg-primary"></ui-slider-indicator>
                  <ui-slider-thumb aria-label="${slider.label}" class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"></ui-slider-thumb>
                </ui-slider-track>
              </ui-slider-control>
            </ui-slider>`,
        )
        .join("")}
    </div>
  `
  root.querySelectorAll<HTMLElement & { format: NumberFormat }>("ui-slider").forEach((el, index) => {
    el.format = sliders[index].format
  })
}

export { mount }

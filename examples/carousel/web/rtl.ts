import "@ui-sdk/web/carousel"
import { ChevronLeft, ChevronRight, createElement } from "lucide"

const slides = [1, 2, 3, 4, 5]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div dir="rtl" class="mx-auto w-full max-w-xs">
      <ui-carousel aria-label="مميز" class="grid gap-3">
        <ui-carousel-viewport class="rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30">
          <ui-carousel-content class="gap-4">
            ${slides.map((slide) => `<ui-carousel-item class="basis-full"><div class="flex aspect-square items-center justify-center rounded-3xl bg-muted text-4xl font-semibold">${slide}</div></ui-carousel-item>`).join("")}
          </ui-carousel-content>
        </ui-carousel-viewport>
        <div class="flex items-center justify-between">
          <ui-carousel-previous>
            <button aria-label="الشريحة السابقة" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none">${createElement(ChevronLeft, { class: "size-4 rtl:-scale-x-100", "aria-hidden": "true" }).outerHTML}</button>
          </ui-carousel-previous>
          <ui-carousel-indicator-group aria-label="اختر شريحة" class="flex justify-center gap-2">
            ${slides.map((slide) => `<ui-carousel-indicator><button aria-label="الشريحة ${slide}" class="size-2 rounded-full bg-foreground/20 outline-none focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-primary cursor-default"></button></ui-carousel-indicator>`).join("")}
          </ui-carousel-indicator-group>
          <ui-carousel-next>
            <button aria-label="الشريحة التالية" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none">${createElement(ChevronRight, { class: "size-4 rtl:-scale-x-100", "aria-hidden": "true" }).outerHTML}</button>
          </ui-carousel-next>
        </div>
      </ui-carousel>
    </div>
  `
}

export { mount }

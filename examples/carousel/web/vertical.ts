import "@ui-sdk/web/carousel"
import { ChevronDown, ChevronUp, createElement } from "lucide"

const slides = [1, 2, 3, 4, 5]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-carousel aria-label="Featured" orientation="vertical" class="mx-auto grid w-full max-w-xs gap-3">
      <ui-carousel-viewport class="h-48 rounded-2xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30">
        <ui-carousel-content class="h-full gap-3">
          ${slides.map((slide) => `<ui-carousel-item class="basis-[calc((100%-0.75rem)/2)]"><div class="flex h-full items-center justify-center rounded-2xl bg-muted text-3xl font-semibold">${slide}</div></ui-carousel-item>`).join("")}
        </ui-carousel-content>
      </ui-carousel-viewport>
      <div class="flex justify-center gap-2">
        <ui-carousel-previous>
          <button aria-label="Previous slide" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none">${createElement(ChevronUp, { class: "size-4", "aria-hidden": "true" }).outerHTML}</button>
        </ui-carousel-previous>
        <ui-carousel-next>
          <button aria-label="Next slide" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none">${createElement(ChevronDown, { class: "size-4", "aria-hidden": "true" }).outerHTML}</button>
        </ui-carousel-next>
      </div>
    </ui-carousel>
  `
}

export { mount }

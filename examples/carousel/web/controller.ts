import "@ui-sdk/web/carousel"
import { ChevronLeft, ChevronRight, createElement } from "lucide"

const slides = [1, 2, 3, 4, 5]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="mx-auto grid w-full max-w-xs gap-3">
      <div class="flex items-center justify-between">
        <span class="text-sm font-medium">Featured</span>
        <div class="flex gap-2">
          <ui-carousel-previous for="featured-carousel">
            <button aria-label="Previous slide" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none">${createElement(ChevronLeft, { class: "size-4 rtl:-scale-x-100", "aria-hidden": "true" }).outerHTML}</button>
          </ui-carousel-previous>
          <ui-carousel-next for="featured-carousel">
            <button aria-label="Next slide" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none">${createElement(ChevronRight, { class: "size-4 rtl:-scale-x-100", "aria-hidden": "true" }).outerHTML}</button>
          </ui-carousel-next>
        </div>
      </div>
      <ui-carousel id="featured-carousel" aria-label="Featured" drag="false">
        <ui-carousel-viewport class="rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30">
          <ui-carousel-content class="gap-4">
            ${slides.map((slide) => `<ui-carousel-item class="basis-full"><div class="flex aspect-square items-center justify-center rounded-3xl bg-muted text-4xl font-semibold">${slide}</div></ui-carousel-item>`).join("")}
          </ui-carousel-content>
        </ui-carousel-viewport>
      </ui-carousel>
      <button type="button" data-show-last class="inline-flex h-8 gap-1.5 px-3 text-sm font-medium shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none">Show the last slide</button>
    </div>
  `
  const carousel = root.querySelector("ui-carousel")!
  root.querySelector("[data-show-last]")!.addEventListener("click", () => carousel.api.setPage(5))
}

export { mount }

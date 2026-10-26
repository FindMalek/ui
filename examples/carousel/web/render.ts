import "@ui-sdk/web/carousel"
import { ChevronLeft, ChevronRight, createElement } from "lucide"

const photos = [
  { name: "Dunes" },
  { name: "Forest" },
  { name: "Glacier" },
  { name: "Canyon" },
  { name: "Meadow" },
  { name: "Harbor" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-carousel aria-label="Photos" class="group/carousel mx-auto grid w-full max-w-xs gap-3">
      <ui-carousel-viewport class="rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30">
        <ui-carousel-content class="gap-4">
          ${photos.map((photo, index) => `<ui-carousel-item class="basis-full opacity-40 transition-opacity duration-300 data-in-view:opacity-100"><div class="flex items-center justify-center rounded-3xl text-lg font-medium aspect-[4/3] flex-col gap-1 bg-muted">${photo.name}<span class="text-xs font-normal text-muted-foreground">${index + 1} / ${photos.length}<span class="hidden in-data-active:inline"> · showing</span></span></div></ui-carousel-item>`).join("")}
        </ui-carousel-content>
      </ui-carousel-viewport>
      <div class="flex items-center justify-between">
        <ui-carousel-previous>
          <button class="inline-flex h-8 gap-1.5 px-3 text-sm font-medium shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none">${createElement(ChevronLeft, { class: "size-4 rtl:-scale-x-100", "aria-hidden": "true" }).outerHTML} Previous</button>
        </ui-carousel-previous>
        <ui-carousel-next>
          <button class="inline-flex h-8 gap-1.5 px-3 text-sm font-medium shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none">Next ${createElement(ChevronRight, { class: "size-4 rtl:-scale-x-100", "aria-hidden": "true" }).outerHTML}</button>
        </ui-carousel-next>
        <a href="https://example.com/gallery" class="inline-flex h-8 gap-1.5 px-3 text-sm font-medium shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none">See all photos</a>
      </div>
    </ui-carousel>
  `
  const next = root.querySelector<HTMLElement>("ui-carousel-next button")!
  root.querySelector("ui-carousel")!.addEventListener("pagechange", () => {
    if (document.activeElement !== next) return
    requestAnimationFrame(() => {
      if (next.hasAttribute("data-disabled"))
        root.querySelector<HTMLElement>('a[href="https://example.com/gallery"]')!.focus()
    })
  })
}

export { mount }

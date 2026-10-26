import "@ui-sdk/web/carousel"
import { Pause, Play, createElement } from "lucide"

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
    <ui-carousel aria-label="Photos" default-playing interval="4000" class="group/carousel mx-auto grid w-full max-w-xs gap-3">
      <ui-carousel-viewport class="rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30">
        <ui-carousel-content class="gap-4">
          ${photos.map((photo) => `<ui-carousel-item class="basis-full"><div class="flex items-center justify-center rounded-3xl text-lg font-medium aspect-[4/3] bg-muted">${photo.name}</div></ui-carousel-item>`).join("")}
        </ui-carousel-content>
      </ui-carousel-viewport>
      <div class="flex items-center gap-3">
        <ui-carousel-play-toggle>
          <button class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none">
            <span class="hidden group-data-playing:contents">${createElement(Pause, { class: "size-4 group-data-paused:opacity-50", "aria-hidden": "true" }).outerHTML}<span class="sr-only">Stop slide rotation</span></span>
            <span class="contents group-data-playing:hidden">${createElement(Play, { class: "size-4", "aria-hidden": "true" }).outerHTML}<span class="sr-only">Start slide rotation</span></span>
          </button>
        </ui-carousel-play-toggle>
        <ui-carousel-indicator-group aria-label="Choose a photo" class="flex flex-1 gap-1.5">
          ${photos.map((photo) => `<ui-carousel-indicator><button aria-label="${photo.name}" class="relative h-1.5 flex-1 overflow-hidden rounded-full bg-input outline-none focus-visible:ring-3 focus-visible:ring-ring/30 cursor-default"><span class="absolute inset-0 hidden origin-left bg-primary group-data-playing/carousel:animate-[carousel-progress_var(--carousel-interval)_linear] group-data-paused/carousel:[animation-play-state:paused] in-data-selected:block rtl:origin-right cursor-default"></span></button></ui-carousel-indicator>`).join("")}
        </ui-carousel-indicator-group>
      </div>
      <p aria-live="polite" class="text-center text-sm text-muted-foreground"></p>
    </ui-carousel>
  `
  const output = root.querySelector("p")!
  root.querySelector("ui-carousel")!.addEventListener("playingchange", (event) => {
    output.textContent = `${event.detail.value ? "Playing" : "Stopped"} (${event.detail.reason})`
  })
}

export { mount }

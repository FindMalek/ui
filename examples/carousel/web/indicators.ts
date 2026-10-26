import "@ui-sdk/web/carousel"

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
    <ui-carousel aria-label="Photos" class="mx-auto grid w-full max-w-xs gap-4">
      <ui-carousel-viewport class="rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30">
        <ui-carousel-content class="gap-4">
          ${photos.map((photo) => `<ui-carousel-item class="basis-full"><div class="flex items-center justify-center rounded-3xl text-lg font-medium aspect-[4/3] bg-muted">${photo.name}</div></ui-carousel-item>`).join("")}
        </ui-carousel-content>
      </ui-carousel-viewport>
      <ui-carousel-indicator-group aria-label="Choose a photo" class="flex justify-center gap-2">
        ${photos.map((photo) => `<ui-carousel-indicator><button aria-label="${photo.name}" class="size-2 rounded-full bg-foreground/20 outline-none focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-primary cursor-default"></button></ui-carousel-indicator>`).join("")}
      </ui-carousel-indicator-group>
    </ui-carousel>
  `
}

export { mount }

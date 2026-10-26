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
    <div class="mx-auto grid w-full max-w-sm gap-3">
      <ui-carousel aria-label="Photos">
        <ui-carousel-viewport class="rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30">
          <ui-carousel-content class="gap-4">
            ${photos.map((photo) => `<ui-carousel-item class="basis-full"><div class="flex items-center justify-center rounded-3xl text-lg font-medium aspect-video bg-muted">${photo.name}</div></ui-carousel-item>`).join("")}
          </ui-carousel-content>
        </ui-carousel-viewport>
      </ui-carousel>
      <ui-carousel aria-label="Thumbnails" drag-free slides-per-page="auto">
        <ui-carousel-viewport class="rounded-xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30">
          <ui-carousel-content class="gap-2">
            ${photos.map((photo, index) => `<ui-carousel-item aria-label="${photo.name}" class="basis-1/4"><button type="button" data-page="${index + 1}" aria-pressed="${index === 0}" class="flex cursor-default aspect-square w-full items-center justify-center rounded-xl border-2 border-transparent text-xs font-medium opacity-60 outline-none transition-opacity focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset aria-pressed:border-primary aria-pressed:opacity-100 bg-muted motion-reduce:transition-none">${photo.name}</button></ui-carousel-item>`).join("")}
          </ui-carousel-content>
        </ui-carousel-viewport>
      </ui-carousel>
    </div>
  `
  const gallery = root.querySelector("ui-carousel")!
  const thumbnails = [...root.querySelectorAll<HTMLButtonElement>("button[data-page]")]
  const show = (page: number) => {
    for (const thumbnail of thumbnails)
      thumbnail.setAttribute("aria-pressed", String(thumbnail.dataset.page === String(page)))
    thumbnails[page - 1]?.scrollIntoView({ block: "nearest", inline: "nearest" })
  }
  for (const thumbnail of thumbnails)
    thumbnail.addEventListener("click", () => (gallery.page = Number(thumbnail.dataset.page)))
  gallery.addEventListener("pagechange", (event) => show(event.detail.value))
}

export { mount }

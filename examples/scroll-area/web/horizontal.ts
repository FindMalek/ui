import "@ui-sdk/web/scroll-area"

const artworks = [
  { title: "Dunes at dusk" },
  { title: "Harbor fog" },
  { title: "Moss study" },
  { title: "Night market" },
  { title: "Salt flats" },
  { title: "Copper roofs" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-scroll-area class="w-96 max-w-full rounded-2xl border border-border whitespace-nowrap">
      <ui-scroll-area-viewport class="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">
        <ui-scroll-area-content class="flex w-max gap-4 p-4">
          ${artworks
            .map(
              (artwork) => `
                <figure class="shrink-0">
                  <div class="h-40 w-32 rounded-2xl bg-muted"></div>
                  <figcaption class="pt-2 text-xs text-muted-foreground">${artwork.title}</figcaption>
                </figure>`,
            )
            .join("")}
        </ui-scroll-area-content>
      </ui-scroll-area-viewport>
      <ui-scroll-area-scrollbar orientation="horizontal" class="flex h-2.5 flex-col border-t border-t-transparent p-px opacity-0 transition-opacity duration-150 data-visible:opacity-100 motion-reduce:transition-none">
        <ui-scroll-area-thumb class="relative flex-1 rounded-full bg-border"></ui-scroll-area-thumb>
      </ui-scroll-area-scrollbar>
    </ui-scroll-area>
  `
}

export { mount }

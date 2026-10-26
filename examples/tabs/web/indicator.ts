import "@ui-sdk/web/tabs"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-md flex-col gap-4">
      <ui-tabs class="flex w-full max-w-md gap-3 data-[orientation=horizontal]:flex-col" default-value="music" orientation="horizontal">
        <ui-tabs-list class="relative flex w-fit gap-0.5 rounded-2xl bg-muted p-[3px] text-muted-foreground data-[orientation=vertical]:flex-col" aria-label="Library">
          <ui-tabs-tab value="music">
            <button type="button" class="relative z-10 inline-flex h-6.5 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-2.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50">Music</button>
          </ui-tabs-tab>
          <ui-tabs-tab value="podcasts">
            <button type="button" class="relative z-10 inline-flex h-6.5 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-2.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50">Podcasts</button>
          </ui-tabs-tab>
          <ui-tabs-tab value="audiobooks">
            <button type="button" class="relative z-10 inline-flex h-6.5 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-2.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50">Audiobooks</button>
          </ui-tabs-tab>
          <ui-tabs-indicator class="pointer-events-none absolute top-(--active-tab-top) left-(--active-tab-left) h-(--active-tab-height) w-(--active-tab-width) rounded-2xl bg-background transition-[top,left,width,height] duration-300 ease-out data-[activation-direction=none]:transition-none motion-reduce:transition-none"></ui-tabs-indicator>
        </ui-tabs-list>
        <ui-tabs-panel class="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30" value="music">312 songs, 24 albums.</ui-tabs-panel>
        <ui-tabs-panel class="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30" value="podcasts">8 shows, 3 new episodes.</ui-tabs-panel>
        <ui-tabs-panel class="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30" value="audiobooks">2 books in progress.</ui-tabs-panel>
      </ui-tabs>
      <label class="flex items-center gap-2 text-sm leading-5 text-muted-foreground">
        <input class="m-0 size-4 accent-primary outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid focus-visible:outline-ring" type="checkbox" />
        Vertical
      </label>
    </div>
  `
  const tabs = root.querySelector("ui-tabs")!
  root.querySelector("input")!.addEventListener("change", (event) => {
    tabs.setAttribute("orientation", (event.target as HTMLInputElement).checked ? "vertical" : "horizontal")
  })
}

export { mount }

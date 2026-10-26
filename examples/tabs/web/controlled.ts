import "@ui-sdk/web/tabs"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-md flex-col gap-3">
      <ui-tabs class="flex flex-col gap-2" default-value="inbox">
        <ui-tabs-list class="relative inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground" aria-label="Mail">
          <ui-tabs-tab value="inbox">
            <button type="button" class="relative z-10 inline-flex h-6.5 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-2.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50">Inbox</button>
          </ui-tabs-tab>
          <ui-tabs-tab value="drafts">
            <button type="button" class="relative z-10 inline-flex h-6.5 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-2.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50">Drafts</button>
          </ui-tabs-tab>
          <ui-tabs-tab value="sent">
            <button type="button" class="relative z-10 inline-flex h-6.5 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-2.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50">Sent</button>
          </ui-tabs-tab>
          <ui-tabs-indicator class="pointer-events-none absolute top-(--active-tab-top) left-(--active-tab-left) h-(--active-tab-height) w-(--active-tab-width) rounded-2xl bg-background transition-[top,left,width,height] duration-300 ease-out data-[activation-direction=none]:transition-none motion-reduce:transition-none"></ui-tabs-indicator>
        </ui-tabs-list>
        <ui-tabs-panel class="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30" value="inbox">No new mail.</ui-tabs-panel>
        <ui-tabs-panel class="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30" value="drafts">Two drafts.</ui-tabs-panel>
        <ui-tabs-panel class="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30" value="sent">Sent this week: 12.</ui-tabs-panel>
      </ui-tabs>
      <div class="flex flex-wrap items-center gap-4">
        <button type="button" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50">Show sent mail</button>
      </div>
      <output class="m-0 block min-h-10 text-sm leading-5 text-muted-foreground">Selected: inbox</output>
    </div>
  `
  const tabs = root.querySelector("ui-tabs") as HTMLElement & { api: { select: (value: string) => void } }
  root.querySelector("ui-tabs + div button")!.addEventListener("click", () => tabs.api.select("sent"))
  tabs.addEventListener("valuechange", (event) => {
    const { value, reason } = (event as CustomEvent<{ value: string; reason: string }>).detail
    root.querySelector("output")!.textContent = `Selected: ${value}, last change: ${reason}`
  })
}

export { mount }

import "@ui-sdk/web/drawer"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex items-center gap-3">
      <button type="button" class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">Photo options</button>
      <span role="status" class="text-sm text-muted-foreground block min-h-5"></span>
      <ui-drawer>
        <ui-drawer-backdrop class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm"></ui-drawer-backdrop>
        <ui-drawer-content class="mx-auto flex w-full max-w-md flex-col gap-2 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] text-sm outline-none">
          <div class="overflow-hidden rounded-[min(var(--radius-4xl),24px)] bg-popover/95 text-center text-popover-foreground shadow-xl ring-1 ring-foreground/5 backdrop-blur">
            <div class="flex flex-col gap-0.5 px-4 py-3">
              <ui-drawer-title class="text-xs font-medium text-muted-foreground">Beach.jpg</ui-drawer-title>
              <ui-drawer-description class="text-xs text-muted-foreground">Taken today at 9:41.</ui-drawer-description>
            </div>
            <div class="flex flex-col divide-y divide-border border-t border-border">
              <ui-drawer-close value="share"><button class="h-8 cursor-default text-sm outline-none hover:bg-muted focus-visible:bg-muted">Share</button></ui-drawer-close>
              <ui-drawer-close value="duplicate"><button class="h-8 cursor-default text-sm outline-none hover:bg-muted focus-visible:bg-muted">Duplicate</button></ui-drawer-close>
              <ui-drawer-close value="delete"><button class="h-8 cursor-default text-sm text-foreground outline-none hover:bg-foreground/10 focus-visible:bg-foreground/10">Delete</button></ui-drawer-close>
            </div>
          </div>
          <ui-drawer-close value="cancel"><button class="h-8 cursor-default rounded-[min(var(--radius-4xl),24px)] bg-popover text-sm font-medium text-popover-foreground ring-1 ring-foreground/5 outline-none hover:bg-muted focus-visible:bg-muted">Cancel</button></ui-drawer-close>
        </ui-drawer-content>
      </ui-drawer>
    </div>
  `
  const drawer = root.querySelector("ui-drawer")!
  const status = root.querySelector('[role="status"]')!
  root.querySelector("button")!.addEventListener("click", async () => {
    const { returnValue = "cancel" } = await drawer.api.open()
    status.textContent = returnValue === "cancel" ? "Canceled" : `Chose ${returnValue}`
  })
}

export { mount }

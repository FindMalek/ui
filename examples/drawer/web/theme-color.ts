import "@ui-sdk/web/drawer"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="grid gap-3">
      <ui-drawer theme-color>
        <ui-drawer-trigger><button class="inline-flex cursor-default h-8 w-fit shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Dim the toolbar</button></ui-drawer-trigger>
        <ui-drawer-backdrop class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm"></ui-drawer-backdrop>
        <ui-drawer-content class="relative mx-auto flex max-h-[85dvh] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit">
          <div aria-hidden="true" class="mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted"></div>
          <div class="flex flex-col gap-0.5 p-4 text-center md:gap-1.5 md:text-start">
            <ui-drawer-title class="text-base font-medium text-foreground">Theme color</ui-drawer-title>
            <ui-drawer-description class="text-sm text-muted-foreground">On an iPhone, Safari's toolbars dim with the page. The drawer writes the color where motion starts and ends, never on every frame.</ui-drawer-description>
          </div>
          <div class="flex flex-col gap-2 p-4 pt-0 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <ui-drawer-close><button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Close</button></ui-drawer-close>
          </div>
        </ui-drawer-content>
      </ui-drawer>
      <p class="flex items-center gap-2 font-mono text-xs text-muted-foreground">
        <span aria-hidden="true" data-swatch class="size-4 rounded-md border border-border"></span>
        <span>theme-color: <span data-color></span></span>
      </p>
    </div>
  `
  const existing = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
  const meta =
    existing ?? Object.assign(document.createElement("meta"), { name: "theme-color", content: "#ffffff" })
  if (!existing) document.head.append(meta)
  const swatch = root.querySelector<HTMLElement>("[data-swatch]")!
  const label = root.querySelector("[data-color]")!
  const read = () => {
    swatch.style.background = meta.content
    label.textContent = meta.content
  }
  read()
  const observer = new MutationObserver(read)
  observer.observe(meta, { attributes: true, attributeFilter: ["content"] })
  return () => {
    observer.disconnect()
    if (!existing) meta.remove()
  }
}

export { mount }

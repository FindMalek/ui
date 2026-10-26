import "@ui-sdk/web/drawer"

const places = [
  { name: "Blue Bottle Coffee", detail: "Coffee · 0.2 mi" },
  { name: "Tartine Bakery", detail: "Bakery · 0.4 mi" },
  { name: "Dolores Park", detail: "Park · 0.5 mi" },
  { name: "Mission Dolores", detail: "Landmark · 0.6 mi" },
  { name: "Ritual Coffee Roasters", detail: "Coffee · 0.7 mi" },
  { name: "Bi-Rite Creamery", detail: "Ice cream · 0.7 mi" },
  { name: "Alamo Square", detail: "Park · 1.1 mi" },
  { name: "The Castro Theatre", detail: "Cinema · 1.2 mi" },
  { name: "Ferry Building", detail: "Market · 2.3 mi" },
  { name: "Coit Tower", detail: "Landmark · 2.9 mi" },
  { name: "Golden Gate Park", detail: "Park · 3.0 mi" },
  { name: "Lands End", detail: "Trail · 5.4 mi" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-drawer snap-points="0.25,0.5,1" default-snap-point="0.5" expand-on-scroll>
      <ui-drawer-trigger><button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Find a place</button></ui-drawer-trigger>
      <ui-drawer-backdrop class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm"></ui-drawer-backdrop>
      <ui-drawer-content class="relative mx-auto flex h-[calc(100dvh-3rem)] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit">
        <ui-drawer-handle><button aria-label="Resize" class="relative mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted outline-none after:absolute after:-inset-x-2 after:-inset-y-3 focus-visible:ring-3 focus-visible:ring-ring/30 cursor-default"></button></ui-drawer-handle>
        <div class="flex flex-col gap-0.5 p-4 text-center md:gap-1.5 md:text-start">
          <ui-drawer-title class="text-base font-medium text-foreground">Places nearby</ui-drawer-title>
          <ui-drawer-description class="text-sm text-muted-foreground">Drag the drawer, or press the handle, to see more.</ui-drawer-description>
        </div>
        <ul class="min-h-0 flex-1 overflow-y-auto px-2 pb-[max(1rem,env(safe-area-inset-bottom))]">
          ${places
            .map(
              (place) => `<li class="flex flex-col gap-0.5 rounded-xl px-2 py-1.5">
                <span class="font-medium">${place.name}</span>
                <span class="text-xs text-muted-foreground">${place.detail}</span>
              </li>`,
            )
            .join("")}
        </ul>
      </ui-drawer-content>
    </ui-drawer>
  `
}

export { mount }

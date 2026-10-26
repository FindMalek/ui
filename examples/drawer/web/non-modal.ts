import "@ui-sdk/web/drawer"

const places = [
  { name: "Blue Bottle Coffee", detail: "Coffee · 0.2 mi" },
  { name: "Tartine Bakery", detail: "Bakery · 0.4 mi" },
  { name: "Dolores Park", detail: "Park · 0.5 mi" },
  { name: "Mission Dolores", detail: "Landmark · 0.6 mi" },
  { name: "Ritual Coffee Roasters", detail: "Coffee · 0.7 mi" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="grid w-full max-w-sm gap-3">
      <ul aria-label="Places" class="divide-y divide-border overflow-hidden rounded-2xl border border-border">
        ${places
          .map(
            (place) => `<li>
              <button type="button" data-place="${place.name}" class="flex w-full items-center justify-between px-3 py-2 text-start text-sm outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset aria-pressed:bg-muted/50 aria-pressed:font-medium cursor-default">
                ${place.name}
                <span class="text-xs font-normal text-muted-foreground">${place.detail}</span>
              </button>
            </li>`,
          )
          .join("")}
      </ul>
      <ui-drawer snap-points="0.2,0.6" modal-above="0.2">
        <ui-drawer-trigger><button class="inline-flex cursor-default h-8 w-fit shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Get directions</button></ui-drawer-trigger>
        <ui-drawer-backdrop class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm"></ui-drawer-backdrop>
        <ui-drawer-content class="group relative mx-auto flex h-[calc(100dvh-3rem)] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit data-interactive:shadow-lg">
          <ui-drawer-handle><button aria-label="Resize" class="relative mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted outline-none after:absolute after:-inset-x-2 after:-inset-y-3 focus-visible:ring-3 focus-visible:ring-ring/30 cursor-default"></button></ui-drawer-handle>
          <div class="flex items-start justify-between gap-4 p-4">
            <div class="flex flex-col gap-0.5 md:gap-1.5">
              <ui-drawer-title class="text-base font-medium text-foreground"></ui-drawer-title>
              <ui-drawer-description class="text-sm text-muted-foreground">
                <span class="hidden group-data-interactive:inline">The page behind stays usable. Pick another place.</span>
                <span class="group-data-interactive:hidden">Modal now. Drag it down to use the page again.</span>
              </ui-drawer-description>
            </div>
            <ui-drawer-close><button class="inline-flex cursor-default h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Done</button></ui-drawer-close>
          </div>
          <ol class="flex flex-col gap-3 px-4 text-muted-foreground">
            <li>Head north on Valencia St.</li>
            <li>Turn left onto 18th St.</li>
            <li data-arrive></li>
          </ol>
        </ui-drawer-content>
      </ui-drawer>
    </div>
  `
  const title = root.querySelector("ui-drawer-title")!
  const arrival = root.querySelector("[data-arrive]")!
  const buttons = [...root.querySelectorAll<HTMLButtonElement>("[data-place]")]
  const select = (destination: string) => {
    for (const button of buttons)
      button.setAttribute("aria-pressed", String(button.dataset.place === destination))
    title.textContent = `To ${destination}`
    arrival.textContent = `Arrive at ${destination}.`
  }
  for (const button of buttons) button.addEventListener("click", () => select(button.dataset.place!))
  select(places[0].name)
}

export { mount }

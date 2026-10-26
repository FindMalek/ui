import {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHandle,
  DrawerTitle,
  DrawerTrigger,
} from "@ui-sdk/solid/drawer"
import { createSignal, For } from "solid-js"

const places = [
  { name: "Blue Bottle Coffee", detail: "Coffee · 0.2 mi" },
  { name: "Tartine Bakery", detail: "Bakery · 0.4 mi" },
  { name: "Dolores Park", detail: "Park · 0.5 mi" },
  { name: "Mission Dolores", detail: "Landmark · 0.6 mi" },
  { name: "Ritual Coffee Roasters", detail: "Coffee · 0.7 mi" },
]

function Example() {
  const [destination, setDestination] = createSignal(places[0].name)
  return (
    <div class="grid w-full max-w-sm gap-3">
      <ul aria-label="Places" class="divide-y divide-border overflow-hidden rounded-2xl border border-border">
        <For each={places}>
          {(place) => (
            <li>
              <button
                type="button"
                aria-pressed={destination() === place.name ? "true" : "false"}
                onClick={() => setDestination(place.name)}
                class="flex w-full items-center justify-between px-3 py-2 text-start text-sm outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset aria-pressed:bg-muted/50 aria-pressed:font-medium"
              >
                {place.name}
                <span class="text-xs font-normal text-muted-foreground">{place.detail}</span>
              </button>
            </li>
          )}
        </For>
      </ul>
      <Drawer snapPoints={[0.2, 0.6]} modalAbove={0.2}>
        <DrawerTrigger class="inline-flex cursor-default h-8 w-fit shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
          Get directions
        </DrawerTrigger>
        <DrawerBackdrop class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm" />
        <DrawerContent class="group relative mx-auto flex h-[calc(100dvh-3rem)] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit data-interactive:shadow-lg">
          {(state) => (
            <>
              <DrawerHandle
                aria-label="Resize"
                class="relative mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted outline-none after:absolute after:-inset-x-2 after:-inset-y-3 focus-visible:ring-3 focus-visible:ring-ring/30 cursor-default"
              />
              <div class="flex items-start justify-between gap-4 p-4">
                <div class="flex flex-col gap-0.5 md:gap-1.5">
                  <DrawerTitle class="text-base font-medium text-foreground">To {destination()}</DrawerTitle>
                  <DrawerDescription class="text-sm text-muted-foreground">
                    {state.interactive
                      ? "The page behind stays usable. Pick another place."
                      : "Modal now. Drag it down to use the page again."}
                  </DrawerDescription>
                </div>
                <DrawerClose class="inline-flex cursor-default h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
                  Done
                </DrawerClose>
              </div>
              <ol class="flex flex-col gap-3 px-4 text-muted-foreground">
                <li>Head north on Valencia St.</li>
                <li>Turn left onto 18th St.</li>
                <li>Arrive at {destination()}.</li>
              </ol>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export { Example }

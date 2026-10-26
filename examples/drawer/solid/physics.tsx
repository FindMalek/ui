import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerDescription,
  DrawerHandle,
  DrawerTitle,
  DrawerTrigger,
  sheetPhysics,
  type SheetPhysics,
} from "@ui-sdk/solid/drawer"
import { createSignal, For } from "solid-js"

const presets: { label: string; physics: Partial<SheetPhysics> }[] = [
  { label: "iOS", physics: sheetPhysics.ios },
  { label: "Bouncy", physics: { dampingRatio: 0.6, momentumDampingRatio: 0.5 } },
  { label: "Slow", physics: { response: 0.7 } },
  { label: "Loose", physics: { rubberBand: 0.6, rubberBandDimension: null } },
]

function Example() {
  const [preset, setPreset] = createSignal(presets[1])
  return (
    <div class="grid gap-4">
      <fieldset class="flex flex-wrap gap-4 text-sm">
        <legend class="sr-only">physics</legend>
        <For each={presets}>
          {(option) => (
            <label class="flex items-center gap-2">
              <input
                type="radio"
                name="drawer-physics"
                checked={preset() === option}
                onChange={() => setPreset(option)}
                class="size-4 cursor-default accent-primary"
              />
              {option.label}
            </label>
          )}
        </For>
      </fieldset>
      <Drawer physics={preset().physics} snapPoints={[0.4, 1]} driver="pointer">
        <DrawerTrigger class="inline-flex cursor-default h-8 w-fit shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
          Try the physics
        </DrawerTrigger>
        <DrawerBackdrop class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm" />
        <DrawerContent class="relative mx-auto flex h-[calc(100dvh-3rem)] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit">
          <DrawerHandle
            aria-label="Resize"
            class="relative mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted outline-none after:absolute after:-inset-x-2 after:-inset-y-3 focus-visible:ring-3 focus-visible:ring-ring/30 cursor-default"
          />
          <div class="flex flex-col gap-0.5 p-4 text-center md:gap-1.5 md:text-start">
            <DrawerTitle class="text-base font-medium text-foreground">{preset().label}</DrawerTitle>
            <DrawerDescription class="text-sm text-muted-foreground">
              Fling it up and down, and pull it past the top.
            </DrawerDescription>
          </div>
          <pre class="mx-4 overflow-x-auto rounded-2xl bg-muted p-3 font-mono text-xs leading-5 text-muted-foreground">
            {JSON.stringify({ ...sheetPhysics.ios, ...preset().physics }, null, 2)}
          </pre>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export { Example }

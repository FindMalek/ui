import "@ui-sdk/web/drawer"
import { sheetPhysics, type SheetPhysics } from "@ui-sdk/web"

const presets: { label: string; physics: Partial<SheetPhysics> }[] = [
  { label: "iOS", physics: sheetPhysics.ios },
  { label: "Bouncy", physics: { dampingRatio: 0.6, momentumDampingRatio: 0.5 } },
  { label: "Slow", physics: { response: 0.7 } },
  { label: "Loose", physics: { rubberBand: 0.6, rubberBandDimension: null } },
]

let count = 0

function mount(root: HTMLElement) {
  const name = `drawer-physics-${++count}`
  root.innerHTML = `
    <div class="grid gap-4">
      <fieldset class="flex flex-wrap gap-4 text-sm">
        <legend class="sr-only">physics</legend>
        ${presets.map((preset, index) => `<label class="flex items-center gap-2"><input type="radio" name="${name}" value="${index}" ${index === 1 ? "checked" : ""} class="size-4 cursor-default accent-primary" />${preset.label}</label>`).join("")}
      </fieldset>
      <ui-drawer snap-points="0.4,1" driver="pointer">
        <ui-drawer-trigger><button class="inline-flex cursor-default h-8 w-fit shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Try the physics</button></ui-drawer-trigger>
        <ui-drawer-backdrop class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm"></ui-drawer-backdrop>
        <ui-drawer-content class="relative mx-auto flex h-[calc(100dvh-3rem)] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit">
          <ui-drawer-handle><button aria-label="Resize" class="relative mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted outline-none after:absolute after:-inset-x-2 after:-inset-y-3 focus-visible:ring-3 focus-visible:ring-ring/30 cursor-default"></button></ui-drawer-handle>
          <div class="flex flex-col gap-0.5 p-4 text-center md:gap-1.5 md:text-start">
            <ui-drawer-title class="text-base font-medium text-foreground"></ui-drawer-title>
            <ui-drawer-description class="text-sm text-muted-foreground">Fling it up and down, and pull it past the top.</ui-drawer-description>
          </div>
          <pre class="mx-4 overflow-x-auto rounded-2xl bg-muted p-3 font-mono text-xs leading-5 text-muted-foreground"></pre>
        </ui-drawer-content>
      </ui-drawer>
    </div>
  `
  const drawer = root.querySelector<HTMLElement & { physics?: Partial<SheetPhysics> }>("ui-drawer")!
  const select = (preset: (typeof presets)[number]) => {
    drawer.physics = preset.physics
    root.querySelector("ui-drawer-title")!.textContent = preset.label
    root.querySelector("pre")!.textContent = JSON.stringify(
      { ...sheetPhysics.ios, ...preset.physics },
      null,
      2,
    )
  }
  for (const radio of root.querySelectorAll<HTMLInputElement>('input[type="radio"]'))
    radio.addEventListener("change", () => select(presets[Number(radio.value)]))
  select(presets[1])
}

export { mount }

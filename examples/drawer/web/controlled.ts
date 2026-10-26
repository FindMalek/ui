import "@ui-sdk/web/drawer"
import type { SnapPoint } from "@ui-sdk/web/drawer"

const snapPoints: SnapPoint[] = [0.25, 0.5, 1]

let count = 0

function mount(root: HTMLElement) {
  const name = `controlled-snap-point-${++count}`
  root.innerHTML = `
    <div class="grid w-full max-w-md gap-3">
      <div class="flex flex-wrap items-center gap-4 text-sm">
        <label class="flex items-center gap-2"><input type="checkbox" data-open class="size-4 cursor-default accent-primary" />open</label>
        <fieldset class="flex items-center gap-3">
          <legend class="sr-only">snapPoint</legend>
          ${snapPoints.map((point) => `<label class="flex items-center gap-1.5"><input type="radio" name="${name}" value="${point}" class="size-4 cursor-default accent-primary" />${point}</label>`).join("")}
        </fieldset>
      </div>
      <ui-drawer snap-points="${snapPoints.join(",")}" snap-point="0.5">
        <ui-drawer-trigger><button class="inline-flex cursor-default h-8 w-fit shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Open</button></ui-drawer-trigger>
        <ui-drawer-backdrop class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm"></ui-drawer-backdrop>
        <ui-drawer-content class="relative mx-auto flex h-[calc(100dvh-3rem)] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit">
          <ui-drawer-handle><button aria-label="Resize" class="relative mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted outline-none after:absolute after:-inset-x-2 after:-inset-y-3 focus-visible:ring-3 focus-visible:ring-ring/30 cursor-default"></button></ui-drawer-handle>
          <div class="flex flex-col gap-0.5 p-4 text-center md:gap-1.5 md:text-start">
            <ui-drawer-title class="text-base font-medium text-foreground">Controlled</ui-drawer-title>
            <ui-drawer-description class="text-sm text-muted-foreground"></ui-drawer-description>
          </div>
          <div class="flex flex-wrap justify-center gap-2 px-4 md:justify-start">
            ${snapPoints.map((point) => `<button type="button" data-snap="${point}" class="inline-flex cursor-default h-8 min-w-8 items-center justify-center gap-1 rounded-2xl border border-input bg-transparent px-2 text-sm font-medium outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-muted motion-reduce:transition-none">${point}</button>`).join("")}
            <ui-drawer-close><button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Close</button></ui-drawer-close>
          </div>
        </ui-drawer-content>
      </ui-drawer>
      <p class="font-mono text-xs text-muted-foreground" data-state></p>
      <ol class="h-24 overflow-y-auto rounded-2xl bg-muted p-2 font-mono text-xs leading-5 text-muted-foreground"></ol>
    </div>
  `
  const drawer = root.querySelector("ui-drawer")!
  const checkbox = root.querySelector<HTMLInputElement>("[data-open]")!
  const radios = [...root.querySelectorAll<HTMLInputElement>('input[type="radio"]')]
  const buttons = [...root.querySelectorAll<HTMLButtonElement>("[data-snap]")]
  const description = root.querySelector("ui-drawer-description")!
  const state = root.querySelector("[data-state]")!
  const log = root.querySelector("ol")!
  let snapPoint: SnapPoint = 0.5

  const write = (line: string) => {
    log.prepend(Object.assign(document.createElement("li"), { textContent: line }))
    while (log.children.length > 8) log.lastElementChild!.remove()
  }
  const show = () => {
    const open = drawer.open
    checkbox.checked = open
    for (const radio of radios) radio.checked = radio.value === String(snapPoint)
    for (const button of buttons)
      button.setAttribute("aria-pressed", String(button.dataset.snap === String(snapPoint)))
    description.textContent = `Open at ${snapPoint}. Drag it, or pick a size, and watch the log.`
    state.textContent = `open: ${open}, snapPoint: ${snapPoint}`
  }
  const moveTo = (point: SnapPoint) => {
    drawer.snapPoint = point
    snapPoint = drawer.snapPoint ?? point
    show()
  }

  checkbox.addEventListener("change", () => (drawer.open = checkbox.checked))
  for (const radio of radios) radio.addEventListener("change", () => moveTo(Number(radio.value)))
  for (const button of buttons) button.addEventListener("click", () => moveTo(Number(button.dataset.snap)))
  drawer.addEventListener("openchange", (event) => {
    const { value, reason } = event.detail
    write(`openchange(${value}, "${reason}")`)
    queueMicrotask(() => {
      if (value) snapPoint = drawer.snapPoint ?? snapPoint
      show()
    })
  })
  drawer.addEventListener("openchangecomplete", (event) => write(`openchangecomplete(${event.detail.value})`))
  drawer.addEventListener("snappointchange", (event) => {
    const { value, reason } = event.detail
    write(`snappointchange(${value}, "${reason}")`)
    snapPoint = value
    queueMicrotask(show)
  })
  show()
}

export { mount }

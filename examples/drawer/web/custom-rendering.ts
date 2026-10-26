import "@ui-sdk/web/drawer"
import type { SnapPoint } from "@ui-sdk/web"

type DrawerElement = HTMLElement & { snapPoint: SnapPoint | null }

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-drawer snap-points="0.5,1">
      <ui-drawer-trigger shortcut="mod+j">
        <button class="group inline-flex h-8 shrink-0 items-center justify-center gap-2 rounded-2xl border border-border bg-background bg-clip-padding ps-3 pe-1.5 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">
          <span class="group-data-open:hidden">View details</span><span class="hidden group-data-open:inline">Viewing</span>
          <ui-drawer-shortcut class="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-muted px-1 font-sans text-xs font-medium text-muted-foreground"></ui-drawer-shortcut>
        </button>
      </ui-drawer-trigger>
      <ui-drawer-backdrop class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm data-closed:pointer-events-none data-nested:bg-black/15 data-nested-open:bg-black/15"></ui-drawer-backdrop>
      <ui-drawer-content class="relative mx-auto flex h-[calc(100dvh-3rem)] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit data-dragging:cursor-grabbing data-dragging:shadow-2xl dark:ring-foreground/10">
        <ui-drawer-handle><button aria-label="Resize" class="relative mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted outline-none after:absolute after:-inset-x-2 after:-inset-y-3 focus-visible:ring-3 focus-visible:ring-ring/30"></button></ui-drawer-handle>
        <div class="flex flex-col gap-0.5 p-4 text-center md:gap-1.5 md:text-start">
          <ui-drawer-title as-child><h3 class="text-base font-medium text-foreground">Details</h3></ui-drawer-title>
          <ui-drawer-description class="text-sm text-muted-foreground"></ui-drawer-description>
        </div>
        <div class="flex flex-col gap-2 p-4 pt-0">
          <ui-drawer-close><a href="https://example.com/details" class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50">Open the full page</a></ui-drawer-close>
        </div>
      </ui-drawer-content>
    </ui-drawer>
  `
  const drawer = root.querySelector<DrawerElement>("ui-drawer")!
  const content = root.querySelector<HTMLElement>("ui-drawer-content")!
  const description = root.querySelector("ui-drawer-description")!
  const describe = () => {
    if (drawer.snapPoint === null) return
    description.textContent = content.hasAttribute("data-dragging")
      ? "Dragging."
      : content.hasAttribute("data-expanded")
        ? "Expanded to its largest snap point."
        : `Resting at ${drawer.snapPoint}, from the ${content.dataset.side}.`
  }
  new MutationObserver(describe).observe(content, {
    attributes: true,
    attributeFilter: ["data-dragging", "data-expanded", "data-snap-point", "data-side"],
  })
}

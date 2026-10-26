import "@ui-sdk/web/collapsible"
import { ChevronRight, createElement } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-collapsible class="group/card w-full max-w-sm rounded-3xl border border-border bg-card p-2 text-sm text-card-foreground transition-colors data-open:bg-muted/50">
      <h3 class="flex items-center justify-between gap-4 text-sm font-normal">
        <ui-collapsible-trigger>
          <button class="group flex h-8 items-center gap-1.5 rounded-2xl border border-transparent px-3 text-start font-medium cursor-default outline-none select-none transition-[color,background-color,box-shadow] motion-reduce:transition-none bg-secondary text-secondary-foreground not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30">
            ${createElement(ChevronRight, { class: "size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-open:rotate-90 motion-reduce:transition-none rtl:-scale-x-100", "aria-hidden": "true" }).outerHTML}
            Track parcel
          </button>
        </ui-collapsible-trigger>
        <span class="pe-3 text-muted-foreground tabular-nums group-data-open/card:hidden">Arrives Thursday</span>
        <span class="hidden pe-3 text-muted-foreground tabular-nums group-data-open/card:inline">3 updates</span>
      </h3>
      <ui-collapsible-panel as-child>
        <ol class="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0 motion-reduce:transition-none">
          <li class="flex justify-between gap-4 px-3 pt-2 pb-1 text-muted-foreground">Out for delivery <span class="tabular-nums">07:40</span></li>
          <li class="flex justify-between gap-4 px-3 py-1 text-muted-foreground">Arrived at the local depot <span class="tabular-nums">05:12</span></li>
          <li class="flex justify-between gap-4 px-3 pt-1 pb-2 text-muted-foreground">Left the sorting center <span class="tabular-nums">Wed 21:03</span></li>
        </ol>
      </ui-collapsible-panel>
    </ui-collapsible>
  `
}

export { mount }

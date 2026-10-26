import "@ui-sdk/web/collapsible"
import { ChevronDown, createElement } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-sm flex-col gap-1 rounded-3xl border border-border bg-card p-2 text-sm text-card-foreground">
      <ui-collapsible>
        <ui-collapsible-trigger>
          <button class="group flex min-h-8 w-full items-center justify-between gap-1.5 rounded-2xl border border-transparent px-3 py-1.5 text-start font-medium cursor-default outline-none select-none transition-[color,background-color,box-shadow] motion-reduce:transition-none bg-secondary text-secondary-foreground not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50">
            Shipping details
            ${createElement(ChevronDown, { class: "size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180 motion-reduce:transition-none", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-collapsible-trigger>
        <ui-collapsible-panel class="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0 motion-reduce:transition-none">
          <p class="px-3 pt-1 pb-2 text-muted-foreground">Standard shipping. Arrives in 3 to 5 business days.</p>
        </ui-collapsible-panel>
      </ui-collapsible>
      <ui-collapsible disabled>
        <ui-collapsible-trigger>
          <button class="group flex min-h-8 w-full items-center justify-between gap-1.5 rounded-2xl border border-transparent px-3 py-1.5 text-start font-medium cursor-default outline-none select-none transition-[color,background-color,box-shadow] motion-reduce:transition-none bg-secondary text-secondary-foreground not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50">
            <span class="whitespace-nowrap">Gift options</span>
            <span class="ms-auto text-end text-xs font-normal text-muted-foreground">Not available for this order</span>
            ${createElement(ChevronDown, { class: "size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180 motion-reduce:transition-none", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-collapsible-trigger>
        <ui-collapsible-panel class="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0 motion-reduce:transition-none">
          <p class="px-3 pt-1 pb-2 text-muted-foreground">Add a gift message and wrapping.</p>
        </ui-collapsible-panel>
      </ui-collapsible>
    </div>
  `
}

export { mount }

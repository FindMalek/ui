import "@ui-sdk/web/collapsible"
import { ChevronDown, createElement } from "lucide"

const details = [
  { label: "Shipping address", value: "221B Baker Street, London" },
  { label: "Items", value: "2 × Linen shirt" },
  { label: "Delivery", value: "Standard, arrives March 7" },
  { label: "Total", value: "$84.00" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-collapsible class="flex w-full max-w-sm flex-col gap-4 rounded-3xl border border-border bg-card pt-5 pb-2 text-sm text-card-foreground">
      <div class="flex items-start justify-between gap-4 px-5">
        <div class="flex flex-col gap-1">
          <p class="text-base font-medium">Order #4189</p>
          <p class="text-muted-foreground">Placed on March 3</p>
        </div>
        <span class="inline-flex h-5 shrink-0 items-center rounded-2xl border border-transparent bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">Shipped</span>
      </div>
      <div class="border-t border-border px-2 pt-2">
        <ui-collapsible-trigger>
          <button class="group flex h-8 w-full items-center justify-between gap-1.5 rounded-2xl border border-transparent px-3 text-start font-medium cursor-default outline-none select-none transition-[color,background-color,box-shadow] motion-reduce:transition-none bg-secondary text-secondary-foreground not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30">
            Order details
            ${createElement(ChevronDown, { class: "size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180 motion-reduce:transition-none", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-collapsible-trigger>
        <ui-collapsible-panel class="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0 motion-reduce:transition-none">
          <dl class="flex flex-col gap-2 px-3 py-2">
            ${details
              .map(
                (detail) => `
                  <div class="flex justify-between gap-4">
                    <dt class="text-muted-foreground">${detail.label}</dt>
                    <dd class="text-end font-medium">${detail.value}</dd>
                  </div>`,
              )
              .join("")}
          </dl>
        </ui-collapsible-panel>
      </div>
    </ui-collapsible>
  `
}

export { mount }

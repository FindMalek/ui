import "@ui-sdk/web/accordion"
import { ChevronDown, createElement } from "lucide"

const items = [
  {
    value: "billing",
    label: "How does billing work?",
    content: "We bill monthly or yearly, on the day you subscribed. Yearly plans save two months.",
  },
  {
    value: "security",
    label: "Is my data secure?",
    content: "Data is encrypted in transit and at rest, and we never sell it.",
  },
  {
    value: "integration",
    label: "What integrations do you support?",
    content: "Slack, GitHub, Linear and anything with a webhook.",
  },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-accordion class="w-full max-w-md overflow-hidden rounded-2xl border border-border" default-value="billing">
      ${items
        .map(
          (item) => `
            <ui-accordion-item class="border-border not-last:border-b data-open:bg-muted/50" value="${item.value}">
              <ui-accordion-header>
                <h3 class="flex">
                  <ui-accordion-trigger>
                    <button class="group flex w-full items-start justify-between gap-6 p-4 text-start text-sm font-medium outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset">
                      ${item.label}
                      ${createElement(ChevronDown, { class: "pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180", "aria-hidden": "true" }).outerHTML}
                    </button>
                  </ui-accordion-trigger>
                </h3>
              </ui-accordion-header>
              <ui-accordion-panel class="h-(--accordion-panel-height) overflow-hidden px-4 text-sm transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
                <div class="pb-4">${item.content}</div>
              </ui-accordion-panel>
            </ui-accordion-item>`,
        )
        .join("")}
    </ui-accordion>
  `
}

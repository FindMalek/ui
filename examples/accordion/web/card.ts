import "@ui-sdk/web/accordion"
import { ChevronDown, createElement } from "lucide"

const items = [
  {
    value: "plans",
    label: "What subscription plans do you offer?",
    content: "Starter, Professional and Enterprise. Each one adds seats, storage and support.",
  },
  {
    value: "billing",
    label: "How does billing work?",
    content: "You're billed at the start of each period. Change plans any time and we'll prorate it.",
  },
  {
    value: "cancel",
    label: "How do I cancel my subscription?",
    content: "Open Billing and choose Cancel. You keep access until the period ends.",
  },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-md flex-col gap-5 overflow-hidden rounded-[min(var(--radius-4xl),24px)] bg-card pt-5 text-sm text-card-foreground shadow-sm ring-1 ring-foreground/5 dark:ring-foreground/10">
      <div class="flex flex-col gap-1 px-4">
        <div class="text-base font-medium">Subscription and billing</div>
        <div class="text-sm text-muted-foreground">Common questions about your account, plans and payments.</div>
      </div>
      <ui-accordion class="w-full border-t border-border" default-value="plans">
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
    </div>
  `
}

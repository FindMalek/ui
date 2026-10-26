import "@ui-sdk/web/accordion"
import { ChevronDown, createElement } from "lucide"

const items = [
  {
    value: "returns",
    label: "Returns",
    content: `
      <p>Return any unused item in its original packaging within 30 days.</p>
      <p id="return-label" class="m-0 scroll-mt-4">To print a return label, open the order and choose Return. The label is free.</p>`,
  },
  {
    value: "refunds",
    label: "Refunds",
    content: `
      <p>Refunds go back to the card you paid with.</p>
      <p id="refund-timeline" class="m-0 scroll-mt-4">Timeline: we inspect the item within 2 days of receiving it, and your bank shows the refund 5 to 7 business days later.</p>`,
  },
  {
    value: "exchanges",
    label: "Exchanges",
    content: `
      <p>Start a return, choose Exchange and pick the new size. Shipping both ways is free.</p>`,
  },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="w-full max-w-md">
      <nav aria-label="Jump to" class="mb-4 flex flex-col items-start gap-1 text-sm leading-5">
        <a class="rounded-sm font-medium text-primary underline underline-offset-4 outline-none focus-visible:ring-3 focus-visible:ring-ring/30" href="#refund-timeline">Jump to the refund timeline</a>
        <a class="rounded-sm font-medium text-primary underline underline-offset-4 outline-none focus-visible:ring-3 focus-visible:ring-ring/30" href="#return-label">Print a return label</a>
      </nav>
      <ui-accordion class="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border text-foreground" hidden-until-found>
        ${items
          .map(
            (item) => `
              <ui-accordion-item class="border-0 border-border not-last:border-b data-open:bg-muted/50" value="${item.value}">
                <ui-accordion-header>
                  <h3 class="m-0 flex [font:inherit]">
                    <ui-accordion-trigger>
                      <button type="button" class="group relative flex w-full cursor-default items-start justify-between gap-6 border border-transparent bg-transparent p-4 text-start text-sm leading-5 font-medium text-inherit outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:hover:no-underline">
                        ${item.label}
                        ${createElement(ChevronDown, { class: "pointer-events-none block size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180", "aria-hidden": "true" }).outerHTML}
                      </button>
                    </ui-accordion-trigger>
                  </h3>
                </ui-accordion-header>
                <ui-accordion-panel class="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0" hidden="until-found">
                  <div class="flex flex-col gap-2 pb-4">${item.content}</div>
                </ui-accordion-panel>
              </ui-accordion-item>`,
          )
          .join("")}
      </ui-accordion>
    </div>
  `
}

export { mount }

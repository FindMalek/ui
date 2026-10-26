import "@ui-sdk/web/accordion"
import { ChevronDown, createElement } from "lucide"

const items: { value: string; label: string; content: string; disabled?: boolean }[] = [
  {
    value: "access",
    label: "Can I access my account history?",
    content: "Yes. Every order and payment from the last five years is in your account.",
  },
  {
    value: "premium",
    label: "Premium feature information",
    content: "Premium includes priority support and early access to new features.",
    disabled: true,
  },
  {
    value: "email",
    label: "How do I update my email address?",
    content: "Open Settings, then Account, and change it there. We'll send a confirmation link.",
  },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-accordion class="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border text-foreground">
      ${items
        .map(
          (item) => `
            <ui-accordion-item class="border-0 border-border not-last:border-b data-open:bg-muted/50" value="${item.value}"${item.disabled ? " disabled" : ""}>
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
              <ui-accordion-panel class="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
                <div class="m-0 pb-4">${item.content}</div>
              </ui-accordion-panel>
            </ui-accordion-item>`,
        )
        .join("")}
    </ui-accordion>
  `
}

export { mount }

import "@ui-sdk/web/accordion"
import { ChevronDown, createElement } from "lucide"

const items = [
  {
    value: "shipping",
    label: "ما هي خيارات الشحن؟",
    content: "نقدم الشحن العادي والسريع والشحن في اليوم التالي.",
  },
  {
    value: "returns",
    label: "ما هي سياسة الإرجاع؟",
    content: "يمكنك إرجاع أي منتج غير مستخدم خلال ٣٠ يومًا.",
  },
  {
    value: "support",
    label: "كيف أتواصل مع الدعم؟",
    content: "راسلنا عبر البريد أو الدردشة، ونرد خلال ٢٤ ساعة.",
  },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div dir="rtl" class="w-full max-w-md">
      <ui-accordion class="w-full" default-value="shipping">
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

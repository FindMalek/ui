import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from "@ui-sdk/solid/collapsible"
import { For } from "solid-js"

const details = [
  { label: "عنوان الشحن", value: "شارع الملك فهد، الرياض" },
  { label: "المنتجات", value: "قميص كتان × ٢" },
  { label: "التوصيل", value: "عادي، يصل في ٧ مارس" },
  { label: "الإجمالي", value: "٨٤٫٠٠ $" },
]

export function Example() {
  return (
    <div dir="rtl" class="w-full max-w-sm">
      <Collapsible class="flex flex-col gap-4 rounded-[min(var(--radius-4xl),24px)] bg-card pt-5 pb-2 text-sm text-card-foreground shadow-sm ring-1 ring-foreground/5 dark:ring-foreground/10">
        <div class="flex items-start justify-between gap-4 px-5">
          <div class="flex flex-col gap-1">
            <p class="text-base font-medium">الطلب #4189</p>
            <p class="text-muted-foreground">تم الطلب في ٣ مارس</p>
          </div>
          <span class="inline-flex h-5 shrink-0 items-center rounded-2xl border border-transparent bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
            تم الشحن
          </span>
        </div>
        <div class="border-t border-border px-2 pt-2">
          <CollapsibleTrigger class="group flex h-8 w-full items-center justify-between gap-1.5 rounded-2xl border border-transparent px-3 text-start font-medium outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 dark:hover:bg-muted/50">
            تفاصيل الطلب
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              class="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180 motion-reduce:transition-none"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </CollapsibleTrigger>
          <CollapsiblePanel class="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0 motion-reduce:transition-none">
            <dl class="flex flex-col gap-2 px-3 py-2">
              <For each={details}>
                {(detail) => (
                  <div class="flex justify-between gap-4">
                    <dt class="text-muted-foreground">{detail.label}</dt>
                    <dd class="text-end font-medium">{detail.value}</dd>
                  </div>
                )}
              </For>
            </dl>
          </CollapsiblePanel>
        </div>
      </Collapsible>
    </div>
  )
}

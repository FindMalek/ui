import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@ui-sdk/solid/accordion"
import { For } from "solid-js"

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

export function Example() {
  return (
    <Accordion
      class="w-full max-w-md overflow-hidden rounded-2xl border border-border"
      defaultValue={["billing"]}
    >
      <For each={items}>
        {(item) => (
          <AccordionItem class="border-border not-last:border-b data-open:bg-muted/50" value={item.value}>
            <AccordionHeader class="flex">
              <AccordionTrigger class="group flex w-full items-start justify-between gap-6 p-4 text-start text-sm font-medium outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset">
                {item.label}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  class="pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionPanel class="h-(--accordion-panel-height) overflow-hidden px-4 text-sm transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
              <div class="pb-4">{item.content}</div>
            </AccordionPanel>
          </AccordionItem>
        )}
      </For>
    </Accordion>
  )
}

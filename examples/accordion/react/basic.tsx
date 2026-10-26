"use client"

import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@ui-sdk/react/accordion"
import { ChevronDown } from "lucide-react"

const items = [
  {
    value: "shipping",
    label: "What are your shipping options?",
    content:
      "We offer standard (5 to 7 days), express (2 to 3 days) and overnight shipping. Shipping is free on international orders.",
  },
  {
    value: "returns",
    label: "What is your return policy?",
    content:
      "Return any unused item in its original packaging within 30 days. Refunds arrive within 5 to 7 business days.",
  },
  {
    value: "support",
    label: "How can I reach support?",
    content: "Write to us by email or chat, or call us. We answer within 24 hours on business days.",
  },
]

function Example() {
  return (
    <Accordion
      className="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border text-foreground"
      defaultValue={["shipping"]}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          className="border-0 border-border not-last:border-b data-open:bg-muted/50"
          value={item.value}
        >
          <AccordionHeader className="m-0 flex [font:inherit]">
            <AccordionTrigger className="group relative flex w-full cursor-default items-start justify-between gap-6 border border-transparent bg-transparent p-4 text-start text-sm leading-5 font-medium text-inherit outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:hover:no-underline">
              {item.label}
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none block size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180"
              />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel className="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
            <div className="m-0 pb-4">{item.content}</div>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export { Example }

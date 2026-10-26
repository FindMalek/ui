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

function Example() {
  return (
    <Accordion className="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border text-foreground">
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          className="border-0 border-border not-last:border-b data-open:bg-muted/50"
          value={item.value}
          disabled={item.disabled}
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

"use client"

import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@ui-sdk/react/accordion"
import { ChevronDown } from "lucide-react"

function Example() {
  return (
    <div className="w-full max-w-md">
      <nav aria-label="Jump to" className="mb-4 flex flex-col items-start gap-1 text-sm leading-5">
        <a
          className="rounded-sm font-medium text-primary underline underline-offset-4 outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          href="#refund-timeline"
        >
          Jump to the refund timeline
        </a>
        <a
          className="rounded-sm font-medium text-primary underline underline-offset-4 outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          href="#return-label"
        >
          Print a return label
        </a>
      </nav>
      <Accordion
        className="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border text-foreground"
        hiddenUntilFound
      >
        <AccordionItem
          className="border-0 border-border not-last:border-b data-open:bg-muted/50"
          value="returns"
        >
          <AccordionHeader className="m-0 flex [font:inherit]">
            <AccordionTrigger className="group relative flex w-full cursor-default items-start justify-between gap-6 border border-transparent bg-transparent p-4 text-start text-sm leading-5 font-medium text-inherit outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:hover:no-underline">
              Returns
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none block size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180"
              />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel className="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
            <div className="flex flex-col gap-2 pb-4">
              <p>Return any unused item in its original packaging within 30 days.</p>
              <p id="return-label" className="m-0 scroll-mt-4">
                To print a return label, open the order and choose Return. The label is free.
              </p>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem
          className="border-0 border-border not-last:border-b data-open:bg-muted/50"
          value="refunds"
        >
          <AccordionHeader className="m-0 flex [font:inherit]">
            <AccordionTrigger className="group relative flex w-full cursor-default items-start justify-between gap-6 border border-transparent bg-transparent p-4 text-start text-sm leading-5 font-medium text-inherit outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:hover:no-underline">
              Refunds
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none block size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180"
              />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel className="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
            <div className="flex flex-col gap-2 pb-4">
              <p>Refunds go back to the card you paid with.</p>
              <p id="refund-timeline" className="m-0 scroll-mt-4">
                Timeline: we inspect the item within 2 days of receiving it, and your bank shows the refund 5
                to 7 business days later.
              </p>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem
          className="border-0 border-border not-last:border-b data-open:bg-muted/50"
          value="exchanges"
        >
          <AccordionHeader className="m-0 flex [font:inherit]">
            <AccordionTrigger className="group relative flex w-full cursor-default items-start justify-between gap-6 border border-transparent bg-transparent p-4 text-start text-sm leading-5 font-medium text-inherit outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:hover:no-underline">
              Exchanges
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none block size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180"
              />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel className="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
            <div className="flex flex-col gap-2 pb-4">
              <p>Start a return, choose Exchange and pick the new size. Shipping both ways is free.</p>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export { Example }

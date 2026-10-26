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
    <Accordion
      className="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border text-foreground"
      defaultValue={["reply"]}
    >
      <AccordionItem className="border-0 border-border not-last:border-b data-open:bg-muted/50" value="reply">
        <AccordionHeader className="m-0 flex [font:inherit]">
          <AccordionTrigger className="group relative flex w-full cursor-default items-start justify-between gap-6 border border-transparent bg-transparent p-4 text-start text-sm leading-5 font-medium text-inherit outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:hover:no-underline">
            Reply
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none block size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180"
            />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel
          className="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0"
          keepMounted
        >
          <label className="flex flex-col gap-2 pb-4 font-medium">
            Your reply
            <textarea
              className="box-border min-h-16 w-full min-w-0 resize-none rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base leading-6 font-normal text-inherit outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm md:leading-5"
              placeholder="Write a reply…"
            />
          </label>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem
        className="border-0 border-border not-last:border-b data-open:bg-muted/50"
        value="formatting"
      >
        <AccordionHeader className="m-0 flex [font:inherit]">
          <AccordionTrigger className="group relative flex w-full cursor-default items-start justify-between gap-6 border border-transparent bg-transparent p-4 text-start text-sm leading-5 font-medium text-inherit outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:hover:no-underline">
            Formatting
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none block size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180"
            />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel className="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
          <p className="m-0 pb-4">Use **bold**, _italics_ and `code`. Links paste as previews.</p>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export { Example }

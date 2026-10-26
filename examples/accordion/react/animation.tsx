"use client"

import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@ui-sdk/react/accordion"
import { ChevronDown } from "lucide-react"
import * as React from "react"

const items = [
  {
    value: "one",
    label: "Why animate the height?",
    content: "So the content below slides instead of jumping.",
  },
  {
    value: "two",
    label: "Where does the height come from?",
    content: "The panel measures itself and writes the result to a CSS variable while it animates.",
  },
  {
    value: "three",
    label: "Does it animate on first paint?",
    content: "No. Panels open on the server or on mount show at once.",
  },
]

function Example() {
  const [status, setStatus] = React.useState("")

  return (
    <div className="w-full max-w-md">
      <Accordion
        className="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border text-foreground"
        defaultValue={["one"]}
      >
        {items.map((item) => (
          <AccordionItem
            key={item.value}
            className="border-0 border-border not-last:border-b data-open:bg-muted/50"
            value={item.value}
            onOpenChangeComplete={(open) =>
              setStatus(`${open ? "Finished opening" : "Finished closing"} “${item.label}”`)
            }
          >
            <AccordionHeader className="m-0 flex [font:inherit]">
              <AccordionTrigger className="group relative flex w-full cursor-default items-start justify-between gap-6 border border-transparent bg-transparent p-4 text-start text-sm leading-5 font-medium text-inherit outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:hover:no-underline">
                {item.label}
                <ChevronDown
                  aria-hidden="true"
                  className="pointer-events-none block size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-300 group-data-open:rotate-180"
                />
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionPanel className="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height,opacity] duration-300 ease-in-out data-starting-style:h-0 data-ending-style:h-0 data-starting-style:opacity-0 data-ending-style:opacity-0">
              <div className="m-0 pb-4">{item.content}</div>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <output className="mt-3 block min-h-10 text-sm leading-5 text-muted-foreground">
        {status || "Open or close an item."}
      </output>
    </div>
  )
}

export { Example }

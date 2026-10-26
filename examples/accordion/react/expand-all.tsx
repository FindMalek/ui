"use client"

import { createAccordionController } from "@ui-sdk/core/accordion"
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@ui-sdk/react/accordion"
import { ChevronDown } from "lucide-react"
import * as React from "react"

const weeks = [
  {
    value: "week-1",
    label: "Week 1: Foundations",
    content: "Set up your editor, meet the command line and write your first script.",
  },
  {
    value: "week-2",
    label: "Week 2: Data and types",
    content: "Strings, numbers, lists and objects, and how to tell them apart when a program runs.",
  },
  {
    value: "week-3",
    label: "Week 3: Control flow",
    content: "Conditions, loops and functions. The project this week is a small text adventure.",
  },
  {
    value: "week-4",
    label: "Week 4: Working with files",
    content: "Read and write files, parse CSV and JSON, and handle the errors that come with them.",
  },
  {
    value: "week-5",
    label: "Week 5: Final project",
    content: "Build a tool you'll use yourself, then present it to the group in a five-minute demo.",
  },
]

function Example() {
  const [syllabus] = React.useState(() => createAccordionController())
  return (
    <div className="w-full max-w-md">
      <div className="mb-2 flex flex-wrap gap-2">
        <button
          type="button"
          className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
          onClick={() => syllabus.openAll()}
        >
          Expand all
        </button>
        <button
          type="button"
          className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
          onClick={() => syllabus.closeAll()}
        >
          Collapse all
        </button>
      </div>
      <div className="max-h-72 overflow-y-auto rounded-2xl">
        <Accordion
          className="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border text-foreground"
          multiple
          controller={syllabus}
        >
          {weeks.map((week) => (
            <Week key={week.value} week={week} />
          ))}
        </Accordion>
      </div>
    </div>
  )
}

function Week({ week }: { week: (typeof weeks)[number] }) {
  const item = React.useRef<HTMLDivElement>(null)
  const pressed = React.useRef(false)

  return (
    <AccordionItem
      ref={item}
      className="border-0 border-border not-last:border-b data-open:bg-muted/50"
      value={week.value}
      onOpenChange={(open, details) => {
        pressed.current = open && details.reason === "trigger-press"
      }}
      onOpenChangeComplete={(open) => {
        if (open && pressed.current) item.current?.scrollIntoView({ block: "nearest", behavior: "smooth" })
      }}
    >
      <AccordionHeader className="m-0 flex [font:inherit]">
        <AccordionTrigger className="group relative flex w-full cursor-default items-start justify-between gap-6 border border-transparent bg-transparent p-4 text-start text-sm leading-5 font-medium text-inherit outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:hover:no-underline">
          {week.label}
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none block size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180"
          />
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionPanel className="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
        <div className="m-0 pb-4">{week.content}</div>
      </AccordionPanel>
    </AccordionItem>
  )
}

export { Example }

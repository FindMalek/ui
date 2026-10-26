import { createAccordionController } from "@ui-sdk/core/accordion"
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@ui-sdk/solid/accordion"
import { For } from "solid-js"

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
  const syllabus = createAccordionController()
  return (
    <div class="w-full max-w-md">
      <div class="mb-2 flex flex-wrap gap-2">
        <button
          type="button"
          class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
          onClick={() => syllabus.openAll()}
        >
          Expand all
        </button>
        <button
          type="button"
          class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
          onClick={() => syllabus.closeAll()}
        >
          Collapse all
        </button>
      </div>
      <div class="max-h-72 overflow-y-auto rounded-2xl">
        <Accordion
          class="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border text-foreground"
          multiple
          controller={syllabus}
        >
          <For each={weeks}>{(week) => <Week week={week} />}</For>
        </Accordion>
      </div>
    </div>
  )
}

function Week(props: { week: (typeof weeks)[number] }) {
  let item: HTMLDivElement | undefined
  let pressed = false

  return (
    <AccordionItem
      ref={item}
      class="border-0 border-border not-last:border-b data-open:bg-muted/50"
      value={props.week.value}
      onOpenChange={(open, details) => {
        pressed = open && details.reason === "trigger-press"
      }}
      onOpenChangeComplete={(open) => {
        if (open && pressed) item?.scrollIntoView({ block: "nearest", behavior: "smooth" })
      }}
    >
      <AccordionHeader class="m-0 flex [font:inherit]">
        <AccordionTrigger class="group relative flex w-full cursor-default items-start justify-between gap-6 border border-transparent bg-transparent p-4 text-start text-sm leading-5 font-medium text-inherit outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:hover:no-underline">
          {props.week.label}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            class="pointer-events-none block size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionPanel class="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
        <div class="m-0 pb-4">{props.week.content}</div>
      </AccordionPanel>
    </AccordionItem>
  )
}

export { Example }

"use client"

import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@ui-sdk/react/accordion"
import { ChevronDown, Search } from "lucide-react"
import * as React from "react"

const faq = [
  {
    value: "returns",
    question: "What is your return policy?",
    answer: "Return any unused item within 30 days. Once it reaches us, your refund is on its way.",
  },
  {
    value: "refunds",
    question: "How long do refunds take?",
    answer: "Refunds reach your card within 5 to 7 business days after we receive the item.",
  },
  {
    value: "shipping",
    question: "Do you ship internationally?",
    answer: "We ship to 40 countries. Duties are included in the price at checkout.",
  },
  {
    value: "tracking",
    question: "How do I track my order?",
    answer: "Every shipping email has a tracking link. You'll also find it under Orders.",
  },
  {
    value: "exchange",
    question: "Can I exchange an item for another size?",
    answer: "Yes. Start a return, choose Exchange and pick the new size. Shipping is free.",
  },
  {
    value: "gift",
    question: "Can I send an order as a gift?",
    answer: "Add a gift note at checkout and we'll leave the prices off the packing slip.",
  },
]

function matches(question: (typeof faq)[number], query: string) {
  const search = query.trim().toLowerCase()
  return (
    !search ||
    question.question.toLowerCase().includes(search) ||
    question.answer.toLowerCase().includes(search)
  )
}

function highlight(text: string, query: string) {
  const search = query.trim().toLowerCase()
  if (!search) return [{ text, match: false }]
  const parts: { text: string; match: boolean }[] = []
  let start = 0
  for (let index = text.toLowerCase().indexOf(search); index !== -1;) {
    if (index > start) parts.push({ text: text.slice(start, index), match: false })
    parts.push({ text: text.slice(index, index + search.length), match: true })
    start = index + search.length
    index = text.toLowerCase().indexOf(search, start)
  }
  if (start < text.length) parts.push({ text: text.slice(start), match: false })
  return parts
}

function Highlight({ text, query }: { text: string; query: string }) {
  return highlight(text, query).map((part, index) =>
    part.match ? (
      <mark key={index} className="rounded-sm bg-primary/15 text-inherit">
        {part.text}
      </mark>
    ) : (
      part.text
    ),
  )
}

function Example() {
  const [query, setQuery] = React.useState("")
  const [value, setValue] = React.useState<string[]>([])
  const results = faq.filter((question) => matches(question, query))

  return (
    <div className="w-full max-w-md">
      <div className="relative mb-2">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute start-2.5 top-1/2 block size-4 -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="search"
          aria-label="Search questions"
          placeholder="Search questions…"
          className="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 ps-8 pe-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
          value={query}
          onChange={(event) => {
            const next = event.target.value
            setQuery(next)
            setValue(
              next.trim()
                ? faq.filter((question) => matches(question, next)).map((question) => question.value)
                : [],
            )
          }}
        />
      </div>
      <Accordion
        className="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border text-foreground"
        multiple
        value={value}
        onValueChange={setValue}
      >
        {results.map((question) => (
          <AccordionItem
            key={question.value}
            className="border-0 border-border not-last:border-b data-open:bg-muted/50"
            value={question.value}
          >
            <AccordionHeader className="m-0 flex [font:inherit]">
              <AccordionTrigger className="group relative flex w-full cursor-default items-start justify-between gap-6 border border-transparent bg-transparent p-4 text-start text-sm leading-5 font-medium text-inherit outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:hover:no-underline">
                <span>
                  <Highlight text={question.question} query={query} />
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className="pointer-events-none block size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180"
                />
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionPanel className="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
              <div className="m-0 pb-4">
                <Highlight text={question.answer} query={query} />
              </div>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <p role="status" className="m-0 min-h-13 py-4 text-sm leading-5 text-muted-foreground">
        {results.length === 0 && `No questions match “${query}”.`}
      </p>
    </div>
  )
}

export { Example }

<script lang="ts">
  import { ChevronDown, Search } from "@lucide/svelte"
  import {
    Accordion,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
    AccordionTrigger,
  } from "@ui-sdk/svelte/accordion"

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

  let query = $state("")
  let value = $state<string[]>([])
  const results = $derived(faq.filter((question) => matches(question, query)))

  function search(next: string) {
    query = next
    value = next.trim() ? results.map((question) => question.value) : []
  }
</script>

<div class="w-full max-w-md">
  <div class="relative mb-2">
    <Search aria-hidden="true" class="pointer-events-none absolute start-2.5 top-1/2 block size-4 -translate-y-1/2 text-muted-foreground" />
    <input
      type="search"
      aria-label="Search questions"
      placeholder="Search questions…"
      class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 ps-8 pe-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
      value={query}
      oninput={(event) => search(event.currentTarget.value)}
    />
  </div>
  <Accordion class="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border text-foreground" bind:value multiple>
    {#each results as question (question.value)}
      <AccordionItem class="border-0 border-border not-last:border-b data-open:bg-muted/50" value={question.value}>
        <AccordionHeader class="m-0 flex [font:inherit]">
          <AccordionTrigger
            class="group relative flex w-full cursor-default items-start justify-between gap-6 border border-transparent bg-transparent p-4 text-start text-sm leading-5 font-medium text-inherit outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:hover:no-underline"
          >
            <span>
              {#each highlight(question.question, query) as part, index (index)}
                {#if part.match}<mark class="rounded-sm bg-primary/15 text-inherit">{part.text}</mark>{:else}{part.text}{/if}
              {/each}
            </span>
            <ChevronDown aria-hidden="true"
              class="pointer-events-none block size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180"
            />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel
          class="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0"
        >
          <div class="m-0 pb-4">
            {#each highlight(question.answer, query) as part, index (index)}
              {#if part.match}<mark class="rounded-sm bg-primary/15 text-inherit">{part.text}</mark>{:else}{part.text}{/if}
            {/each}
          </div>
        </AccordionPanel>
      </AccordionItem>
    {/each}
  </Accordion>
  <p role="status" class="m-0 min-h-13 py-4 text-sm leading-5 text-muted-foreground">
    {#if results.length === 0}No questions match “{query}”.{/if}
  </p>
</div>

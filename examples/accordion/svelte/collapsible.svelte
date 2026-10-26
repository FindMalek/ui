<script lang="ts">
  import { ChevronDown } from "@lucide/svelte"
  import {
    Accordion,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
    AccordionTrigger,
  } from "@ui-sdk/svelte/accordion"

  const items = [
    {
      value: "overview",
      label: "Overview",
      content: "A summary of the project, its goals and its owners.",
    },
    {
      value: "timeline",
      label: "Timeline",
      content: "Kickoff in March, beta in June and launch in September.",
    },
    {
      value: "budget",
      label: "Budget",
      content: "Approved for two engineers and one designer for six months.",
    },
  ]
</script>

<Accordion class="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border text-foreground" collapsible={false} defaultValue={["overview"]}>
  {#each items as item (item.value)}
    <AccordionItem class="border-0 border-border not-last:border-b data-open:bg-muted/50" value={item.value}>
      <AccordionHeader class="m-0 flex [font:inherit]">
        <AccordionTrigger
          class="group relative flex w-full cursor-default items-start justify-between gap-6 border border-transparent bg-transparent p-4 text-start text-sm leading-5 font-medium text-inherit outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:hover:no-underline"
        >
          {item.label}
          <ChevronDown aria-hidden="true"
            class="pointer-events-none block size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180"
          />
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionPanel
        class="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0"
      >
        <div class="m-0 pb-4">{item.content}</div>
      </AccordionPanel>
    </AccordionItem>
  {/each}
</Accordion>

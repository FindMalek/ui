<script lang="ts">
  import { ChevronDown } from "@lucide/svelte"
  import type { ChangeDetails } from "@ui-sdk/core"
  import {
    Accordion,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
    AccordionTrigger,
    createAccordionController,
  } from "@ui-sdk/svelte/accordion"

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

  const syllabus = createAccordionController()

  const elements = new Map<string, HTMLElement>()
  function setElement(value: string) {
    return (element: HTMLElement) => {
      elements.set(value, element)
      return () => elements.delete(value)
    }
  }

  let pressed: string | null = null
  function openChange(value: string, open: boolean, details: ChangeDetails) {
    if (open && details.reason === "trigger-press") pressed = value
    else if (pressed === value) pressed = null
  }

  function openChangeComplete(value: string, open: boolean) {
    if (!open || pressed !== value) return
    pressed = null
    elements.get(value)?.scrollIntoView({ block: "nearest", behavior: "smooth" })
  }
</script>

<div class="w-full max-w-md">
  <div class="mb-2 flex flex-wrap gap-2">
    <button type="button"
      class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
      onclick={() => syllabus.openAll()}
    >
      Expand all
    </button>
    <button type="button"
      class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
      onclick={() => syllabus.closeAll()}
    >
      Collapse all
    </button>
  </div>
  <div class="max-h-72 overflow-y-auto rounded-2xl">
    <Accordion class="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border text-foreground" multiple controller={syllabus}>
      {#each weeks as week (week.value)}
        <AccordionItem
          {@attach setElement(week.value)}
          class="border-0 border-border not-last:border-b data-open:bg-muted/50"
          value={week.value}
          onOpenChange={(open, details) => openChange(week.value, open, details)}
          onOpenChangeComplete={(open) => openChangeComplete(week.value, open)}
        >
          <AccordionHeader class="m-0 flex [font:inherit]">
            <AccordionTrigger
              class="group relative flex w-full cursor-default items-start justify-between gap-6 border border-transparent bg-transparent p-4 text-start text-sm leading-5 font-medium text-inherit outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:hover:no-underline"
            >
              {week.label}
              <ChevronDown aria-hidden="true"
                class="pointer-events-none block size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180"
              />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel
            class="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0"
          >
            <div class="m-0 pb-4">{week.content}</div>
          </AccordionPanel>
        </AccordionItem>
      {/each}
    </Accordion>
  </div>
</div>

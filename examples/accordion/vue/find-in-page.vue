<script setup lang="ts">
import { ChevronDown } from "@lucide/vue"
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@ui-sdk/vue/accordion"

const items = [
  {
    value: "fruit",
    label: "Which fruit do you stock?",
    content: "Apples, pears, mangoes and, in summer, pineapple.",
  },
  {
    value: "organic",
    label: "Is it organic?",
    content: "Everything we stock is certified organic.",
  },
  {
    value: "delivery",
    label: "When do you deliver?",
    content: "Every weekday morning before 10.",
  },
]
</script>

<template>
  <Accordion
    class="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border text-foreground"
    hidden-until-found
  >
    <AccordionItem
      v-for="item in items"
      :key="item.value"
      class="border-0 border-border not-last:border-b data-open:bg-muted/50"
      :value="item.value"
    >
      <AccordionHeader class="m-0 flex [font:inherit]">
        <AccordionTrigger
          class="group relative flex w-full cursor-default items-start justify-between gap-6 border border-transparent bg-transparent p-4 text-start text-sm leading-5 font-medium text-inherit outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:hover:no-underline"
        >
          {{ item.label }}
          <ChevronDown
            aria-hidden="true"
            class="pointer-events-none block size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180"
          />
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionPanel
        class="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0"
      >
        <div class="m-0 pb-4">{{ item.content }}</div>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
</template>

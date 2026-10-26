<script setup lang="ts">
import { ChevronDown } from "@lucide/vue"
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@ui-sdk/vue/accordion"

const sections: {
  value: string
  label: string
  content?: string
  topics?: { value: string; label: string; content: string }[]
}[] = [
  {
    value: "profile",
    label: "Profile",
    content: "Your name, photo and the email address people see.",
  },
  {
    value: "notifications",
    label: "Notifications",
    topics: [
      { value: "email", label: "Email", content: "A weekly digest, and mentions as they happen." },
      { value: "push", label: "Push", content: "Direct messages and replies to your comments." },
    ],
  },
  {
    value: "billing",
    label: "Billing",
    topics: [
      {
        value: "payment",
        label: "Payment methods",
        content: "A Visa card ending in 4242, used for every renewal.",
      },
      {
        value: "invoices",
        label: "Invoices",
        content: "Download a PDF of any invoice from the last two years.",
      },
    ],
  },
]
</script>

<template>
  <Accordion
    class="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border text-foreground"
    :default-value="['notifications']"
  >
    <AccordionItem
      v-for="section in sections"
      :key="section.value"
      class="border-0 border-border not-last:border-b data-open:bg-muted/50"
      :value="section.value"
    >
      <AccordionHeader class="m-0 flex [font:inherit]">
        <AccordionTrigger
          class="group relative flex w-full cursor-default items-start justify-between gap-6 border border-transparent bg-transparent p-4 text-start text-sm leading-5 font-medium text-inherit outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:hover:no-underline"
        >
          {{ section.label }}
          <ChevronDown
            aria-hidden="true"
            class="pointer-events-none block size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180"
          />
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionPanel
        class="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0"
      >
        <Accordion
          v-if="section.topics"
          class="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border text-foreground mb-4 bg-background"
          multiple
        >
          <AccordionItem
            v-for="topic in section.topics"
            :key="topic.value"
            class="border-0 border-border not-last:border-b data-open:bg-muted/50"
            :value="topic.value"
          >
            <AccordionHeader class="m-0 flex [font:inherit]">
              <template #render="{ props }">
                <h4 v-bind="props">
                  <AccordionTrigger
                    class="group relative flex w-full cursor-default items-start justify-between gap-6 border border-transparent bg-transparent px-4 py-3 text-start text-sm leading-5 font-normal text-inherit outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:hover:no-underline"
                  >
                    {{ topic.label }}
                    <ChevronDown
                      aria-hidden="true"
                      class="pointer-events-none block size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180"
                    />
                  </AccordionTrigger>
                </h4>
              </template>
            </AccordionHeader>
            <AccordionPanel
              class="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0"
            >
              <div class="m-0 pb-3">{{ topic.content }}</div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <div v-else class="m-0 pb-4">{{ section.content }}</div>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
</template>

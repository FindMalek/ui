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
    value: "shipping",
    label: "ما هي خيارات الشحن؟",
    content: "نقدم الشحن العادي والسريع والشحن في اليوم التالي.",
  },
  {
    value: "returns",
    label: "ما هي سياسة الإرجاع؟",
    content: "يمكنك إرجاع أي منتج غير مستخدم خلال ٣٠ يومًا.",
  },
  {
    value: "support",
    label: "كيف أتواصل مع الدعم؟",
    content: "راسلنا عبر البريد أو الدردشة، ونرد خلال ٢٤ ساعة.",
  },
]
</script>

<template>
  <div dir="rtl" class="w-full max-w-md">
    <Accordion class="w-full" :default-value="['shipping']">
      <AccordionItem
        v-for="item in items"
        :key="item.value"
        class="border-border not-last:border-b data-open:bg-muted/50"
        :value="item.value"
      >
        <AccordionHeader class="flex">
          <AccordionTrigger
            class="group flex w-full items-start justify-between gap-6 p-4 text-start text-sm font-medium outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset"
          >
            {{ item.label }}
            <ChevronDown
              class="pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180"
            />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel
          class="h-(--accordion-panel-height) overflow-hidden px-4 text-sm transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0"
        >
          <div class="pb-4">{{ item.content }}</div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  </div>
</template>

<script setup lang="ts">
import { Tabs, TabsList, TabsPanel, TabsTab } from "@ui-sdk/vue/tabs"

const ranges = [
  { value: "day", label: "Day", content: "128 visitors today." },
  { value: "week", label: "Week", content: "1,024 visitors this week." },
  { value: "month", label: "Month", content: "4,210 visitors this month." },
  { value: "year", label: "Year", content: "48,930 visitors this year." },
]
</script>

<template>
  <Tabs class="flex w-full max-w-md flex-col gap-2" default-value="day" :loop="false">
    <TabsList
      class="relative inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
      aria-label="Range"
    >
      <TabsTab
        v-for="range in ranges"
        :key="range.value"
        class="relative inline-flex h-full flex-1 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-1.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
        :value="range.value"
      >
        {{ range.label }}
      </TabsTab>
    </TabsList>
    <TabsPanel
      v-for="range in ranges"
      :key="range.value"
      class="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
      :value="range.value"
    >
      {{ range.content }}
    </TabsPanel>
  </Tabs>
</template>

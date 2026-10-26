<script setup lang="ts">
import { createTabsController } from "@ui-sdk/core/tabs"
import { Tabs, TabsIndicator, TabsList, TabsPanel, TabsTab } from "@ui-sdk/vue/tabs"
import { ref } from "vue"

const tabs = createTabsController()
const value = ref<string | null>("inbox")
const reason = ref("")
</script>

<template>
  <div class="flex w-full max-w-md flex-col gap-3">
    <Tabs
      v-model:value="value"
      class="flex flex-col gap-2"
      :controller="tabs"
      @value-change="(_: string | null, details: { reason: string }) => (reason = details.reason)"
    >
      <TabsList
        class="relative inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
        aria-label="Mail"
      >
        <TabsTab
          class="relative z-10 inline-flex h-6.5 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-2.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
          value="inbox"
          >Inbox</TabsTab
        >
        <TabsTab
          class="relative z-10 inline-flex h-6.5 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-2.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
          value="drafts"
          >Drafts</TabsTab
        >
        <TabsTab
          class="relative z-10 inline-flex h-6.5 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-2.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
          value="sent"
          >Sent</TabsTab
        >
        <TabsIndicator
          class="pointer-events-none absolute top-(--active-tab-top) left-(--active-tab-left) h-(--active-tab-height) w-(--active-tab-width) rounded-2xl bg-background transition-[top,left,width,height] duration-300 ease-out data-[activation-direction=none]:transition-none motion-reduce:transition-none"
        />
      </TabsList>
      <TabsPanel
        class="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
        value="inbox"
        >No new mail.</TabsPanel
      >
      <TabsPanel
        class="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
        value="drafts"
        >Two drafts.</TabsPanel
      >
      <TabsPanel
        class="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
        value="sent"
        >Sent this week: 12.</TabsPanel
      >
    </Tabs>
    <div class="flex flex-wrap items-center gap-4">
      <button
        type="button"
        class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
        @click="tabs.select('sent')"
      >
        Show sent mail
      </button>
    </div>
    <output class="m-0 block min-h-10 text-sm leading-5 text-muted-foreground"
      >Selected: {{ value }}{{ reason && `, last change: ${reason}` }}</output
    >
  </div>
</template>

<script lang="ts">
  import { Tabs, TabsList, TabsPanel, TabsTab } from "@ui-sdk/svelte/tabs"
</script>

<Tabs class="flex w-full max-w-md flex-col gap-2" defaultValue="overview">
  <TabsList
    class="relative inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
    aria-label="Dashboard"
  >
    <TabsTab
      class="relative inline-flex h-full flex-1 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-1.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
      value="overview"
    >
      Overview
    </TabsTab>
    <TabsTab
      class="relative inline-flex h-full flex-1 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-1.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
      value="analytics"
    >
      Analytics
    </TabsTab>
    <TabsTab
      class="relative inline-flex h-full flex-1 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-1.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
      value="reports"
      disabled
    >
      Reports
    </TabsTab>
  </TabsList>
  <TabsPanel
    class="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
    value="overview"
  >
    Revenue, visitors and sign-ups for the last 30 days.
  </TabsPanel>
  <TabsPanel
    class="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
    value="analytics"
  >
    Where visitors come from and what they do.
  </TabsPanel>
  <TabsPanel
    class="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
    value="reports"
  >
    Reports are available on the Pro plan.
  </TabsPanel>
</Tabs>

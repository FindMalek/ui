"use client"

import { Tabs, TabsIndicator, TabsList, TabsPanel, TabsTab } from "@ui-sdk/react/tabs"

function Example() {
  return (
    <Tabs className="flex w-full max-w-md flex-col gap-2" defaultValue="overview">
      <TabsList
        className="relative inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
        aria-label="Project"
      >
        <TabsTab
          className="relative z-10 inline-flex h-6.5 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-2.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
          value="overview"
        >
          Overview
        </TabsTab>
        <TabsTab
          className="relative z-10 inline-flex h-6.5 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-2.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
          value="activity"
        >
          Activity
        </TabsTab>
        <TabsTab
          className="relative z-10 inline-flex h-6.5 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-2.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
          value="settings"
        >
          Settings
        </TabsTab>
        <TabsIndicator className="pointer-events-none absolute top-(--active-tab-top) left-(--active-tab-left) h-(--active-tab-height) w-(--active-tab-width) rounded-2xl bg-background transition-[top,left,width,height] duration-300 ease-out data-[activation-direction=none]:transition-none motion-reduce:transition-none" />
      </TabsList>
      <div className="grid overflow-hidden">
        <TabsPanel
          className="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none [grid-area:1/1] transition-[opacity,translate] duration-200 ease-out focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-starting-style:opacity-0 data-ending-style:opacity-0 data-[activation-direction=left]:data-ending-style:translate-x-8 data-[activation-direction=left]:data-starting-style:-translate-x-8 data-[activation-direction=right]:data-ending-style:-translate-x-8 data-[activation-direction=right]:data-starting-style:translate-x-8 motion-reduce:transition-none"
          value="overview"
        >
          Everything about the project at a glance.
        </TabsPanel>
        <TabsPanel
          className="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none [grid-area:1/1] transition-[opacity,translate] duration-200 ease-out focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-starting-style:opacity-0 data-ending-style:opacity-0 data-[activation-direction=left]:data-ending-style:translate-x-8 data-[activation-direction=left]:data-starting-style:-translate-x-8 data-[activation-direction=right]:data-ending-style:-translate-x-8 data-[activation-direction=right]:data-starting-style:translate-x-8 motion-reduce:transition-none"
          value="activity"
        >
          Deploys, comments and reviews from the last week.
        </TabsPanel>
        <TabsPanel
          className="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none [grid-area:1/1] transition-[opacity,translate] duration-200 ease-out focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-starting-style:opacity-0 data-ending-style:opacity-0 data-[activation-direction=left]:data-ending-style:translate-x-8 data-[activation-direction=left]:data-starting-style:-translate-x-8 data-[activation-direction=right]:data-ending-style:-translate-x-8 data-[activation-direction=right]:data-starting-style:translate-x-8 motion-reduce:transition-none"
          value="settings"
        >
          Rename, transfer or archive the project.
        </TabsPanel>
      </div>
    </Tabs>
  )
}

export { Example }

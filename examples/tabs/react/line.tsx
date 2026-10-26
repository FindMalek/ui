import { Tabs, TabsIndicator, TabsList, TabsPanel, TabsTab } from "@ui-sdk/react/tabs"

export function Example() {
  return (
    <Tabs className="flex w-full max-w-md flex-col gap-2" defaultValue="overview">
      <TabsList
        className="relative flex items-center gap-1 border-b border-border pb-1"
        aria-label="Dashboard"
      >
        <TabsTab
          className="inline-flex h-8 items-center justify-center gap-1.5 rounded-2xl border border-transparent px-2.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground dark:text-muted-foreground dark:data-selected:text-foreground"
          value="overview"
        >
          Overview
        </TabsTab>
        <TabsTab
          className="inline-flex h-8 items-center justify-center gap-1.5 rounded-2xl border border-transparent px-2.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground dark:text-muted-foreground dark:data-selected:text-foreground"
          value="analytics"
        >
          Analytics
        </TabsTab>
        <TabsTab
          className="inline-flex h-8 items-center justify-center gap-1.5 rounded-2xl border border-transparent px-2.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground dark:text-muted-foreground dark:data-selected:text-foreground"
          value="reports"
        >
          Reports
        </TabsTab>
        <TabsIndicator className="absolute -bottom-px left-(--active-tab-left) h-0.5 w-(--active-tab-width) bg-foreground transition-[left,width] duration-200" />
      </TabsList>
      <TabsPanel
        className="rounded-xl py-2 text-sm text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
        value="overview"
      >
        Revenue, visitors and sign-ups for the last 30 days.
      </TabsPanel>
      <TabsPanel
        className="rounded-xl py-2 text-sm text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
        value="analytics"
      >
        Where visitors come from and what they do.
      </TabsPanel>
      <TabsPanel
        className="rounded-xl py-2 text-sm text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
        value="reports"
      >
        Monthly reports, ready to download.
      </TabsPanel>
    </Tabs>
  )
}

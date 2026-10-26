"use client"

import { Tabs, TabsList, TabsPanel, TabsTab } from "@ui-sdk/react/tabs"

function Example() {
  return (
    <Tabs className="flex w-full max-w-md gap-4" defaultValue="general" orientation="vertical">
      <TabsList
        className="relative inline-flex h-fit w-fit flex-col items-stretch justify-center rounded-2xl bg-muted p-1 text-muted-foreground"
        aria-label="Preferences"
      >
        <TabsTab
          className="relative inline-flex h-8 cursor-default items-center justify-start gap-1.5 rounded-2xl border border-transparent bg-transparent px-3 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
          value="general"
        >
          General
        </TabsTab>
        <TabsTab
          className="relative inline-flex h-8 cursor-default items-center justify-start gap-1.5 rounded-2xl border border-transparent bg-transparent px-3 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
          value="security"
        >
          Security
        </TabsTab>
        <TabsTab
          className="relative inline-flex h-8 cursor-default items-center justify-start gap-1.5 rounded-2xl border border-transparent bg-transparent px-3 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
          value="integrations"
        >
          Integrations
        </TabsTab>
      </TabsList>
      <TabsPanel
        className="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30 min-w-0 flex-1"
        value="general"
      >
        Language, time zone and start page.
      </TabsPanel>
      <TabsPanel
        className="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30 min-w-0 flex-1"
        value="security"
      >
        Passkeys, sessions and recovery codes.
      </TabsPanel>
      <TabsPanel
        className="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30 min-w-0 flex-1"
        value="integrations"
      >
        Connect your calendar and chat apps.
      </TabsPanel>
    </Tabs>
  )
}

export { Example }

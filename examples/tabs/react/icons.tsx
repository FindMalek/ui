"use client"

import { Tabs, TabsList, TabsPanel, TabsTab, TabsTabIcon } from "@ui-sdk/react/tabs"
import { Archive, Mail, Reply } from "lucide-react"

function Example() {
  return (
    <Tabs className="flex w-full max-w-md flex-col gap-2" defaultValue="inbox">
      <TabsList
        className="relative inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
        aria-label="Mail"
      >
        <TabsTab
          className="relative inline-flex h-full flex-1 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-1.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
          value="inbox"
        >
          <TabsTabIcon className="flex">
            <Mail className="pointer-events-none block size-4 shrink-0" />
          </TabsTabIcon>
          Inbox
        </TabsTab>
        <TabsTab
          className="relative inline-flex h-full flex-1 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-1.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
          value="replies"
        >
          <TabsTabIcon mirror className="flex">
            <Reply className="pointer-events-none block size-4 shrink-0" />
          </TabsTabIcon>
          Replies
        </TabsTab>
        <TabsTab
          className="relative inline-flex h-full flex-1 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-1.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
          value="archive"
        >
          <TabsTabIcon className="flex">
            <Archive className="pointer-events-none block size-4 shrink-0" />
          </TabsTabIcon>
          Archive
        </TabsTab>
      </TabsList>
      <TabsPanel
        className="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
        value="inbox"
      >
        Messages sent to you.
      </TabsPanel>
      <TabsPanel
        className="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
        value="replies"
      >
        Replies to your messages.
      </TabsPanel>
      <TabsPanel
        className="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
        value="archive"
      >
        Messages you put away.
      </TabsPanel>
    </Tabs>
  )
}

export { Example }

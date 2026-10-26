import { Tabs, TabsList, TabsPanel, TabsTab, TabsTabIcon } from "@ui-sdk/solid/tabs"

function Example() {
  return (
    <Tabs class="flex w-full max-w-md flex-col gap-2" defaultValue="inbox">
      <TabsList
        class="relative inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
        aria-label="Mail"
      >
        <TabsTab
          class="relative inline-flex h-full flex-1 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-1.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
          value="inbox"
        >
          <TabsTabIcon class="flex">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              class="pointer-events-none block size-4 shrink-0"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
          </TabsTabIcon>
          Inbox
        </TabsTab>
        <TabsTab
          class="relative inline-flex h-full flex-1 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-1.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
          value="replies"
        >
          <TabsTabIcon mirror class="flex">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              class="pointer-events-none block size-4 shrink-0"
            >
              <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
              <path d="m9 17-5-5 5-5" />
            </svg>
          </TabsTabIcon>
          Replies
        </TabsTab>
        <TabsTab
          class="relative inline-flex h-full flex-1 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-1.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
          value="archive"
        >
          <TabsTabIcon class="flex">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              class="pointer-events-none block size-4 shrink-0"
            >
              <rect width="20" height="5" x="2" y="3" rx="1" />
              <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
              <path d="M10 12h4" />
            </svg>
          </TabsTabIcon>
          Archive
        </TabsTab>
      </TabsList>
      <TabsPanel
        class="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
        value="inbox"
      >
        Messages sent to you.
      </TabsPanel>
      <TabsPanel
        class="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
        value="replies"
      >
        Replies to your messages.
      </TabsPanel>
      <TabsPanel
        class="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
        value="archive"
      >
        Messages you put away.
      </TabsPanel>
    </Tabs>
  )
}

export { Example }

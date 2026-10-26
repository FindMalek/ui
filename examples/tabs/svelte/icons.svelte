<script lang="ts">
  import { Archive, Mail, Reply } from "@lucide/svelte"
  import { Tabs, TabsList, TabsPanel, TabsTab, TabsTabIcon } from "@ui-sdk/svelte/tabs"
</script>

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
        <Mail class="pointer-events-none block size-4 shrink-0" />
      </TabsTabIcon>
      Inbox
    </TabsTab>
    <TabsTab
      class="relative inline-flex h-full flex-1 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-1.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
      value="replies"
    >
      <TabsTabIcon mirror class="flex">
        <Reply class="pointer-events-none block size-4 shrink-0" />
      </TabsTabIcon>
      Replies
    </TabsTab>
    <TabsTab
      class="relative inline-flex h-full flex-1 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-1.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
      value="archive"
    >
      <TabsTabIcon class="flex">
        <Archive class="pointer-events-none block size-4 shrink-0" />
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

import "@ui-sdk/web/tabs"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-tabs class="flex w-full max-w-md flex-col gap-2" default-value="overview">
      <ui-tabs-list class="relative flex items-center gap-1 border-b border-border pb-1" aria-label="Dashboard">
        <ui-tabs-tab value="overview">
          <button class="inline-flex h-8 items-center justify-center gap-1.5 rounded-2xl border border-transparent px-2.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground dark:text-muted-foreground dark:data-selected:text-foreground">Overview</button>
        </ui-tabs-tab>
        <ui-tabs-tab value="analytics">
          <button class="inline-flex h-8 items-center justify-center gap-1.5 rounded-2xl border border-transparent px-2.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground dark:text-muted-foreground dark:data-selected:text-foreground">Analytics</button>
        </ui-tabs-tab>
        <ui-tabs-tab value="reports">
          <button class="inline-flex h-8 items-center justify-center gap-1.5 rounded-2xl border border-transparent px-2.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground dark:text-muted-foreground dark:data-selected:text-foreground">Reports</button>
        </ui-tabs-tab>
        <ui-tabs-indicator class="absolute -bottom-px left-(--active-tab-left) h-0.5 w-(--active-tab-width) bg-foreground transition-[left,width] duration-200"></ui-tabs-indicator>
      </ui-tabs-list>
      <ui-tabs-panel class="rounded-xl py-2 text-sm text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30" value="overview">Revenue, visitors and sign-ups for the last 30 days.</ui-tabs-panel>
      <ui-tabs-panel class="rounded-xl py-2 text-sm text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30" value="analytics">Where visitors come from and what they do.</ui-tabs-panel>
      <ui-tabs-panel class="rounded-xl py-2 text-sm text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30" value="reports">Monthly reports, ready to download.</ui-tabs-panel>
    </ui-tabs>
  `
}

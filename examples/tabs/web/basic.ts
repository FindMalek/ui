import "@ui-sdk/web/tabs"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-tabs class="flex w-full max-w-md flex-col gap-2" default-value="account">
      <ui-tabs-list class="relative inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground" aria-label="Settings">
        <ui-tabs-tab value="account">
          <button type="button" class="relative inline-flex h-full flex-1 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-1.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50">Account</button>
        </ui-tabs-tab>
        <ui-tabs-tab value="password">
          <button type="button" class="relative inline-flex h-full flex-1 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-1.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50">Password</button>
        </ui-tabs-tab>
      </ui-tabs-list>
      <ui-tabs-panel class="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30" value="account">Manage your name, email address, and profile.</ui-tabs-panel>
      <ui-tabs-panel class="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30" value="password">Choose a new password for your account.</ui-tabs-panel>
    </ui-tabs>
  `
}

export { mount }

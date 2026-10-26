import "@ui-sdk/web/tabs"
import { Archive, createElement, Mail, Reply } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-tabs class="flex w-full max-w-md flex-col gap-2" default-value="inbox">
      <ui-tabs-list class="relative inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground" aria-label="Mail">
        <ui-tabs-tab value="inbox">
          <button type="button" class="relative inline-flex h-full flex-1 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-1.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50">
            <ui-tabs-tab-icon class="flex">${createElement(Mail, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-tabs-tab-icon>
            Inbox
          </button>
        </ui-tabs-tab>
        <ui-tabs-tab value="replies">
          <button type="button" class="relative inline-flex h-full flex-1 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-1.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50">
            <ui-tabs-tab-icon mirror class="flex">${createElement(Reply, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-tabs-tab-icon>
            Replies
          </button>
        </ui-tabs-tab>
        <ui-tabs-tab value="archive">
          <button type="button" class="relative inline-flex h-full flex-1 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-1.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50">
            <ui-tabs-tab-icon class="flex">${createElement(Archive, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-tabs-tab-icon>
            Archive
          </button>
        </ui-tabs-tab>
      </ui-tabs-list>
      <ui-tabs-panel class="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30" value="inbox">Messages sent to you.</ui-tabs-panel>
      <ui-tabs-panel class="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30" value="replies">Replies to your messages.</ui-tabs-panel>
      <ui-tabs-panel class="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30" value="archive">Messages you put away.</ui-tabs-panel>
    </ui-tabs>
  `
}

export { mount }

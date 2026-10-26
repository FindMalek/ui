import "@ui-sdk/web/tabs"

const folders = [
  { value: "inbox", label: "Inbox", count: 12 },
  { value: "unread", label: "Unread", count: 3 },
  { value: "archived", label: "Archived", count: 0 },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-tabs class="flex w-full max-w-md flex-col gap-2" default-value="inbox">
      <ui-tabs-list class="flex flex-wrap gap-1" aria-label="Mail">
        ${folders
          .map(
            (folder) => `
              <ui-tabs-tab value="${folder.value}">
                <button class="group inline-flex h-8 items-center gap-1.5 rounded-2xl border border-transparent px-3 text-sm font-medium whitespace-nowrap outline-none transition-[color,background-color,box-shadow] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 text-foreground/60 not-data-selected:hover:bg-muted not-data-selected:hover:text-foreground data-selected:bg-primary data-selected:text-primary-foreground dark:text-muted-foreground dark:not-data-selected:hover:text-foreground dark:data-selected:text-primary-foreground">
                  ${folder.label}
                  ${folder.count > 0 ? `<span class="inline-flex h-5 items-center rounded-2xl px-1.5 text-xs font-medium tabular-nums bg-foreground/10 text-foreground group-data-selected:bg-primary-foreground/20 group-data-selected:text-primary-foreground">${folder.count}</span>` : ""}
                </button>
              </ui-tabs-tab>`,
          )
          .join("")}
      </ui-tabs-list>
      ${folders
        .map(
          (folder) =>
            `<ui-tabs-panel class="rounded-xl py-2 text-sm text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30" value="${folder.value}">${folder.count > 0 ? `${folder.count} conversations.` : "Nothing archived yet."}</ui-tabs-panel>`,
        )
        .join("")}
    </ui-tabs>
  `
}

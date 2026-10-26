import "@ui-sdk/web/tabs"

const pages = [
  { value: "overview", href: "#project-overview", label: "Overview", content: "Everything at a glance." },
  { value: "activity", href: "#project-activity", label: "Activity", content: "What changed this week." },
  { value: "members", href: "#project-members", label: "Members", content: "Who can edit the project." },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-tabs class="flex w-full max-w-md flex-col gap-2" default-value="overview">
      <ui-tabs-list class="relative inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground" aria-label="Project">
        ${pages
          .map(
            (page) => `
              <ui-tabs-tab value="${page.value}">
                <a class="relative z-10 inline-flex h-6.5 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-2.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50" href="${page.href}">${page.label}</a>
              </ui-tabs-tab>`,
          )
          .join("")}
        <ui-tabs-indicator class="pointer-events-none absolute top-(--active-tab-top) left-(--active-tab-left) h-(--active-tab-height) w-(--active-tab-width) rounded-2xl bg-background transition-[top,left,width,height] duration-300 ease-out data-[activation-direction=none]:transition-none motion-reduce:transition-none"></ui-tabs-indicator>
      </ui-tabs-list>
      ${pages
        .map(
          (page) =>
            `<ui-tabs-panel class="box-border min-h-12 rounded-xl py-2 text-sm leading-5 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30" value="${page.value}">${page.content}</ui-tabs-panel>`,
        )
        .join("")}
    </ui-tabs>
  `
}

export { mount }

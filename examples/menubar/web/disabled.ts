import "@ui-sdk/web/menubar"
import "@ui-sdk/web/menu"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-start gap-3">
      <ui-menubar class="flex h-8 w-fit items-center rounded-2xl border border-border p-[3px]">
        <ui-menu>
          <ui-menu-trigger>
            <button class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50">File</button>
          </ui-menu-trigger>
          <ui-menu-content class="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
            <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">New File</ui-menu-item>
            <ui-menu-item disabled class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">Revert File</ui-menu-item>
          </ui-menu-content>
        </ui-menu>
        <ui-menu>
          <ui-menu-trigger disabled>
            <button class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50">Share</button>
          </ui-menu-trigger>
          <ui-menu-content class="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
            <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">Email link</ui-menu-item>
          </ui-menu-content>
        </ui-menu>
      </ui-menubar>
      <ui-menubar disabled class="flex h-8 w-fit items-center rounded-2xl border border-border p-[3px] data-disabled:opacity-50">
        ${["Edit", "View"]
          .map(
            (label) => `
              <ui-menu>
                <ui-menu-trigger>
                  <button class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30">${label}</button>
                </ui-menu-trigger>
                <ui-menu-content class="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
                  <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">Unavailable</ui-menu-item>
                </ui-menu-content>
              </ui-menu>
            `,
          )
          .join("")}
      </ui-menubar>
    </div>
  `
}

export { mount }

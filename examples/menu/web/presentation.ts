import "@ui-sdk/web/menu"
import { ChevronRight, createElement, Download, Link, Share, Trash } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-menu presentation="sheet">
      <ui-menu-trigger>
        <button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Options</button>
      </ui-menu-trigger>
      <ui-menu-content class="outline-none data-[presentation=popover]:bg-popover text-popover-foreground ring-1 ring-foreground/5 data-[presentation=popover]:min-w-44 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl p-1 text-sm shadow-xl transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-[presentation=sheet]:bg-popover text-popover-foreground ring-1 ring-foreground/5 data-[presentation=sheet]:rounded-t-3xl px-2 pt-2 pb-[max(env(safe-area-inset-bottom),0.75rem)] text-base [--sheet-backdrop:rgb(0_0_0/0.4)] motion-reduce:transition-none">
        <div aria-hidden="true" class="mx-auto mb-2 h-1 w-10 rounded-full bg-input"></div>
        <ui-menu-item class="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground" value="share">
          ${createElement(Share, { class: "size-5 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
          Share
        </ui-menu-item>
        <ui-menu-item class="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground" value="copy-link">
          ${createElement(Link, { class: "size-5 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
          Copy link
        </ui-menu-item>
        <ui-menu-sub>
          <ui-menu-sub-trigger class="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground">
            ${createElement(Download, { class: "size-5 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
            Move to
            ${createElement(ChevronRight, { class: "ms-auto size-4 text-muted-foreground transition-transform group-data-open:rotate-90 rtl:rotate-180 rtl:group-data-open:rotate-90 motion-reduce:transition-none", "aria-hidden": "true" }).outerHTML}
          </ui-menu-sub-trigger>
          <ui-menu-sub-content class="outline-none data-[presentation=popover]:bg-popover text-popover-foreground ring-1 ring-foreground/5 data-[presentation=popover]:min-w-44 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl p-1 text-sm shadow-xl transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
            <ui-menu-item class="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground" value="inbox">Inbox</ui-menu-item>
            <ui-menu-item class="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground" value="archive">Archive</ui-menu-item>
          </ui-menu-sub-content>
        </ui-menu-sub>
        <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
        <ui-menu-item class="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground" value="delete" destructive>
          ${createElement(Trash, { class: "size-5 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
          Delete
        </ui-menu-item>
      </ui-menu-content>
    </ui-menu>
    <output class="mt-3 text-sm text-muted-foreground block min-h-5">Opens as a sheet</output>
  `
  root.addEventListener(
    "action",
    (event) => {
      root.querySelector("output")!.textContent =
        `Ran ${(event as CustomEvent<{ value: string }>).detail.value}`
    },
    { capture: true },
  )
}

export { mount }

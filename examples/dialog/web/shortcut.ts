import "@ui-sdk/web/dialog"
import { createElement, File, Search } from "lucide"

const pages = ["Introduction", "Installation", "Dialog", "Alert Dialog", "Menu"]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-dialog>
      <ui-dialog-trigger shortcut="mod+j">
        <button class="inline-flex h-8 shrink-0 cursor-default items-center justify-start gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 w-56">
          ${createElement(Search, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          Search docs
          <ui-dialog-shortcut class="ms-auto inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-muted px-1 font-sans text-xs font-medium text-muted-foreground"></ui-dialog-shortcut>
        </button>
      </ui-dialog-trigger>
      <ui-dialog-backdrop class="fixed inset-0 bg-black/30 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-sm data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none"></ui-dialog-backdrop>
      <ui-dialog-content class="fixed top-1/2 left-1/2 grid w-full max-w-[calc(100%-2rem)] -translate-1/2 gap-6 rounded-[min(var(--radius-4xl),24px)] border-0 bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 sm:max-w-md motion-reduce:transition-none">
        <ui-dialog-title class="sr-only">Search docs</ui-dialog-title>
        <input aria-label="Search" placeholder="Search…" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base font-normal text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:opacity-50 md:text-sm" />
        <div class="grid gap-0.5">
          ${pages
            .map(
              (page) =>
                `<ui-dialog-close value="${page}"><button class="flex min-h-7 cursor-default items-center gap-2 rounded-xl border-0 bg-transparent px-2 py-1.5 text-start text-sm outline-none select-none hover:bg-muted focus-visible:bg-muted">${createElement(File, { class: "size-4 text-muted-foreground", "aria-hidden": "true" }).outerHTML}${page}</button></ui-dialog-close>`,
            )
            .join("")}
        </div>
      </ui-dialog-content>
    </ui-dialog>
  `
}

export { mount }

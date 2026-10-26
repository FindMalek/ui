import "@ui-sdk/web/alert-dialog"
import { createElement, Share } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-alert-dialog>
      <ui-alert-dialog-trigger><button class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">Share project</button></ui-alert-dialog-trigger>
      <ui-alert-dialog-backdrop class="fixed inset-0 bg-black/30 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-sm data-starting-style:opacity-0 data-ending-style:opacity-0"></ui-alert-dialog-backdrop>
      <ui-alert-dialog-content class="fixed top-1/2 left-1/2 grid w-full max-w-xs -translate-1/2 gap-6 rounded-[min(var(--radius-4xl),24px)] bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 sm:max-w-md dark:ring-foreground/10">
        <div class="grid grid-rows-[auto_auto_1fr] place-items-center gap-1.5 gap-x-6 text-center sm:grid-rows-[auto_1fr] sm:place-items-start sm:text-start">
          <div class="mb-2 inline-flex size-16 items-center justify-center rounded-full bg-muted sm:row-span-2">${createElement(Share, { class: "size-8", "aria-hidden": "true" }).outerHTML}</div>
          <ui-alert-dialog-title class="text-lg font-medium sm:col-start-2">Share this project?</ui-alert-dialog-title>
          <ui-alert-dialog-description class="text-sm text-balance text-muted-foreground md:text-pretty">Anyone with the link will be able to view and edit this project.</ui-alert-dialog-description>
        </div>
        <div class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <ui-alert-dialog-close><button class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">Cancel</button></ui-alert-dialog-close>
          <ui-alert-dialog-close value="confirm"><button class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50">Share</button></ui-alert-dialog-close>
        </div>
      </ui-alert-dialog-content>
    </ui-alert-dialog>
  `
}

import "@ui-sdk/web/file-input"
import { Check, createElement, Image, X } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-file-input multiple accept="image/*" max-files="4" class="flex w-full max-w-md flex-col gap-3">
      <ui-file-input-dropzone role="region" aria-label="Gallery upload" class="group flex flex-col items-center gap-4 rounded-3xl border border-dashed border-border px-6 py-10 text-center transition-colors data-drag-accept:border-ring data-drag-accept:bg-muted/50 data-drag-reject:border-destructive data-drag-reject:bg-destructive/10 data-drag-reject:text-destructive dark:data-drag-reject:bg-destructive/20">
        ${createElement(X, { class: "hidden size-5 group-data-drag-reject:block", "aria-hidden": "true" }).outerHTML}
        ${createElement(Check, { class: "hidden size-5 group-data-drag-accept:block", "aria-hidden": "true" }).outerHTML}
        ${createElement(Image, { class: "size-5 group-data-drag-accept:hidden group-data-drag-reject:hidden", "aria-hidden": "true" }).outerHTML}
        <p class="text-sm font-medium">
          <span class="hidden group-data-drag-reject:inline">Only up to 4 images</span>
          <span class="hidden group-data-drag-accept:inline">Release to add</span>
          <span class="group-data-drag-accept:hidden group-data-drag-reject:hidden">Drag up to 4 images here</span>
        </p>
        <ui-file-input-trigger><button class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30 group-data-dragging:hidden">Browse</button></ui-file-input-trigger>
      </ui-file-input-dropzone>
      <ui-file-input-list aria-label="Images" class="flex flex-wrap gap-2">
        <template>
          <ui-file-input-item class="group flex h-7 items-center gap-1.5 rounded-2xl bg-secondary ps-3 pe-1 text-xs text-secondary-foreground outline-none first-of-type:bg-primary first-of-type:text-primary-foreground focus-visible:ring-3 focus-visible:ring-ring/30">
            <span class="hidden font-medium group-first-of-type:inline">Cover:</span>
            <span data-file="name" class="max-w-32 truncate"></span>
            <ui-file-input-item-remove><button type="button" class="inline-flex size-5 items-center justify-center rounded-xl outline-none not-data-disabled:hover:bg-current/10 data-disabled:opacity-50">${createElement(X, { class: "size-3", "aria-hidden": "true" }).outerHTML}</button></ui-file-input-item-remove>
          </ui-file-input-item>
        </template>
      </ui-file-input-list>
    </ui-file-input>
  `
}

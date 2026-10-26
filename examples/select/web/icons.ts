import "@ui-sdk/web/select"
import { Check, ChevronDown, createElement, TextAlignCenter, TextAlignEnd, TextAlignStart } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-select default-value="start">
      <div class="flex w-56 max-w-full flex-col gap-2">
        <ui-select-label class="text-sm leading-none font-medium">Text alignment</ui-select-label>
        <ui-select-trigger>
          <button class="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent">
            <ui-select-value-icon class="flex shrink-0 text-muted-foreground"></ui-select-value-icon>
            <ui-select-value class="min-w-0 flex-1 truncate text-start"></ui-select-value>
            ${createElement(ChevronDown, { class: "pointer-events-none block size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-select-trigger>
      </div>
      <ui-select-content class="max-h-(--available-height) scroll-py-1 overflow-x-hidden overflow-y-auto box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none">
        <ui-select-item value="start" class="group relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
          <ui-select-item-icon mirror class="flex shrink-0 text-muted-foreground group-data-highlighted:text-accent-foreground">${createElement(TextAlignStart, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-select-item-icon>
          Start
          <ui-select-item-indicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">${createElement(Check, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-select-item-indicator>
        </ui-select-item>
        <ui-select-item value="center" class="group relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
          <ui-select-item-icon class="flex shrink-0 text-muted-foreground group-data-highlighted:text-accent-foreground">${createElement(TextAlignCenter, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-select-item-icon>
          Center
          <ui-select-item-indicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">${createElement(Check, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-select-item-indicator>
        </ui-select-item>
        <ui-select-item value="end" class="group relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
          <ui-select-item-icon mirror class="flex shrink-0 text-muted-foreground group-data-highlighted:text-accent-foreground">${createElement(TextAlignEnd, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-select-item-icon>
          End
          <ui-select-item-indicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">${createElement(Check, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-select-item-indicator>
        </ui-select-item>
      </ui-select-content>
    </ui-select>
  `
}

export { mount }

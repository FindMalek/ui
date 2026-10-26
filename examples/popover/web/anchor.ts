import "@ui-sdk/web/popover"
import { createElement, Settings } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex items-center gap-2">
      <input id="popover-anchor" placeholder="Search" aria-label="Search" class="h-8 w-64 min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm motion-reduce:transition-none" />
      <ui-popover>
        <ui-popover-trigger><button aria-label="Search filters" class="inline-flex cursor-default size-8 shrink-0 items-center justify-center rounded-2xl border border-border bg-background bg-clip-padding whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">${createElement(Settings, { class: "size-4", "aria-hidden": "true" }).outerHTML}</button></ui-popover-trigger>
        <ui-popover-content anchor="#popover-anchor" align="start" side-offset="8" class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
          <div class="flex flex-col gap-1">
            <ui-popover-title class="text-base font-medium">Filters</ui-popover-title>
            <ui-popover-description class="text-sm text-muted-foreground">The popover lines up with the search field.</ui-popover-description>
          </div>
        </ui-popover-content>
      </ui-popover>
    </div>
  `
}

export { mount }

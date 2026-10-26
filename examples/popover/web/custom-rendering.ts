import "@ui-sdk/web/popover"
import { Bell, createElement } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-popover>
      <ui-popover-trigger shortcut="mod+u"><button class="group inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">${createElement(Bell, { class: "size-4", "aria-hidden": "true" }).outerHTML}<span class="group-data-open:hidden">Show updates</span><span class="hidden group-data-open:inline">Hide updates</span><ui-popover-shortcut class="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-muted px-1 font-sans text-xs font-medium text-muted-foreground"></ui-popover-shortcut></button></ui-popover-trigger>
      <ui-popover-content class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
        <div class="flex flex-col gap-1">
          <ui-popover-title as-child><h3 class="text-base font-medium">Updates</h3></ui-popover-title>
          <ui-popover-description class="text-sm text-muted-foreground">Version 2.0 is out.</ui-popover-description>
        </div>
        <ui-popover-close><a href="https://example.com/changelog" class="self-start rounded-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30">Read the changelog</a></ui-popover-close>
      </ui-popover-content>
    </ui-popover>
  `
}

import "@ui-sdk/web/tooltip"
import "@ui-sdk/web/popover"
import { Bell, createElement, ExternalLink } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex items-center gap-3">
      <ui-popover>
        <ui-tooltip>
          <ui-tooltip-trigger>
            <ui-popover-trigger><button class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none data-open:bg-muted">${createElement(Bell, { class: "size-4", "aria-hidden": "true" }).outerHTML}</button></ui-popover-trigger>
          </ui-tooltip-trigger>
          <ui-tooltip-content class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none">Notifications</ui-tooltip-content>
        </ui-tooltip>
        <ui-popover-content side-offset="8" class="flex w-64 origin-(--transform-origin) flex-col gap-1 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
          <ui-popover-title class="text-base font-medium">Notifications</ui-popover-title>
          <ui-popover-description class="text-muted-foreground">You're all caught up.</ui-popover-description>
        </ui-popover-content>
      </ui-popover>
      <ui-tooltip>
        <ui-tooltip-trigger><a href="https://example.com/changelog" class="inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30">Changelog${createElement(ExternalLink, { class: "size-3.5", "aria-hidden": "true" }).outerHTML}</a></ui-tooltip-trigger>
        <ui-tooltip-content class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none">What's new in 2.0</ui-tooltip-content>
      </ui-tooltip>
    </div>
  `
}

export { mount }

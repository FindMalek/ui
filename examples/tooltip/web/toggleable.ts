import "@ui-sdk/web/tooltip"
import { createElement, Info } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-xs items-center gap-2 text-sm">
      <span class="font-medium">Storage</span>
      <span class="flex-1 text-muted-foreground">12.4 of 15 GB used</span>
      <ui-tooltip toggleable>
        <ui-tooltip-trigger><button aria-label="About storage" class="inline-flex size-7 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none">${createElement(Info, { class: "size-4", "aria-hidden": "true" }).outerHTML}</button></ui-tooltip-trigger>
        <ui-tooltip-content side-offset="8" class="inline-flex w-fit max-w-56 origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none">
          <ui-tooltip-arrow class="size-2.5 rotate-45 rounded-[2px] bg-foreground data-[side=bottom]:-top-1 data-[side=left]:-right-1 data-[side=right]:-left-1 data-[side=top]:-bottom-1"></ui-tooltip-arrow>
          Files in the trash count toward your storage until you empty it.
        </ui-tooltip-content>
      </ui-tooltip>
    </div>
  `
}

export { mount }

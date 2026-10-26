import "@ui-sdk/web/tooltip"
import { Bold, createElement, Italic, Share2, Underline } from "lucide"

const formats = [
  { icon: Bold, label: "Bold" },
  { icon: Italic, label: "Italic" },
  { icon: Underline, label: "Underline" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex items-center gap-1 rounded-3xl border border-border p-1">
      ${formats
        .map(
          (format) => `
        <ui-tooltip>
          <ui-tooltip-trigger><button class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none">${createElement(format.icon, { class: "size-4", "aria-hidden": "true" }).outerHTML}</button></ui-tooltip-trigger>
          <ui-tooltip-content class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none">${format.label}</ui-tooltip-content>
        </ui-tooltip>`,
        )
        .join("")}
      <ui-tooltip type="label">
        <ui-tooltip-trigger><button class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none">¶</button></ui-tooltip-trigger>
        <ui-tooltip-content class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none">Show formatting marks</ui-tooltip-content>
      </ui-tooltip>
      <div class="mx-1 h-5 w-px shrink-0 bg-border"></div>
      <ui-tooltip>
        <ui-tooltip-trigger><button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none">${createElement(Share2, { class: "size-4", "aria-hidden": "true" }).outerHTML}Share</button></ui-tooltip-trigger>
        <ui-tooltip-content class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none">Anyone with the link can view</ui-tooltip-content>
      </ui-tooltip>
    </div>
  `
}

export { mount }

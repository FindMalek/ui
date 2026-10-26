import "@ui-sdk/web/tooltip"

const sides = [
  { side: "right", label: "يمين" },
  { side: "top", label: "أعلى" },
  { side: "bottom", label: "أسفل" },
  { side: "left", label: "يسار" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div dir="rtl" class="flex flex-wrap justify-center gap-2">
      ${sides
        .map(
          ({ side, label }) => `
        <ui-tooltip>
          <ui-tooltip-trigger><button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none">${label}</button></ui-tooltip-trigger>
          <ui-tooltip-content side="${side}" align="start" side-offset="8" class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none">
            <ui-tooltip-arrow class="size-2.5 rotate-45 rounded-[2px] bg-foreground data-[side=bottom]:-top-1 data-[side=left]:-right-1 data-[side=right]:-left-1 data-[side=top]:-bottom-1"></ui-tooltip-arrow>
            أضف إلى المكتبة
          </ui-tooltip-content>
        </ui-tooltip>`,
        )
        .join("")}
    </div>
  `
}

export { mount }

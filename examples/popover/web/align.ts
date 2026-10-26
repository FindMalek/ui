import "@ui-sdk/web/popover"

const aligns = ["start", "center", "end"]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-wrap justify-center gap-2">
      ${aligns
        .map(
          (align) => `
      <ui-popover>
        <ui-popover-trigger><button class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">Align ${align}</button></ui-popover-trigger>
        <ui-popover-content align="${align}" class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
          <div class="flex flex-col gap-1">
            <ui-popover-title class="text-base font-medium">Aligned to the ${align}</ui-popover-title>
            <ui-popover-description class="text-sm text-muted-foreground">The popover lines up with the trigger's ${align}.</ui-popover-description>
          </div>
        </ui-popover-content>
      </ui-popover>`,
        )
        .join("")}
    </div>
  `
}

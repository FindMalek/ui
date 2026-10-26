import "@ui-sdk/web/autocomplete"

const fruits = ["Apple", "Apricot", "Avocado", "Banana", "Blackberry", "Blueberry"]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div id="autocomplete-positioning-box" class="flex w-72 flex-col gap-2 rounded-2xl border border-dashed border-border p-3">
      <ui-autocomplete modal="pointer" container="#autocomplete-positioning-box">
        <ui-autocomplete-label class="text-sm leading-none font-medium">Fruit</ui-autocomplete-label>
        <ui-autocomplete-input>
          <input class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm" />
        </ui-autocomplete-input>
        <ui-autocomplete-content side="top" align="end" side-offset="10" align-offset="-4" collision-padding="8" anchor="#autocomplete-positioning-box" keep-mounted class="max-h-[min(18rem,var(--available-height))] w-56 origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
          <ui-autocomplete-arrow class="absolute size-2.5 rotate-45 border-e border-b border-foreground/5 bg-popover data-[side=top]:-bottom-[5px] dark:border-foreground/10"></ui-autocomplete-arrow>
          <ui-autocomplete-list>
            ${fruits.map((fruit) => `<ui-autocomplete-item value="${fruit}" class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">${fruit}</ui-autocomplete-item>`).join("")}
          </ui-autocomplete-list>
        </ui-autocomplete-content>
      </ui-autocomplete>
    </div>
  `
}

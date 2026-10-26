import "@ui-sdk/web/menu"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-menu>
      <ui-menu-trigger>
        <button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Panel</button>
      </ui-menu-trigger>
      <ui-menu-content class="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
        <ui-menu-radio-group name="position" value="bottom">
          <ui-menu-group-label class="px-2 py-1 text-xs text-muted-foreground">Position</ui-menu-group-label>
          ${["Top", "Bottom", "Right"]
            .map(
              (option) => `
                <ui-menu-radio-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="${option.toLowerCase()}">
                  <span class="flex size-4 shrink-0 items-center justify-center">
                    <ui-menu-item-indicator class="size-2 rounded-full bg-current"></ui-menu-item-indicator>
                  </span>
                  ${option}
                </ui-menu-radio-item>
              `,
            )
            .join("")}
        </ui-menu-radio-group>
        <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
        <ui-menu-radio-group default-value="comfortable">
          <ui-menu-group-label class="px-2 py-1 text-xs text-muted-foreground">Density</ui-menu-group-label>
          ${["Compact", "Comfortable"]
            .map(
              (option) => `
                <ui-menu-radio-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="${option.toLowerCase()}">
                  <span class="flex size-4 shrink-0 items-center justify-center">
                    <ui-menu-item-indicator class="size-2 rounded-full bg-current"></ui-menu-item-indicator>
                  </span>
                  ${option}
                </ui-menu-radio-item>
              `,
            )
            .join("")}
        </ui-menu-radio-group>
      </ui-menu-content>
    </ui-menu>
    <output class="mt-3 text-sm text-muted-foreground block min-h-5">Panel at the bottom</output>
  `
  const position = root.querySelector("ui-menu-radio-group")!
  position.addEventListener("valuechange", (event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail
    position.setAttribute("value", value)
    root.querySelector("output")!.textContent = `Panel at the ${value}`
  })
}

export { mount }

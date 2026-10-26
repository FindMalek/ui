import "@ui-sdk/web/tooltip"

const controls = [
  { name: "align", values: ["start", "center", "end"], current: "start" },
  { name: "side-offset", label: "sideOffset", values: ["4", "12", "24"], current: "4" },
  { name: "align-offset", label: "alignOffset", values: ["-16", "0", "16"], current: "0" },
  { name: "collision-padding", label: "collisionPadding", values: ["8", "48"], current: "8" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-center gap-6">
      <div class="grid grid-cols-[auto_auto] items-center gap-x-3 gap-y-2">
        ${controls
          .map(
            ({ name, label, values, current }) => `
        <span class="text-end text-sm text-muted-foreground">${label ?? name}</span>
        <div role="group" aria-label="${label ?? name}" data-attribute="${name}" class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground">
          ${values.map((value) => `<button type="button" value="${value}" aria-pressed="${value === current}" class="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:border-border aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none">${value}</button>`).join("")}
        </div>`,
          )
          .join("")}
      </div>
      <ui-tooltip>
        <ui-tooltip-trigger><button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none w-40">Offsets</button></ui-tooltip-trigger>
        <ui-tooltip-content align="start" side-offset="4" align-offset="0" collision-padding="8" class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none"></ui-tooltip-content>
      </ui-tooltip>
    </div>
  `
  const content = root.querySelector("ui-tooltip-content")!
  const describe = () =>
    (content.textContent = `${content.getAttribute("align")}, ${content.getAttribute("side-offset")}px away, shifted ${content.getAttribute("align-offset")}px`)
  describe()
  for (const group of root.querySelectorAll<HTMLElement>("[data-attribute]"))
    group.addEventListener("click", (event) => {
      const button = (event.target as HTMLElement).closest("button")
      if (!button) return
      content.setAttribute(group.dataset.attribute!, button.value)
      for (const other of group.querySelectorAll("button"))
        other.setAttribute("aria-pressed", String(other === button))
      describe()
    })
}

export { mount }

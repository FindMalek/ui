import "@ui-sdk/web/popover"

const choices: Record<string, number[]> = {
  "side-offset": [0, 8, 24],
  "align-offset": [-16, 0, 16],
  "collision-padding": [8, 48],
}
const initial: Record<string, number> = { "side-offset": 8, "align-offset": 0, "collision-padding": 8 }

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-center gap-8">
      <div class="flex flex-col items-center gap-2">
        ${Object.entries(choices)
          .map(
            ([name, values]) => `
        <div role="group" aria-label="${name}" data-attribute="${name}" class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground">
          ${values
            .map(
              (value) =>
                `<button type="button" value="${value}" aria-pressed="${initial[name] === value}" class="inline-flex h-full flex-1 items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground aria-pressed:shadow-sm dark:text-muted-foreground dark:aria-pressed:border-input dark:aria-pressed:bg-input/30 dark:aria-pressed:text-foreground">${name} ${value}</button>`,
            )
            .join("")}
        </div>`,
          )
          .join("")}
      </div>
      <ui-popover>
        <ui-popover-trigger><button class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">Offsets</button></ui-popover-trigger>
        <ui-popover-content align="start" side-offset="8" align-offset="0" collision-padding="8" class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
          <div class="flex flex-col gap-1">
            <ui-popover-title class="text-base font-medium">Offsets</ui-popover-title>
            <ui-popover-description class="text-sm text-muted-foreground"></ui-popover-description>
          </div>
        </ui-popover-content>
      </ui-popover>
    </div>
  `
  const content = root.querySelector("ui-popover-content")!
  const description = root.querySelector("ui-popover-description")!
  const describe = () => {
    const [side, align, padding] = ["side-offset", "align-offset", "collision-padding"].map((name) =>
      content.getAttribute(name),
    )
    description.textContent = `${side}px from the trigger, shifted ${align}px, ${padding}px from the edges.`
  }
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

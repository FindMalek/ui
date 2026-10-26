import "@ui-sdk/web/hover-card"

const controls = [
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
        <span class="text-end text-sm text-muted-foreground">${label}</span>
        <div role="group" aria-label="${label}" data-attribute="${name}" class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground">
          ${values.map((value) => `<button type="button" value="${value}" aria-pressed="${value === current}" class="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:border-border aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none">${value}</button>`).join("")}
        </div>`,
          )
          .join("")}
      </div>
      <ui-hover-card>
        <ui-hover-card-trigger><a href="https://example.com/offsets" class="rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 data-open:underline">Offsets</a></ui-hover-card-trigger>
        <ui-hover-card-content align="start" side-offset="4" align-offset="0" collision-padding="8" class="flex w-56 origin-(--transform-origin) flex-col gap-1 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
          <p class="font-medium">Offsets</p>
          <p class="text-muted-foreground"></p>
        </ui-hover-card-content>
      </ui-hover-card>
    </div>
  `
  const content = root.querySelector("ui-hover-card-content")!
  const describe = () =>
    (content.querySelector("p + p")!.textContent =
      `${content.getAttribute("side-offset")}px from the link, shifted ${content.getAttribute("align-offset")}px, ${content.getAttribute("collision-padding")}px from the edges.`)
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

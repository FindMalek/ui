import "@ui-sdk/web/popover"

const sides = ["top", "right", "bottom", "left"]
const aligns = ["start", "center", "end"]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-center gap-8">
      <div class="flex flex-col items-center gap-2">
        <div role="group" aria-label="Side" data-attribute="side" class="inline-flex cursor-default h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground">
          ${sides
            .map(
              (value) =>
                `<button type="button" value="${value}" aria-pressed="${value === "bottom"}" class="inline-flex cursor-default h-full flex-1 items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none">${value}</button>`,
            )
            .join("")}
        </div>
        <div role="group" aria-label="Align" data-attribute="align" class="inline-flex cursor-default h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground">
          ${aligns
            .map(
              (value) =>
                `<button type="button" value="${value}" aria-pressed="${value === "center"}" class="inline-flex cursor-default h-full flex-1 items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none">${value}</button>`,
            )
            .join("")}
        </div>
      </div>
      <div class="grid w-full max-w-sm gap-3">
<label class="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 text-sm">
  Side offset<span>8px</span>
  <input type="range" data-setting="side-offset" min="0" max="32" value="8" class="col-span-2 w-full accent-primary" />
</label>
<label class="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 text-sm">
  Align offset<span>0px</span>
  <input type="range" data-setting="align-offset" min="-24" max="24" value="0" class="col-span-2 w-full accent-primary" />
</label>
<label class="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 text-sm">
  Collision padding<span>8px</span>
  <input type="range" data-setting="collision-padding" min="0" max="48" value="8" class="col-span-2 w-full accent-primary" />
</label>
</div>
<ui-popover>
        <ui-popover-trigger><button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Placement</button></ui-popover-trigger>
        <ui-popover-content side="bottom" align="center" side-offset="8" align-offset="0" collision-padding="8" class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
          <ui-popover-arrow class="size-2.5 rotate-45 border-foreground/5 bg-popover data-[side=bottom]:-top-[5px] data-[side=bottom]:border-t data-[side=bottom]:border-l data-[side=top]:-bottom-[5px] data-[side=top]:border-r data-[side=top]:border-b data-[side=left]:-right-[5px] data-[side=left]:border-t data-[side=left]:border-r data-[side=right]:-left-[5px] data-[side=right]:border-b data-[side=right]:border-l"></ui-popover-arrow>
          <div class="flex flex-col gap-1">
            <ui-popover-title class="text-base font-medium">bottom center</ui-popover-title>
            <ui-popover-description class="text-sm text-muted-foreground">Choose a side, alignment, and offsets above.</ui-popover-description>
          </div>
        </ui-popover-content>
      </ui-popover>
    </div>
  `
  const content = root.querySelector("ui-popover-content")!
  for (const input of root.querySelectorAll<HTMLInputElement>("input[data-setting]")) {
    input.addEventListener("input", () => {
      content.setAttribute(input.dataset.setting!, input.value)
      input.closest("label")!.querySelector("span")!.textContent = `${input.value}px`
    })
  }
  for (const group of root.querySelectorAll<HTMLElement>("[data-attribute]"))
    group.addEventListener("click", (event) => {
      const button = (event.target as HTMLElement).closest("button")
      if (!button) return
      content.setAttribute(group.dataset.attribute!, button.value)
      for (const other of group.querySelectorAll("button"))
        other.setAttribute("aria-pressed", String(other === button))
      root.querySelector("ui-popover-title")!.textContent =
        `${content.getAttribute("side")} ${content.getAttribute("align")}`
    })
}

export { mount }

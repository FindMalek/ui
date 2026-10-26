import "@ui-sdk/web/popover"
import { CircleQuestionMark, createElement } from "lucide"

const sides = ["top", "right", "bottom", "left"]
const aligns = ["start", "center", "end"]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-center gap-8">
      <div class="flex flex-col items-center gap-2" data-controls>
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
                `<button type="button" value="${value}" aria-pressed="${value === "start"}" class="inline-flex cursor-default h-full flex-1 items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none">${value}</button>`,
            )
            .join("")}
        </div>
      </div>
      <ui-popover>
        <ui-popover-trigger><button aria-label="Help" class="inline-flex cursor-default size-8 shrink-0 items-center justify-center rounded-2xl border border-border bg-background bg-clip-padding whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">${createElement(CircleQuestionMark, { class: "size-4", "aria-hidden": "true" }).outerHTML}</button></ui-popover-trigger>
        <ui-popover-content side="bottom" align="start" side-offset="10" arrow-padding="12" class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
          <ui-popover-arrow class="size-2.5 rotate-45 border-foreground/5 bg-popover data-[side=bottom]:-top-[5px] data-[side=bottom]:border-t data-[side=bottom]:border-l data-[side=top]:-bottom-[5px] data-[side=top]:border-r data-[side=top]:border-b data-[side=left]:-right-[5px] data-[side=left]:border-t data-[side=left]:border-r data-[side=right]:-left-[5px] data-[side=right]:border-b data-[side=right]:border-l"></ui-popover-arrow>
          <div class="flex flex-col gap-1">
            <ui-popover-title class="text-base font-medium">Keyboard shortcuts</ui-popover-title>
            <ui-popover-description class="text-sm text-muted-foreground">Press ? anywhere to see every shortcut.</ui-popover-description>
          </div>
        </ui-popover-content>
      </ui-popover>
    </div>
  `
  const controls = root.querySelector("[data-controls]")!
  const content = root.querySelector("ui-popover-content")!
  for (const group of root.querySelectorAll<HTMLElement>("[data-attribute]"))
    group.addEventListener("click", (event) => {
      const button = (event.target as HTMLElement).closest("button")
      if (!button) return
      content.setAttribute(group.dataset.attribute!, button.value)
      for (const other of group.querySelectorAll("button"))
        other.setAttribute("aria-pressed", String(other === button))
    })
  root.querySelector("ui-popover")!.addEventListener("openchange", (event) => {
    const { value, event: cause } = event.detail
    if (!value && cause?.target instanceof Node && controls.contains(cause.target)) event.preventDefault()
  })
}

export { mount }

import "@ui-sdk/web/menu"

const sides = ["top", "right", "bottom", "left"]
const aligns = ["start", "center", "end"]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="mb-6 flex flex-col items-center gap-2">
      <div class="inline-flex cursor-default h-8 w-fit items-center rounded-2xl bg-muted p-[3px] text-muted-foreground" role="group" aria-label="Side">
        ${sides
          .map(
            (value) =>
              `<button class="inline-flex cursor-default h-full items-center justify-center rounded-2xl border border-transparent px-2.5 text-xs font-medium text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none" name="side" value="${value}" aria-pressed="${value === "bottom"}">${value}</button>`,
          )
          .join("")}
      </div>
      <div class="inline-flex cursor-default h-8 w-fit items-center rounded-2xl bg-muted p-[3px] text-muted-foreground" role="group" aria-label="Align">
        ${aligns
          .map(
            (value) =>
              `<button class="inline-flex cursor-default h-full items-center justify-center rounded-2xl border border-transparent px-2.5 text-xs font-medium text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none" name="align" value="${value}" aria-pressed="${value === "start"}">${value}</button>`,
          )
          .join("")}
      </div>
    </div>
    <ui-menu>
      <ui-menu-trigger>
        <button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Placement</button>
      </ui-menu-trigger>
      <ui-menu-content class="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none" side="bottom" align="start">
        <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4">Cut</ui-menu-item>
        <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4">Copy</ui-menu-item>
        <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4">Paste</ui-menu-item>
      </ui-menu-content>
    </ui-menu>
  `
  const popup = root.querySelector("ui-menu-content")!
  for (const name of ["side", "align"]) {
    const buttons = root.querySelectorAll<HTMLButtonElement>(`button[name=${name}]`)
    for (const button of buttons)
      button.addEventListener("click", () => {
        popup.setAttribute(name, button.value)
        for (const other of buttons) other.setAttribute("aria-pressed", String(other === button))
      })
  }
}

export { mount }

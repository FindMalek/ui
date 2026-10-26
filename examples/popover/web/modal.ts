import "@ui-sdk/web/popover"

const modes = [
  { label: "Non-modal", modal: "false" },
  { label: "Trap focus", modal: "trap-focus" },
  { label: "Modal", modal: "true" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-center gap-4">
      <div class="flex flex-wrap justify-center gap-2">
        ${modes
          .map(
            (mode) => `
        <ui-popover modal="${mode.modal}">
          <ui-popover-trigger><button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">${mode.label}</button></ui-popover-trigger>
          <ui-popover-content class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
            <div class="flex flex-col gap-1">
              <ui-popover-title class="text-base font-medium">${mode.label}</ui-popover-title>
              <ui-popover-description class="text-sm text-muted-foreground">Press Tab, then click the box below.</ui-popover-description>
            </div>
            <ui-popover-close><button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 self-end rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Close</button></ui-popover-close>
          </ui-popover-content>
        </ui-popover>`,
          )
          .join("")}
      </div>
      <button type="button" data-counter class="rounded-2xl border border-dashed border-border px-3 py-1.5 text-sm text-muted-foreground outline-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30">Clicked 0 times. Open a popover, then click here.</button>
    </div>
  `
  let clicks = 0
  const counter = root.querySelector("[data-counter]")!
  counter.addEventListener("click", () => {
    clicks++
    counter.textContent = `Clicked ${clicks} ${clicks === 1 ? "time" : "times"}. Open a popover, then click here.`
  })
}

export { mount }

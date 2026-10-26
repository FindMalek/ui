import "@ui-sdk/web/drawer"

const modes = [
  {
    value: "true",
    label: "Modal",
    description: "The rest of the page is inert and doesn't scroll.",
  },
  {
    value: "trap-focus",
    label: "Trap focus",
    description: "Tab stays inside, and the page still scrolls and takes clicks.",
  },
  {
    value: "false",
    label: "Non-modal",
    description: "The page stays usable. Tab leaves the notes, and Escape closes them while focus is inside.",
  },
]

let count = 0

function mount(root: HTMLElement) {
  const name = `drawer-modal-${++count}`
  root.innerHTML = `
    <div class="grid gap-4">
      <fieldset class="flex flex-wrap gap-4 text-sm">
        <legend class="sr-only">modal</legend>
        ${modes.map((mode) => `<label class="flex items-center gap-2"><input type="radio" name="${name}" value="${mode.value}" ${mode.value === "false" ? "checked" : ""} class="size-4 cursor-default accent-primary" />${mode.label}</label>`).join("")}
        <label class="flex items-center gap-2"><input type="checkbox" data-outside class="size-4 cursor-default accent-primary" />closeOnOutsidePress</label>
      </fieldset>
      <ui-drawer modal="false" close-on-outside-press="false">
        <ui-drawer-trigger><button class="inline-flex cursor-default h-8 w-fit shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Open notes</button></ui-drawer-trigger>
        <ui-drawer-backdrop class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm"></ui-drawer-backdrop>
        <ui-drawer-content class="relative mx-auto flex max-h-[85dvh] w-full max-w-lg flex-col gap-3 rounded-t-[min(var(--radius-4xl),24px)] bg-popover p-4 pb-[max(1rem,env(safe-area-inset-bottom))] text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit">
          <ui-drawer-title class="text-base font-medium text-foreground">Notes</ui-drawer-title>
          <ui-drawer-description class="text-sm text-muted-foreground"></ui-drawer-description>
          <textarea aria-label="Notes" class="h-20 min-h-16 w-full min-w-0 resize-none rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none">Call the printer about the proofs.</textarea>
          <ui-drawer-close><button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Done</button></ui-drawer-close>
        </ui-drawer-content>
      </ui-drawer>
    </div>
  `
  const drawer = root.querySelector("ui-drawer")!
  const backdrop = root.querySelector("ui-drawer-backdrop")!
  const description = root.querySelector("ui-drawer-description")!
  const select = (value: string) => {
    drawer.setAttribute("modal", value)
    backdrop.classList.toggle("hidden", value !== "true")
    description.textContent = modes.find((mode) => mode.value === value)!.description
  }
  for (const radio of root.querySelectorAll<HTMLInputElement>('input[type="radio"]'))
    radio.addEventListener("change", () => select(radio.value))
  const outside = root.querySelector<HTMLInputElement>("[data-outside]")!
  outside.addEventListener("change", () =>
    drawer.setAttribute("close-on-outside-press", String(outside.checked)),
  )
  select("false")
}

export { mount }

import "@ui-sdk/web/trigger-menu"

const people = [
  { value: "ada", label: "Ada Lovelace", keywords: ["ada"] },
  { value: "alan", label: "Alan Turing" },
  { value: "grace", label: "Grace Hopper" },
  { value: "katherine", label: "Katherine Johnson" },
  { value: "linus", label: "Linus Torvalds", disabled: true },
  { value: "margaret", label: "Margaret Hamilton" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-sm flex-col gap-2">
      <ui-trigger-menu>
        <ui-trigger-menu-input>
          <textarea aria-label="Message" class="min-h-20 w-full resize-none rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none"></textarea>
        </ui-trigger-menu-input>
        <ui-trigger-menu-content class="max-h-[min(16rem,var(--available-height))] w-56 max-w-[calc(100vw-2rem)] origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10 motion-reduce:transition-none">
          <ui-trigger-menu-list></ui-trigger-menu-list>
        </ui-trigger-menu-content>
        <template>
          <ui-trigger-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
          </ui-trigger-menu-item>
        </template>
      </ui-trigger-menu>
      <div class="flex flex-wrap gap-2">
        <button type="button" value="mention" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-[color,background-color,box-shadow,translate] hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none">Mention</button>
        <button type="button" value="date" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-[color,background-color,box-shadow,translate] hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none">Insert date</button>
        <button type="button" value="toggle" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-[color,background-color,box-shadow,translate] hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none">Toggle</button>
      </div>
      <p class="text-sm text-muted-foreground"></p>
    </div>
  `
  const menu = root.querySelector("ui-trigger-menu")!
  const result = root.querySelector("p")!
  menu.triggers = [{ char: "@", items: people }]
  for (const button of root.querySelectorAll("button")) {
    button.addEventListener("mousedown", (event) => event.preventDefault())
    button.addEventListener("click", async () => {
      if (button.value === "mention") {
        const closed = await menu.api.open({ trigger: "@" })
        result.textContent = `Closed with ${closed.reason}`
      } else if (button.value === "date") {
        const match = menu.api.getMatch()
        result.textContent = match
          ? `Query “${menu.api.getQuery()}” at ${match.start}`
          : `Open: ${menu.api.isOpen()}`
        menu.api.insert(new Date().toLocaleDateString())
      } else if (menu.api.isOpen()) {
        menu.api.close()
      } else {
        menu.api.setOpen(true)
      }
    })
  }
}

export { mount }

import "@ui-sdk/web/trigger-menu"

const people = [
  { value: "ada", label: "Ada Lovelace", keywords: ["ada"] },
  { value: "alan", label: "Alan Turing" },
  { value: "grace", label: "Grace Hopper" },
  { value: "katherine", label: "Katherine Johnson" },
  { value: "linus", label: "Linus Torvalds", disabled: true },
  { value: "margaret", label: "Margaret Hamilton" },
]

const commands = [
  {
    value: "model",
    label: "model",
    arguments: [
      { name: "model", hint: "<model>", required: true, items: ["opus", "sonnet", "haiku"] },
      { name: "effort", hint: "[effort]", items: ["low", "medium", "high"], allowCustomValue: false },
    ],
  },
  { value: "search", label: "search", arguments: [{ name: "query", hint: "<query>", required: true }] },
  { value: "clear", label: "clear" },
  { value: "send", label: "send", after: "submit" as const },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-trigger-menu auto-highlight="false" loop="false" shortcut="ctrl+j" status="idle">
      <div class="flex w-full max-w-sm flex-col gap-2">
        <ui-trigger-menu-input>
          <textarea aria-label="Message" placeholder="Type @ or /" class="min-h-20 w-full resize-none rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none"></textarea>
        </ui-trigger-menu-input>
        <ul class="min-h-20 text-sm text-muted-foreground"></ul>
      </div>
      <ui-trigger-menu-content class="max-h-[min(16rem,var(--available-height))] w-56 max-w-[calc(100vw-2rem)] origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10 motion-reduce:transition-none">
        <ui-trigger-menu-list></ui-trigger-menu-list>
      </ui-trigger-menu-content>
      <template>
        <ui-trigger-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
        </ui-trigger-menu-item>
      </template>
    </ui-trigger-menu>
  `
  const menu = root.querySelector("ui-trigger-menu")!
  const list = root.querySelector("ul")!
  const note = (line: string) => {
    const item = document.createElement("li")
    item.textContent = line
    list.prepend(item)
    while (list.children.length > 4) {
      list.lastElementChild!.remove()
    }
  }
  menu.triggers = [
    { char: "@", items: people },
    { char: "/", boundary: "start", items: commands },
  ]
  menu.addEventListener("openchange", (event) => {
    const { value, reason, trigger } = event.detail as typeof event.detail & { trigger: string | null }
    note(`${value ? "opened" : "closed"} ${trigger ?? ""} (${reason})`)
  })
  menu.addEventListener("openchangecomplete", (event) =>
    note(event.detail.value ? "finished opening" : "finished closing"),
  )
  menu.addEventListener("querychange", (event) =>
    note(`query “${event.detail.value}”${event.detail.argument ? ` for ${event.detail.argument}` : ""}`),
  )
}

export { mount }

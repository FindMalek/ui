import "@ui-sdk/web/trigger-menu"

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
    <form class="flex w-full max-w-sm flex-col gap-2">
      <ui-trigger-menu>
        <ui-trigger-menu-input>
          <textarea name="prompt" aria-label="Prompt" placeholder="Try /model or /search" class="min-h-20 w-full resize-none rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 font-mono text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none"></textarea>
        </ui-trigger-menu-input>
        <ui-trigger-menu-hint class="font-mono text-base text-muted-foreground md:text-sm"></ui-trigger-menu-hint>
        <ui-trigger-menu-content class="max-h-[min(16rem,var(--available-height))] w-48 max-w-[calc(100vw-2rem)] origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10 motion-reduce:transition-none">
          <ui-trigger-menu-list></ui-trigger-menu-list>
        </ui-trigger-menu-content>
        <template>
          <ui-trigger-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 font-mono text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
          </ui-trigger-menu-item>
        </template>
      </ui-trigger-menu>
      <p class="text-sm text-muted-foreground">/send submits the form.</p>
    </form>
  `
  const menu = root.querySelector("ui-trigger-menu")!
  const last = root.querySelector("p")!
  menu.triggers = [{ char: "/", boundary: "start", type: "command", items: commands }]
  menu.addEventListener("select", (event) => {
    last.textContent = `/${event.detail.value} ${JSON.stringify(event.detail.arguments)}`
  })
  const form = root.querySelector("form")!
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    last.textContent = `Sent: ${new FormData(form).get("prompt")}`
  })
}

export { mount }

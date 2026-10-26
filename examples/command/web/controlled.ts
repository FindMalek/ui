import "@ui-sdk/web/command"

const themes = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-sm flex-col gap-3">
      <ui-command default-value="dark" default-pages="theme" class="flex flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground shadow-sm ring-1 ring-foreground/5 dark:ring-foreground/10">
        <div class="p-1 pb-0">
          <ui-command-input>
            <input aria-label="Search themes" placeholder="Search themes..." class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm" />
          </ui-command-input>
        </div>
        <ui-command-list class="p-1 outline-none">
          <ui-command-page>
            <ui-command-item value="theme" page="theme" class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50">Change theme…</ui-command-item>
          </ui-command-page>
          <ui-command-page value="theme">
            ${themes
              .map(
                (theme) =>
                  `<ui-command-item value="${theme.value}" class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50">${theme.label}</ui-command-item>`,
              )
              .join("")}
          </ui-command-page>
        </ui-command-list>
      </ui-command>
      <output class="text-sm text-muted-foreground"></output>
      <ui-command default-value="system" default-query="s" default-pages="" debug class="flex flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground shadow-sm ring-1 ring-foreground/5 dark:ring-foreground/10">
        <div class="p-1 pb-0">
          <ui-command-input>
            <input aria-label="Search themes, uncontrolled" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm" />
          </ui-command-input>
        </div>
        <ui-command-list class="p-1 outline-none">
          ${themes
            .map(
              (theme) =>
                `<ui-command-item value="${theme.value}" class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50">${theme.label}</ui-command-item>`,
            )
            .join("")}
        </ui-command-list>
      </ui-command>
    </div>
  `
  const command = root.querySelector("ui-command")!
  const output = root.querySelector("output")!
  let value: string | null = "dark"
  let query = ""
  let pages = ["theme"]
  let reason = ""
  const write = () =>
    (output.textContent = `Highlighted ${value ?? "nothing"} (${reason || "start"}), text “${query}”, pages [${pages.join(", ")}]`)
  write()
  command.addEventListener("valuechange", (event) => {
    const detail = (event as CustomEvent<{ value: string | null; reason: string }>).detail
    value = detail.value
    reason = detail.reason
    write()
  })
  command.addEventListener("querychange", (event) => {
    query = (event as CustomEvent<{ value: string }>).detail.value
    write()
  })
  command.addEventListener("pageschange", (event) => {
    pages = (event as CustomEvent<{ value: string[] }>).detail.value
    write()
  })
}

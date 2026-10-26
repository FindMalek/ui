import "@ui-sdk/web/command"

const themes = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-sm flex-col gap-3">
      <div class="flex flex-wrap gap-2">
        <button type="button" data-action="push" class="inline-flex h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px dark:bg-transparent dark:hover:bg-input/30">Open themes</button>
        <button type="button" data-action="pop" class="inline-flex h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px dark:bg-transparent dark:hover:bg-input/30">Back</button>
        <button type="button" data-action="highlight" class="inline-flex h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px dark:bg-transparent dark:hover:bg-input/30">Highlight Dark</button>
        <button type="button" data-action="search" class="inline-flex h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px dark:bg-transparent dark:hover:bg-input/30">Search “li”</button>
        <button type="button" data-action="run" class="inline-flex h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px dark:bg-transparent dark:hover:bg-input/30">Run highlighted</button>
        <button type="button" data-action="focus" class="inline-flex h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px dark:bg-transparent dark:hover:bg-input/30">Focus</button>
      </div>
      <ui-command class="flex flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground shadow-sm ring-1 ring-foreground/5 dark:ring-foreground/10">
        <div class="p-1 pb-0">
          <ui-command-input>
            <input aria-label="Search commands" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm" />
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
      <output class="text-sm text-muted-foreground">Nothing run yet</output>
    </div>
  `
  const command = root.querySelector("ui-command") as HTMLElement & {
    api: {
      push: (page: string) => void
      pop: () => void
      setValue: (value: string | null) => void
      setQuery: (query: string) => void
      run: (value?: string) => void
      focus: () => void
    }
  }
  const palette = command.api
  const output = root.querySelector("output")!
  const actions: Record<string, () => void> = {
    push: () => palette.push("theme"),
    pop: () => palette.pop(),
    highlight: () => palette.setValue("dark"),
    search: () => palette.setQuery("li"),
    run: () => palette.run(),
    focus: () => palette.focus(),
  }
  for (const button of root.querySelectorAll<HTMLElement>("[data-action]"))
    button.addEventListener("click", () => actions[button.dataset.action!]())
  command.addEventListener("action", (event) => {
    output.textContent = `Ran ${(event as CustomEvent<{ value: string }>).detail.value}`
  })
}

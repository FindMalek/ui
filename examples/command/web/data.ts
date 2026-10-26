import type { CommandData } from "@ui-sdk/core/command"
import "@ui-sdk/web/command"

const commands: CommandData = [
  {
    type: "group",
    label: "Navigation",
    items: [
      { value: "home", label: "Go home", keywords: ["start"] },
      { value: "inbox", label: "Open inbox", shortcut: "mod+i" },
    ],
  },
  { type: "separator" },
  {
    type: "group",
    label: "Preferences",
    items: [
      {
        value: "theme",
        label: "Change theme…",
        items: [
          { value: "light", label: "Light" },
          { value: "dark", label: "Dark" },
          { value: "system", label: "System" },
        ],
      },
      { value: "language", label: "Change language…", items: ["English", "Français", "Deutsch", "日本語"] },
      { value: "sign-out", label: "Sign out", shortcut: "mod+shift+q" },
    ],
  },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-sm flex-col gap-3">
      <ui-command class="flex h-80 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5">
        <div class="shrink-0 p-1 pb-0">
          <ui-command-input>
            <input aria-label="Search commands" placeholder="Type a command..." class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5" />
          </ui-command-input>
        </div>
        <ui-command-empty class="m-0 shrink-0 py-6 text-center text-sm leading-5 text-muted-foreground empty:hidden">No results found.</ui-command-empty>
        <template>
          <ui-command-list class="min-h-0 flex-1 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none p-1">
            <ui-command-group>
              <ui-command-group-label class="px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground"></ui-command-group-label>
              <ui-command-item class="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
                <ui-command-shortcut class="ms-auto shrink-0 text-xs leading-4 tracking-widest text-muted-foreground group-data-highlighted:text-foreground"></ui-command-shortcut>
              </ui-command-item>
            </ui-command-group>
            <ui-command-separator class="my-1 h-px bg-border/50"></ui-command-separator>
          </ui-command-list>
        </template>
      </ui-command>
      <output class="block min-h-5 text-sm leading-5 text-muted-foreground">Nothing run yet</output>
    </div>
  `
  const command = root.querySelector("ui-command")!
  command.items = commands
  const output = root.querySelector("output")!
  command.addEventListener("action", (event) => {
    output.textContent = `Ran ${(event as CustomEvent<{ value: string }>).detail.value}`
  })
}

export { mount }

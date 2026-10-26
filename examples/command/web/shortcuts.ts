import "@ui-sdk/web/command"
import { createElement, CreditCard, Settings, User } from "lucide"

const settings = [
  { value: "profile", label: "Profile", icon: User, shortcut: "mod+p" },
  { value: "billing", label: "Billing", icon: CreditCard, shortcut: "mod+b" },
  { value: "settings", label: "Settings", icon: Settings, shortcut: "mod+s" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-sm flex-col gap-3">
      <ui-command class="flex h-80 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5">
        <div class="shrink-0 p-1 pb-0">
          <ui-command-input>
            <input aria-label="Search settings" placeholder="Search settings..." class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5" />
          </ui-command-input>
        </div>
        <ui-command-list class="min-h-0 flex-1 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none">
          <ui-command-group class="overflow-hidden p-1 text-foreground">
            <ui-command-group-label class="px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground">Settings</ui-command-group-label>
            ${settings
              .map(
                (item) => `
                  <ui-command-item value="${item.value}" shortcut="${item.shortcut}" class="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
                    <ui-command-item-icon class="flex shrink-0 text-muted-foreground group-data-highlighted:text-foreground">${createElement(item.icon, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-command-item-icon>
                    <span>${item.label}</span>
                    <ui-command-shortcut class="ms-auto shrink-0 text-xs leading-4 tracking-widest text-muted-foreground group-data-highlighted:text-foreground"></ui-command-shortcut>
                  </ui-command-item>
                `,
              )
              .join("")}
          </ui-command-group>
        </ui-command-list>
      </ui-command>
      <output class="block min-h-5 text-sm leading-5 text-muted-foreground">Try a shortcut</output>
    </div>
  `
  const output = root.querySelector("output")!
  root.querySelector("ui-command")!.addEventListener("action", (event) => {
    output.textContent = `Ran ${(event as CustomEvent<{ value: string }>).detail.value}`
  })
}

export { mount }

import "@ui-sdk/web/command"
import { Calculator, Calendar, createElement, CreditCard, Settings, Smile, User } from "lucide"

const groups = [
  {
    label: "Suggestions",
    items: [
      { value: "calendar", label: "Calendar", icon: Calendar },
      { value: "emoji", label: "Search Emoji", icon: Smile },
      { value: "calculator", label: "Calculator", icon: Calculator },
    ],
  },
  {
    label: "Settings",
    items: [
      { value: "profile", label: "Profile", icon: User },
      { value: "billing", label: "Billing", icon: CreditCard },
      { value: "settings", label: "Settings", icon: Settings },
    ],
  },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-command class="flex h-80 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5">
      <div class="shrink-0 p-1 pb-0">
        <ui-command-input>
          <input aria-label="Search commands" placeholder="Type a command or search..." class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5" />
        </ui-command-input>
      </div>
      <ui-command-empty class="m-0 shrink-0 py-6 text-center text-sm leading-5 text-muted-foreground empty:hidden">No results found.</ui-command-empty>
      <ui-command-list class="min-h-0 flex-1 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none">
        ${groups
          .map(
            (group, index) => `
              ${index > 0 ? `<ui-command-separator class="my-1 h-px bg-border/50"></ui-command-separator>` : ""}
              <ui-command-group class="overflow-hidden p-1 text-foreground">
                <ui-command-group-label class="px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground">${group.label}</ui-command-group-label>
                ${group.items
                  .map(
                    (item) => `
                      <ui-command-item value="${item.value}" class="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
                        <ui-command-item-icon class="flex shrink-0 text-muted-foreground group-data-highlighted:text-foreground">${createElement(item.icon, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-command-item-icon>
                        ${item.label}
                      </ui-command-item>
                    `,
                  )
                  .join("")}
              </ui-command-group>
            `,
          )
          .join("")}
      </ui-command-list>
    </ui-command>
  `
}

export { mount }

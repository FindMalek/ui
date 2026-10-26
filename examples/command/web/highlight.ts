import "@ui-sdk/web/command"
import { Calculator, Calendar, createElement, CreditCard, Search, Settings, Smile, User } from "lucide"

const commands = [
  { value: "calendar", label: "Calendar", icon: Calendar },
  { value: "emoji", label: "Search Emoji", icon: Smile },
  { value: "calculator", label: "Calculator", icon: Calculator, disabled: true },
  { value: "profile", label: "Profile", icon: User },
  { value: "billing", label: "Billing", icon: CreditCard },
  { value: "settings", label: "Settings", icon: Settings },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-command class="flex h-80 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5">
      <div class="shrink-0 p-1 pb-0">
        <div class="box-border flex h-8 items-center gap-2 rounded-2xl border border-transparent bg-input/50 px-2.5 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30">
          ${createElement(Search, { class: "pointer-events-none block size-4 shrink-0 opacity-50", "aria-hidden": "true" }).outerHTML}
          <ui-command-input>
            <input aria-label="Search commands" placeholder="Try “prf” or “emo”…" class="m-0 h-full w-full min-w-0 border-0 bg-transparent p-0 text-base leading-6 text-inherit outline-none placeholder:text-muted-foreground md:text-sm md:leading-5" />
          </ui-command-input>
        </div>
      </div>
      <ui-command-empty class="m-0 shrink-0 py-6 text-center text-sm leading-5 text-muted-foreground empty:hidden">No results found.</ui-command-empty>
      <ui-command-list class="min-h-0 flex-1 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none p-1">
        ${commands
          .map(
            (item) => `
              <ui-command-item value="${item.value}" ${item.disabled ? "disabled" : ""} class="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
                <ui-command-item-icon class="flex shrink-0 text-muted-foreground group-data-highlighted:text-foreground">${createElement(item.icon, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-command-item-icon>
                <ui-command-item-text class="data-matched:text-muted-foreground [&_mark]:bg-transparent [&_mark]:font-semibold [&_mark]:text-foreground">${item.label}</ui-command-item-text>
              </ui-command-item>
            `,
          )
          .join("")}
      </ui-command-list>
    </ui-command>
  `
}

export { mount }

import "@ui-sdk/web/combobox"
import { Check, createElement, Search } from "lucide"

const users = [
  { id: 1, name: "Ada Lovelace", username: "ada", role: "Owner" },
  { id: 2, name: "Grace Hopper", username: "grace", role: "Admin" },
  { id: 3, name: "Alan Turing", username: "alan", role: "Member" },
  { id: 4, name: "Margaret Hamilton", username: "margaret", role: "Member" },
  { id: 5, name: "Edsger Dijkstra", username: "edsger", role: "Guest" },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-combobox>
      <div class="flex w-72 flex-col gap-2">
        <ui-combobox-label class="text-sm leading-none font-medium">Mention</ui-combobox-label>
        <div class="flex h-8 items-center gap-2 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1.5 transition-[color,box-shadow] duration-200 has-data-open:border-ring has-data-open:ring-3 has-data-open:ring-ring/30">
          ${createElement(Search, { class: "size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
          <ui-combobox-input>
            <input placeholder="@username" class="h-full min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground md:text-sm" />
          </ui-combobox-input>
        </div>
      </div>
      <ui-combobox-content class="max-h-[min(18rem,var(--available-height))] w-(--anchor-width) min-w-36 origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
        <ui-combobox-empty class="py-2 text-center text-sm text-muted-foreground empty:hidden">No one by that name.</ui-combobox-empty>
        <ui-combobox-list>
          ${users
            .map(
              (user) => `
                <ui-combobox-item value="${user.username}" label="${user.name}" keywords="${user.username}" class="group flex cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground">
                  <span class="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground group-data-selected:bg-primary group-data-selected:text-primary-foreground">${user.name.slice(0, 1)}</span>
                  <span class="flex flex-col">
                    ${user.name}
                    <span class="text-xs text-muted-foreground">@${user.username}</span>
                  </span>
                  ${createElement(Check, { class: "ms-auto hidden size-4 group-data-selected:block", "aria-hidden": "true" }).outerHTML}
                </ui-combobox-item>
              `,
            )
            .join("")}
        </ui-combobox-list>
      </ui-combobox-content>
    </ui-combobox>
  `
}

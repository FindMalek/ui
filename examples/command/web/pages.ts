import "@ui-sdk/web/command"
import { ArrowLeft, createElement, Moon, Users } from "lucide"

const themes = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
]

const teams = [
  { value: "design", label: "Design" },
  { value: "engineering", label: "Engineering" },
  { value: "marketing", label: "Marketing" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-command class="flex h-80 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5">
      <div class="flex min-h-7 shrink-0 flex-wrap items-center gap-1 px-2 pt-1"></div>
      <div class="shrink-0 p-1 pb-0">
        <ui-command-input>
          <input aria-label="Search commands" placeholder="What do you need?" class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5" />
        </ui-command-input>
      </div>
      <ui-command-empty class="m-0 shrink-0 py-6 text-center text-sm leading-5 text-muted-foreground empty:hidden">No results found.</ui-command-empty>
      <ui-command-list class="min-h-0 flex-1 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none p-1">
        <ui-command-page>
          <ui-command-group>
            <ui-command-group-label class="px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground">Workspace</ui-command-group-label>
            <ui-command-item value="theme" page="theme" class="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 in-data-has-icons:not-data-has-icon:ps-8">
              <ui-command-item-icon class="flex shrink-0 text-muted-foreground group-data-highlighted:text-foreground">${createElement(Moon, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-command-item-icon>
              Change theme…
            </ui-command-item>
            <ui-command-item value="teams" page="teams" class="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 in-data-has-icons:not-data-has-icon:ps-8">
              <ui-command-item-icon class="flex shrink-0 text-muted-foreground group-data-highlighted:text-foreground">${createElement(Users, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-command-item-icon>
              Switch team…
            </ui-command-item>
          </ui-command-group>
        </ui-command-page>
        <ui-command-page value="theme">
          ${themes
            .map(
              (theme) =>
                `<ui-command-item value="${theme.value}" class="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 in-data-has-icons:not-data-has-icon:ps-8">${theme.label}</ui-command-item>`,
            )
            .join("")}
        </ui-command-page>
        <ui-command-page value="teams">
          ${teams
            .map(
              (team) =>
                `<ui-command-item value="${team.value}" class="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 in-data-has-icons:not-data-has-icon:ps-8">${team.label}</ui-command-item>`,
            )
            .join("")}
        </ui-command-page>
      </ui-command-list>
    </ui-command>
  `
  const command = root.querySelector("ui-command") as HTMLElement & { api: { pop: () => void } }
  const breadcrumb = command.querySelector("div")!
  const input = command.querySelector("input")!
  const list = command.querySelector("ui-command-list")!
  const back = document.createElement("ui-command-item")
  back.setAttribute("value", "back")
  back.className =
    "group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 in-data-has-icons:not-data-has-icon:ps-8"
  back.innerHTML = `<ui-command-item-icon mirror class="flex shrink-0 text-muted-foreground group-data-highlighted:text-foreground">${createElement(ArrowLeft, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-command-item-icon>Go back`
  command.addEventListener("action", (event) => {
    if ((event as CustomEvent<{ value: string }>).detail.value === "back") command.api.pop()
  })
  command.addEventListener("pageschange", (event) => {
    const pages = (event as CustomEvent<{ value: string[] }>).detail.value
    breadcrumb.innerHTML = pages
      .map(
        (page) =>
          `<span class="inline-flex h-5 items-center rounded-2xl bg-muted px-2 text-xs leading-4 font-medium text-muted-foreground capitalize">${page}</span>`,
      )
      .join("")
    input.placeholder = pages.length ? "Search… (Backspace to go back)" : "What do you need?"
    if (!pages.length) back.remove()
    else if (!back.isConnected) list.append(back)
  })
}

export { mount }

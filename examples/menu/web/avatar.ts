import "@ui-sdk/web/menu"
import { Check, createElement, LogOut, Settings, UserPlus } from "lucide"

const accounts = [
  { value: "personal", name: "Riley Park", initials: "RP" },
  { value: "studio", name: "North Studio", initials: "NS" },
]

function mount(root: HTMLElement) {
  let current = accounts[0]
  let action = ""

  root.innerHTML = `
    <ui-menu>
      <ui-menu-trigger>
        <button
          aria-label="Account"
          class="inline-flex cursor-default size-8 items-center justify-center rounded-full text-xs font-medium bg-primary text-primary-foreground outline-none transition-shadow focus-visible:ring-3 focus-visible:ring-ring/30 data-open:ring-3 data-open:ring-ring/30 motion-reduce:transition-none"
        >${current.initials}</button>
      </ui-menu-trigger>
      <ui-menu-content class="w-56 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none" align="end">
        <div class="flex items-center gap-2 px-2 py-1.5">
          <span data-avatar class="inline-flex cursor-default size-8 shrink-0 items-center justify-center rounded-full text-xs font-medium bg-primary text-primary-foreground">${current.initials}</span>
          <div>
            <div data-name class="text-sm font-medium">${current.name}</div>
            <div data-email class="text-xs text-muted-foreground">${current.value}@example.com</div>
          </div>
        </div>
        <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
        <ui-menu-radio-group value="${current.value}">
          <ui-menu-group-label class="px-2 py-1 text-xs text-muted-foreground">Switch account</ui-menu-group-label>
          ${accounts
            .map(
              (option) => `
                <ui-menu-radio-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="${option.value}" close-on-select>
                  <span class="inline-flex cursor-default size-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold bg-primary text-primary-foreground">${option.initials}</span>
                  ${option.name}
                  ${createElement(Check, { class: "invisible ms-auto size-4 group-data-checked:visible", "aria-hidden": "true" }).outerHTML}
                </ui-menu-radio-item>
              `,
            )
            .join("")}
        </ui-menu-radio-group>
        <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="add-account">
          ${createElement(UserPlus, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
          Add account
        </ui-menu-item>
        <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
        <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="settings">
          ${createElement(Settings, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
          Settings
        </ui-menu-item>
        <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="sign-out">
          ${createElement(LogOut, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
          Sign out
        </ui-menu-item>
      </ui-menu-content>
    </ui-menu>
    <output class="mt-3 text-sm text-muted-foreground block min-h-5">Signed in as ${current.name}</output>
  `
  const show = () => {
    root.querySelector("output")!.textContent = action ? `Ran ${action}` : `Signed in as ${current.name}`
  }

  const avatars = root.querySelectorAll("button, [data-avatar]")
  const name = root.querySelector("[data-name]")!
  const email = root.querySelector("[data-email]")!
  const group = root.querySelector("ui-menu-radio-group")!
  group.addEventListener("valuechange", (event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail
    const next = accounts.find((account) => account.value === value)!
    group.setAttribute("value", value)
    for (const avatar of avatars) {
      avatar.textContent = next.initials
    }
    name.textContent = next.name
    email.textContent = `${next.value}@example.com`
    current = next
    show()
  })
  root.addEventListener(
    "action",
    (event) => {
      action = (event as CustomEvent<{ value: string }>).detail.value
      show()
    },
    { capture: true },
  )
}

export { mount }

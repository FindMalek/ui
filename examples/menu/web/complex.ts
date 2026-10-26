import "@ui-sdk/web/menu"
import {
  Check,
  ChevronRight,
  CircleHelp,
  createElement,
  Keyboard,
  Link,
  LogOut,
  Mail,
  MessageCircle,
  Monitor,
  Moon,
  Plus,
  Settings,
  Sun,
  User,
  UserPlus,
  Users,
} from "lucide"

function mount(root: HTMLElement) {
  let action = ""
  let sidebar = true
  let theme = "system"

  root.innerHTML = `
    <ui-menu>
      <ui-menu-trigger>
        <button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Workspace</button>
      </ui-menu-trigger>
      <ui-menu-content class="min-w-56 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 **:data-[slot=menu-shortcut]:ms-auto **:data-[slot=menu-shortcut]:ps-4 **:data-[slot=menu-shortcut]:text-xs **:data-[slot=menu-shortcut]:tracking-widest **:data-[slot=menu-shortcut]:text-muted-foreground motion-reduce:transition-none">
        <ui-menu-group>
          <ui-menu-group-label class="px-2 py-1 text-xs text-muted-foreground">My account</ui-menu-group-label>
          <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="profile" shortcut="mod+shift+p">
            ${createElement(User, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
            Profile
          </ui-menu-item>
          <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="settings" shortcut="mod+,">
            ${createElement(Settings, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
            Settings
          </ui-menu-item>
          <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="shortcuts" shortcut="mod+k">
            ${createElement(Keyboard, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
            Keyboard shortcuts
          </ui-menu-item>
        </ui-menu-group>
        <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
        <ui-menu-group>
          <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="team">
            ${createElement(Users, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
            Team
          </ui-menu-item>
          <ui-menu-sub>
            <ui-menu-sub-trigger class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 data-open:bg-accent data-open:text-accent-foreground">
              ${createElement(UserPlus, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
              Invite people
              ${createElement(ChevronRight, { class: "ms-auto size-4 rtl:rotate-180", "aria-hidden": "true" }).outerHTML}
            </ui-menu-sub-trigger>
            <ui-menu-sub-content class="min-w-40 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
              <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="invite-email">
                ${createElement(Mail, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
                Email
              </ui-menu-item>
              <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="invite-message">
                ${createElement(MessageCircle, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
                Message
              </ui-menu-item>
              <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
              <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="invite-link">
                ${createElement(Link, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
                Copy invite link
              </ui-menu-item>
            </ui-menu-sub-content>
          </ui-menu-sub>
          <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="new-team" shortcut="mod+t">
            ${createElement(Plus, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
            New team
          </ui-menu-item>
        </ui-menu-group>
        <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
        <ui-menu-checkbox-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="sidebar" checked="true">
          ${createElement(Monitor, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
          Show sidebar
          ${createElement(Check, { class: "invisible ms-auto size-4 group-data-checked:visible", "aria-hidden": "true" }).outerHTML}
        </ui-menu-checkbox-item>
        <ui-menu-sub>
          <ui-menu-sub-trigger class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 data-open:bg-accent data-open:text-accent-foreground">
            <span data-theme-icon class="flex">${createElement(Sun, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}</span>
            Theme
            ${createElement(ChevronRight, { class: "ms-auto size-4 rtl:rotate-180", "aria-hidden": "true" }).outerHTML}
          </ui-menu-sub-trigger>
          <ui-menu-sub-content class="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
            <ui-menu-radio-group value="system">
              <ui-menu-radio-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="light">
                ${createElement(Sun, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
                Light
                ${createElement(Check, { class: "invisible ms-auto size-4 group-data-checked:visible", "aria-hidden": "true" }).outerHTML}
              </ui-menu-radio-item>
              <ui-menu-radio-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="dark">
                ${createElement(Moon, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
                Dark
                ${createElement(Check, { class: "invisible ms-auto size-4 group-data-checked:visible", "aria-hidden": "true" }).outerHTML}
              </ui-menu-radio-item>
              <ui-menu-radio-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="system">
                ${createElement(Monitor, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
                System
                ${createElement(Check, { class: "invisible ms-auto size-4 group-data-checked:visible", "aria-hidden": "true" }).outerHTML}
              </ui-menu-radio-item>
            </ui-menu-radio-group>
          </ui-menu-sub-content>
        </ui-menu-sub>
        <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
        <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="help">
          ${createElement(CircleHelp, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
          Help
        </ui-menu-item>
        <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="sign-out" shortcut="mod+shift+q">
          ${createElement(LogOut, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
          Sign out
        </ui-menu-item>
      </ui-menu-content>
    </ui-menu>
    <output class="mt-3 text-sm text-muted-foreground block min-h-5">Sidebar shown, system theme</output>
  `
  const show = () => {
    root.querySelector("output")!.textContent = action
      ? `Ran ${action}`
      : `Sidebar ${sidebar ? "shown" : "hidden"}, ${theme} theme`
  }

  root.addEventListener(
    "action",
    (event) => {
      action = (event as CustomEvent<{ value: string }>).detail.value
      show()
    },
    { capture: true },
  )
  root.addEventListener(
    "checkedchange",
    (event) => {
      sidebar = (event as CustomEvent<{ value: boolean }>).detail.value
      ;(event.target as HTMLElement).setAttribute("checked", String(sidebar))
      show()
    },
    { capture: true },
  )
  root.addEventListener(
    "valuechange",
    (event) => {
      theme = (event as CustomEvent<{ value: string }>).detail.value
      ;(event.target as HTMLElement).setAttribute("value", theme)
      root.querySelector("[data-theme-icon]")!.replaceChildren(
        createElement(theme === "dark" ? Moon : Sun, {
          class: "size-4 text-muted-foreground group-data-highlighted:text-current",
          "aria-hidden": "true",
        }),
      )
      show()
    },
    { capture: true },
  )
}

export { mount }

import "@ui-sdk/web/menu"
import { Bell, Check, createElement, Mail, Smartphone } from "lucide"

const channels = [
  { value: "email", label: "Email", icon: Mail },
  { value: "sms", label: "Text message", icon: Smartphone },
  { value: "push", label: "Push", icon: Bell },
]

export function mount(root: HTMLElement) {
  let enabled = ["email", "push"]

  root.innerHTML = `
    <ui-menu>
      <ui-menu-trigger>
        <button class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">
          ${createElement(Bell, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          Notifications
        </button>
      </ui-menu-trigger>
      <ui-menu-content class="min-w-48 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
        <ui-menu-group>
          <ui-menu-group-label class="px-2 py-1 text-xs text-muted-foreground">Notify me by</ui-menu-group-label>
          ${channels
            .map(
              (channel) => `
                <ui-menu-checkbox-item
                  class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 data-checked:text-foreground data-unchecked:text-muted-foreground"
                  value="${channel.value}"
                  checked="${enabled.includes(channel.value)}"
                >
                  ${createElement(channel.icon, { class: "size-4", "aria-hidden": "true" }).outerHTML}
                  ${channel.label}
                  ${createElement(Check, { class: "ms-auto hidden size-4 group-data-checked:block", "aria-hidden": "true" }).outerHTML}
                </ui-menu-checkbox-item>
              `,
            )
            .join("")}
        </ui-menu-group>
      </ui-menu-content>
    </ui-menu>
    <output class="mt-3 text-sm text-muted-foreground">On: ${enabled.join(", ")}</output>
  `
  root.addEventListener(
    "checkedchange",
    (event) => {
      const target = event.target as HTMLElement
      const value = target.getAttribute("value")!
      const checked = (event as CustomEvent<{ value: boolean }>).detail.value
      enabled = checked ? [...enabled, value] : enabled.filter((current) => current !== value)
      target.setAttribute("checked", String(checked))
      root.querySelector("output")!.textContent = enabled.length
        ? `On: ${enabled.join(", ")}`
        : "All notifications off"
    },
    { capture: true },
  )
}

import "@ui-sdk/web/menu"
import { Check, createElement, CreditCard, Landmark, Wallet } from "lucide"

const methods = [
  { value: "card", label: "Credit card", icon: CreditCard },
  { value: "wallet", label: "Wallet", icon: Wallet },
  { value: "bank", label: "Bank transfer", icon: Landmark, disabled: true },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-menu>
      <ui-menu-trigger>
        <button class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">
          ${createElement(CreditCard, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          Payment method
        </button>
      </ui-menu-trigger>
      <ui-menu-content class="min-w-48 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
        <ui-menu-radio-group value="card">
          <ui-menu-group-label class="px-2 py-1 text-xs text-muted-foreground">Pay with</ui-menu-group-label>
          ${methods
            .map(
              (option) => `
                <ui-menu-radio-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="${option.value}" ${option.disabled ? "disabled" : ""}>
                  ${createElement(option.icon, { class: "size-4 text-muted-foreground group-data-checked:text-current", "aria-hidden": "true" }).outerHTML}
                  ${option.label}
                  ${createElement(Check, { class: "invisible ms-auto size-4 group-data-checked:visible", "aria-hidden": "true" }).outerHTML}
                </ui-menu-radio-item>
              `,
            )
            .join("")}
        </ui-menu-radio-group>
      </ui-menu-content>
    </ui-menu>
    <output class="mt-3 text-sm text-muted-foreground">Paying with credit card</output>
  `
  const group = root.querySelector("ui-menu-radio-group")!
  group.addEventListener("valuechange", (event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail
    const current = methods.find((option) => option.value === value)!
    group.setAttribute("value", value)
    root
      .querySelector("button svg")!
      .replaceWith(createElement(current.icon, { class: "size-4", "aria-hidden": "true" }))
    root.querySelector("output")!.textContent = `Paying with ${current.label.toLowerCase()}`
  })
}

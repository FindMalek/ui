import {
  Menu,
  MenuContent,
  MenuGroupLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
} from "@ui-sdk/react/menu"
import { Check, CreditCard, Landmark, Wallet } from "lucide-react"
import * as React from "react"

const methods = [
  { value: "card", label: "Credit card", icon: CreditCard },
  { value: "wallet", label: "Wallet", icon: Wallet },
  { value: "bank", label: "Bank transfer", icon: Landmark, disabled: true },
]

export function Example() {
  const [method, setMethod] = React.useState("card")
  const current = methods.find((option) => option.value === method)!

  return (
    <>
      <Menu>
        <MenuTrigger className="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">
          <current.icon className="size-4" />
          Payment method
        </MenuTrigger>
        <MenuContent className="min-w-48 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
          <MenuRadioGroup value={method} onValueChange={setMethod}>
            <MenuGroupLabel className="px-2 py-1 text-xs text-muted-foreground">Pay with</MenuGroupLabel>
            {methods.map((option) => (
              <MenuRadioItem
                key={option.value}
                className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
                value={option.value}
                disabled={option.disabled}
              >
                <option.icon className="size-4 text-muted-foreground group-data-checked:text-current" />
                {option.label}
                <Check className="invisible ms-auto size-4 group-data-checked:visible" />
              </MenuRadioItem>
            ))}
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
      <output className="mt-3 text-sm text-muted-foreground">
        Paying with {current.label.toLowerCase()}
      </output>
    </>
  )
}

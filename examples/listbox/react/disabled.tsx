"use client"

import { Listbox, ListboxItem, ListboxItemIndicator } from "@ui-sdk/react/listbox"
import { Check } from "lucide-react"
import * as React from "react"

const toppings = [
  { value: "basil", label: "Basil" },
  { value: "cheese", label: "Extra cheese" },
  { value: "mushroom", label: "Mushroom" },
  { value: "olive", label: "Olive" },
  { value: "onion", label: "Onion" },
  { value: "pepper", label: "Pepper" },
]

function Example() {
  const [disabled, setDisabled] = React.useState(false)

  return (
    <div className="flex w-full max-w-64 flex-col gap-3 items-start">
      <Listbox
        multiple
        disabled={disabled}
        defaultValue={["basil"]}
        aria-label="Toppings"
        className="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none data-disabled:opacity-50"
      >
        {toppings.map((topping) => (
          <ListboxItem
            key={topping.value}
            value={topping.value}
            disabled={topping.value === "olive"}
            className="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
          >
            {topping.label}
            <ListboxItemIndicator className="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
              <Check aria-hidden="true" className="pointer-events-none block size-4 shrink-0" />
            </ListboxItemIndicator>
          </ListboxItem>
        ))}
      </Listbox>
      <button
        type="button"
        onClick={() => setDisabled(!disabled)}
        className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
      >
        {disabled ? "Enable" : "Disable"} the list
      </button>
    </div>
  )
}

export { Example }

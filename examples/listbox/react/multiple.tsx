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
  const [value, setValue] = React.useState<string[]>(["cheese", "onion"])

  return (
    <div className="flex w-full max-w-64 flex-col gap-3">
      <Listbox
        multiple
        value={value}
        onValueChange={setValue}
        aria-label="Toppings"
        className="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none"
      >
        {toppings.map((topping) => (
          <ListboxItem
            key={topping.value}
            value={topping.value}
            className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
          >
            <ListboxItemIndicator
              keepMounted
              className="pointer-events-none flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 text-transparent data-selected:border-primary data-selected:bg-primary data-selected:text-primary-foreground"
            >
              <Check aria-hidden="true" className="pointer-events-none block size-3.5 shrink-0" />
            </ListboxItemIndicator>
            {topping.label}
          </ListboxItem>
        ))}
      </Listbox>
      <output className="m-0 block min-h-10 text-sm leading-5 break-words text-muted-foreground">
        Value: {JSON.stringify(value)}
      </output>
    </div>
  )
}

export { Example }

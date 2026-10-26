"use client"

import {
  Listbox,
  ListboxGroup,
  ListboxGroupLabel,
  ListboxItem,
  ListboxItemIndicator,
  ListboxSeparator,
} from "@ui-sdk/react/listbox"
import { Check } from "lucide-react"
import * as React from "react"

const produce = [
  {
    label: "Fruits",
    items: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "orange", label: "Orange" },
    ],
  },
  {
    label: "Vegetables",
    items: [
      { value: "carrot", label: "Carrot" },
      { value: "broccoli", label: "Broccoli" },
      { value: "spinach", label: "Spinach" },
    ],
  },
]

function Example() {
  return (
    <Listbox
      multiple
      defaultValue={["banana"]}
      aria-label="Produce"
      className="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none"
    >
      {produce.map((group, index) => (
        <React.Fragment key={group.label}>
          {index > 0 && <ListboxSeparator className="-mx-1 my-1 h-px bg-border/50" />}
          <ListboxGroup className="flex flex-col gap-0.5">
            <ListboxGroupLabel className="px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground">
              {group.label}
            </ListboxGroupLabel>
            {group.items.map((item) => (
              <ListboxItem
                key={item.value}
                value={item.value}
                className="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
              >
                {item.label}
                <ListboxItemIndicator className="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
                  <Check aria-hidden="true" className="pointer-events-none block size-4 shrink-0" />
                </ListboxItemIndicator>
              </ListboxItem>
            ))}
          </ListboxGroup>
        </React.Fragment>
      ))}
    </Listbox>
  )
}

export { Example }

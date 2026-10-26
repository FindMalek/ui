"use client"

import { Listbox, ListboxItem } from "@ui-sdk/react/listbox"

const sizes = [
  { value: "xs", label: "XS" },
  { value: "s", label: "S" },
  { value: "m", label: "M" },
  { value: "l", label: "L" },
  { value: "xl", label: "XL", disabled: true },
]

function Example() {
  return (
    <Listbox
      orientation="horizontal"
      loop={false}
      defaultValue="m"
      aria-label="Size"
      className="relative inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground outline-none"
    >
      {sizes.map((size) => (
        <ListboxItem
          key={size.value}
          value={size.value}
          disabled={size.disabled}
          className="relative inline-flex h-full min-w-10 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-2 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 select-none"
        >
          {size.label}
        </ListboxItem>
      ))}
    </Listbox>
  )
}

export { Example }

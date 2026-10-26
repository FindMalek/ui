import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@ui-sdk/react/select"
import * as React from "react"
import { Check, ChevronDown } from "lucide-react"

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes" },
  { value: "pineapple", label: "Pineapple" },
]

export function Example() {
  const [status, setStatus] = React.useState("Closed")

  return (
    <Select
      defaultValue="banana"
      onOpenChange={(open) => setStatus(open ? "Opening…" : "Closing…")}
      onOpenChangeComplete={(open) => setStatus(open ? "Open" : "Closed")}
    >
      <div className="flex w-56 flex-col gap-2">
        <SelectLabel className="text-sm leading-none font-medium">Fruit</SelectLabel>
        <SelectTrigger className="group flex h-8 w-full min-w-0 items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm outline-none transition-[color,box-shadow] duration-200 select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:opacity-50">
          <SelectValue className="flex-1 truncate text-start" />
          <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-data-open:rotate-180" />
        </SelectTrigger>
        <output className="text-sm text-muted-foreground">{status}</output>
      </div>
      <SelectContent className="max-h-(--available-height) min-w-(--anchor-width) origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,translate,scale] duration-300 ease-out data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:-translate-y-2 data-starting-style:scale-y-90 data-starting-style:opacity-0 dark:ring-foreground/10">
        {fruits.map((fruit) => (
          <SelectItem
            key={fruit.value}
            value={fruit.value}
            className="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm transition-colors outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            {fruit.label}
            <SelectItemIndicator
              keepMounted
              className="pointer-events-none absolute end-2 flex size-4 scale-50 items-center justify-center opacity-0 transition-[opacity,scale] duration-200 data-selected:scale-100 data-selected:opacity-100"
            >
              <Check className="size-4" />
            </SelectItemIndicator>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

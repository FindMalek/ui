"use client"

import {
  Select,
  SelectClear,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@ui-sdk/react/select"
import * as React from "react"
import { Check, ChevronDown, X } from "lucide-react"

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes" },
  { value: "pineapple", label: "Pineapple" },
]

function Example() {
  const [value, setValue] = React.useState<string | null>("banana")

  return (
    <div className="flex w-56 max-w-full flex-col gap-3">
      <Select value={value} onValueChange={setValue} placeholder="Select a fruit">
        <div className="flex flex-col gap-2">
          <SelectLabel className="text-sm leading-none font-medium">Fruit</SelectLabel>
          <div className="relative">
            <SelectTrigger className="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent">
              <SelectValue className="min-w-0 flex-1 truncate pe-6 text-start" />
              <ChevronDown className="pointer-events-none block size-4 shrink-0 text-muted-foreground" />
            </SelectTrigger>
            <SelectClear
              aria-label="Clear fruit"
              className="absolute end-8 top-1/2 flex size-6 -translate-y-1/2 cursor-default items-center justify-center rounded-xl border border-transparent bg-transparent p-0 text-muted-foreground transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
            >
              <X className="pointer-events-none block size-3.5 shrink-0" />
            </SelectClear>
          </div>
        </div>
        <SelectContent className="max-h-(--available-height) scroll-py-1 overflow-x-hidden overflow-y-auto box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none">
          {fruits.map((fruit) => (
            <SelectItem
              key={fruit.value}
              value={fruit.value}
              className="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              {fruit.label}
              <SelectItemIndicator className="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
                <Check className="pointer-events-none block size-4 shrink-0" />
              </SelectItemIndicator>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <output className="m-0 min-h-5 text-sm leading-5 text-muted-foreground">
        Value: {JSON.stringify(value)}
      </output>
    </div>
  )
}

export { Example }

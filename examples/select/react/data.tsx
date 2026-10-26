"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  type ListData,
} from "@ui-sdk/react/select"
import { Check, ChevronDown } from "lucide-react"

const plans = [
  { value: "free", label: "Free" },
  { value: "pro", label: "Pro" },
  { value: "team", label: "Team" },
]

const sales = [
  { value: "enterprise", label: "Enterprise" },
  { value: "education", label: "Education", disabled: true },
]

const items: ListData = [
  ...plans,
  { type: "separator" },
  { type: "group", label: "Contact sales", items: sales },
]

function Example() {
  return (
    <Select items={items} defaultValue="pro">
      <div className="flex w-56 max-w-full flex-col gap-2">
        <SelectLabel className="text-sm leading-none font-medium">Plan</SelectLabel>
        <SelectTrigger className="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent">
          <SelectValue className="min-w-0 flex-1 truncate text-start" />
          <ChevronDown className="pointer-events-none block size-4 shrink-0 text-muted-foreground" />
        </SelectTrigger>
      </div>
      <SelectContent className="max-h-(--available-height) scroll-py-1 overflow-x-hidden overflow-y-auto box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none">
        {plans.map((plan) => (
          <SelectItem
            key={plan.value}
            value={plan.value}
            className="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            {plan.label}
            <SelectItemIndicator className="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
              <Check className="pointer-events-none block size-4 shrink-0" />
            </SelectItemIndicator>
          </SelectItem>
        ))}
        <SelectSeparator className="pointer-events-none -mx-1 my-1 h-px bg-border" />
        <SelectGroup>
          <SelectGroupLabel className="px-2 py-1 text-xs leading-4 text-muted-foreground">
            Contact sales
          </SelectGroupLabel>
          {sales.map((plan) => (
            <SelectItem
              key={plan.value}
              value={plan.value}
              disabled={plan.disabled}
              className="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              {plan.label}
              <SelectItemIndicator className="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
                <Check className="pointer-events-none block size-4 shrink-0" />
              </SelectItemIndicator>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export { Example }

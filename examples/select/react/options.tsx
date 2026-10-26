import {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  type ListData,
} from "@ui-sdk/react/select"
import { Check, ChevronDown } from "lucide-react"

const sizeGroups = [
  { type: "group", label: "Common", items: ["Small", "Medium", "Large"] },
  { type: "group", label: "Extended", items: ["Extra small", "Extra large"] },
] satisfies ListData

export function Example() {
  return (
    <Select items={sizeGroups} name="size" defaultValue="Medium">
      <div className="flex w-56 flex-col gap-2">
        <SelectLabel className="text-sm leading-none font-medium">Size</SelectLabel>
        <SelectTrigger className="flex h-8 w-full min-w-0 items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm outline-none transition-[color,box-shadow] duration-200 select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:opacity-50">
          <SelectValue className="flex-1 truncate text-start" />
          <ChevronDown className="size-4 shrink-0 text-muted-foreground" />
        </SelectTrigger>
      </div>
      <SelectContent className="max-h-(--available-height) min-w-(--anchor-width) origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
        {sizeGroups.map((group) => (
          <SelectGroup key={group.label}>
            <SelectGroupLabel className="px-2 py-1 text-xs text-muted-foreground">
              {group.label}
            </SelectGroupLabel>
            {group.items.map((size) => (
              <SelectItem
                key={size}
                value={size}
                className="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
              >
                {size}
                <SelectItemIndicator className="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
                  <Check className="size-4" />
                </SelectItemIndicator>
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  )
}

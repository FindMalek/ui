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
  const [value, setValue] = React.useState<string | null>("apple")
  const [open, setOpen] = React.useState(false)
  const [log, setLog] = React.useState("")

  return (
    <div className="flex w-64 flex-col gap-3">
      <Select
        value={value}
        onValueChange={(next, details) => {
          if (next === "pineapple") {
            details.cancel()
            setLog("Pineapple is sold out")
            return
          }
          setValue(next)
          setLog(`value: ${next} (${details.reason})`)
        }}
        open={open}
        onOpenChange={(next, details) => {
          setOpen(next)
          setLog(`open: ${next} (${details.reason})`)
        }}
        debug
      >
        <div className="flex flex-col gap-2">
          <SelectLabel className="text-sm leading-none font-medium">Fruit</SelectLabel>
          <SelectTrigger className="flex h-8 w-full min-w-0 items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm outline-none transition-[color,box-shadow] duration-200 select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:opacity-50">
            <SelectValue className="flex-1 truncate text-start" />
            <ChevronDown className="size-4 shrink-0 text-muted-foreground" />
          </SelectTrigger>
        </div>
        <SelectContent className="max-h-(--available-height) min-w-(--anchor-width) origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
          {fruits.map((fruit) => (
            <SelectItem
              key={fruit.value}
              value={fruit.value}
              className="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              {fruit.label}
              <SelectItemIndicator className="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
                <Check className="size-4" />
              </SelectItemIndicator>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setValue("blueberry")}
          className="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30"
        >
          Blueberry
        </button>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30"
        >
          Open
        </button>
      </div>
      <output className="text-sm text-muted-foreground">{log || "Change something"}</output>
    </div>
  )
}

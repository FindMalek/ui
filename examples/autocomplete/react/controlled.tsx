import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteLabel,
  AutocompleteList,
} from "@ui-sdk/react/autocomplete"
import * as React from "react"

const fruits = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Blackberry",
  "Blueberry",
  "Cherry",
  "Grape",
  "Lemon",
  "Mango",
  "Orange",
  "Peach",
  "Pear",
  "Pineapple",
  "Strawberry",
]

export function Example() {
  const [value, setValue] = React.useState("")
  const [open, setOpen] = React.useState(false)
  const [log, setLog] = React.useState("")
  return (
    <div className="flex w-64 flex-col gap-2">
      <Autocomplete
        value={value}
        onValueChange={(next, details) => {
          if (next.length > 12) return details.cancel()
          setValue(next)
          setLog(`text: ${details.reason}`)
        }}
        open={open}
        onOpenChange={(next, details) => {
          setOpen(next)
          setLog(`${next ? "opened" : "closed"}: ${details.reason}`)
        }}
        onOpenChangeComplete={(next) => setLog(`${next ? "opened" : "closed"} and settled`)}
        onHighlight={(highlighted) => highlighted && setLog(`highlighted ${highlighted}`)}
        debug
      >
        <AutocompleteLabel className="text-sm leading-none font-medium">
          Fruit (12 characters at most)
        </AutocompleteLabel>
        <AutocompleteInput className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm" />
        <AutocompleteContent className="max-h-[min(18rem,var(--available-height))] w-(--anchor-width) min-w-36 origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
          <AutocompleteList>
            {fruits.map((fruit) => (
              <AutocompleteItem
                key={fruit}
                value={fruit}
                className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
              >
                {fruit}
              </AutocompleteItem>
            ))}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
      <output className="text-sm text-muted-foreground">{log || "Type something"}</output>
    </div>
  )
}

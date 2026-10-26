"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxList,
} from "@ui-sdk/react/combobox"
import { Check } from "lucide-react"
import * as React from "react"

const titles = ["Designer", "Engineer", "Engineering manager", "Product manager", "Researcher"]

function Example() {
  const [value, setValue] = React.useState<string | null>(null)

  return (
    <div className="flex w-64 max-w-full flex-col gap-3">
      <Combobox allowCustomValue value={value} onValueChange={setValue}>
        <div className="flex flex-col gap-2">
          <ComboboxLabel className="text-sm leading-none font-medium">Job title</ComboboxLabel>
          <ComboboxInput
            placeholder="Type any title"
            className="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
          />
        </div>
        <ComboboxContent className="max-h-[min(18rem,var(--available-height))] scroll-py-1 overflow-x-hidden overflow-y-auto box-border w-(--anchor-width) min-w-36 rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
          <ComboboxEmpty className="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden">
            {(state) => (state.empty ? `Press Enter to use “${state.query}”.` : null)}
          </ComboboxEmpty>
          <ComboboxList>
            {titles.map((title) => (
              <ComboboxItem
                key={title}
                value={title}
                className="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2"
              >
                {title}
                <ComboboxItemIndicator className="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
                  <Check aria-hidden="true" className="pointer-events-none block size-4 shrink-0" />
                </ComboboxItemIndicator>
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <output className="m-0 min-h-5 text-sm leading-5 text-muted-foreground">
        Value: {JSON.stringify(value)}
      </output>
    </div>
  )
}

export { Example }

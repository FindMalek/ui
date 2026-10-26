"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxTrigger,
} from "@ui-sdk/react/combobox"
import { ChevronDown } from "lucide-react"
import * as React from "react"

const manyItems = Array.from({ length: 10_000 }, (_, index) => ({
  value: `item-${index + 1}`,
  label: `Item ${index + 1}`,
}))

function visibleRows(scrollTop: number, height: number, count: number, row: number) {
  const start = Math.max(0, Math.floor(scrollTop / row) - 4)
  const end = Math.min(count, Math.ceil((scrollTop + height) / row) + 4)
  return { start, end }
}

function scrollForRow(index: number, scrollTop: number, height: number, row: number) {
  const top = index * row
  if (top < scrollTop) return top
  if (top + row > scrollTop + height) return top + row - height
  return scrollTop
}

const row = 32
const height = 288

function Example() {
  const scroller = React.useRef<HTMLDivElement>(null)
  const [scrollTop, setScrollTop] = React.useState(0)

  return (
    <Combobox
      items={manyItems}
      onHighlight={(value, { index }) => {
        const el = scroller.current
        if (el && index >= 0) el.scrollTop = scrollForRow(index, el.scrollTop, el.clientHeight, row)
      }}
    >
      <div className="flex w-64 max-w-full flex-col gap-2">
        <ComboboxLabel className="text-sm leading-none font-medium">Item</ComboboxLabel>
        <div className="relative">
          <ComboboxInput
            placeholder="Search 10,000 items"
            className="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-8 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
          />
          <ComboboxTrigger
            aria-label="Show items"
            className="group inline-flex size-6 cursor-default items-center justify-center rounded-xl border border-transparent bg-transparent p-0 text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50 absolute end-1 top-1/2 -translate-y-1/2"
          >
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none block size-4 shrink-0 transition-transform group-data-open:rotate-180"
            />
          </ComboboxTrigger>
        </div>
      </div>
      <ComboboxContent className="box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none [--list-height:var(--available-height)] w-(--anchor-width) origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
        <ComboboxEmpty className="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden">
          No items found.
        </ComboboxEmpty>
        <div
          ref={scroller}
          className="max-h-[min(18rem,max(0px,calc(var(--list-height)_-_0.5rem)))] overflow-y-auto overscroll-contain"
          onScroll={(event) => setScrollTop(event.currentTarget.scrollTop)}
        >
          <ComboboxList className="relative">
            {(state) => {
              const items = state.items as { value: string; label: string }[]
              const { start, end } = visibleRows(scrollTop, height, items.length, row)
              return (
                <div style={{ height: items.length * row }}>
                  {items.slice(start, end).map((item, offset) => (
                    <ComboboxItem
                      key={item.value}
                      value={item.value}
                      label={item.label}
                      index={start + offset}
                      style={{ top: (start + offset) * row, height: row }}
                      className="absolute inset-x-0 flex cursor-default items-center rounded-xl px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-selected:font-medium ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2"
                    >
                      {item.label}
                    </ComboboxItem>
                  ))}
                </div>
              )
            }}
          </ComboboxList>
        </div>
      </ComboboxContent>
    </Combobox>
  )
}

export { Example }

"use client"

import { Command, CommandInput, CommandItem, CommandList } from "@ui-sdk/react/command"
import * as React from "react"

const commands = Array.from({ length: 10_000 }, (_, index) => ({
  value: `command-${index + 1}`,
  label: `Command ${index + 1}`,
}))

const row = 32
const height = 256

function Example() {
  const scroller = React.useRef<HTMLDivElement>(null)
  const [scrollTop, setScrollTop] = React.useState(0)
  return (
    <Command
      items={commands}
      onValueChange={(value, { index }) => {
        const el = scroller.current
        if (!el || index < 0) return
        const top = index * row
        if (top < el.scrollTop) el.scrollTop = top
        else if (top + row > el.scrollTop + el.clientHeight) el.scrollTop = top + row - el.clientHeight
      }}
      className="flex h-80 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5"
    >
      <div className="shrink-0 p-1 pb-0">
        <CommandInput
          aria-label="Search 10,000 commands"
          placeholder="Search 10,000 commands..."
          className="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
        />
      </div>
      <div
        ref={scroller}
        style={{ height }}
        className="mt-1 min-h-0 max-h-[min(16rem,50dvh)] overflow-y-auto overscroll-contain"
        onScroll={(event) => setScrollTop(event.currentTarget.scrollTop)}
      >
        <CommandList className="relative outline-none">
          {(state) => {
            const start = Math.max(0, Math.floor(scrollTop / row) - 4)
            const end = Math.min(state.items.length, Math.ceil((scrollTop + height) / row) + 4)
            return (
              <div style={{ height: state.items.length * row }}>
                {(state.items as typeof commands).slice(start, end).map((item, offset) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    label={item.label}
                    index={start + offset}
                    style={{ top: (start + offset) * row, height: row }}
                    className="absolute inset-x-1 flex cursor-default items-center rounded-xl px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground"
                  >
                    {item.label}
                  </CommandItem>
                ))}
              </div>
            )
          }}
        </CommandList>
      </div>
    </Command>
  )
}

export { Example }

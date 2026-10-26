import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectList,
  SelectTrigger,
  SelectValue,
} from "@ui-sdk/solid/select"
import { createSignal, For } from "solid-js"

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
  let scroller: HTMLDivElement | undefined
  const [scrollTop, setScrollTop] = createSignal(0)

  return (
    <Select
      items={manyItems}
      placeholder="Select an item"
      onHighlight={(value, { index }) => {
        const el = scroller
        if (el && index >= 0) el.scrollTop = scrollForRow(index, el.scrollTop, el.clientHeight, row)
      }}
    >
      <div class="flex w-56 max-w-full flex-col gap-2">
        <SelectLabel class="text-sm leading-none font-medium">Item</SelectLabel>
        <SelectTrigger class="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent">
          <SelectValue class="min-w-0 flex-1 truncate text-start" />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            class="pointer-events-none block size-4 shrink-0 text-muted-foreground"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </SelectTrigger>
      </div>
      <SelectContent class="box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none [--list-height:var(--available-height)]">
        <div
          ref={scroller}
          style={{ height: `${height}px` }}
          class="max-h-[max(0px,calc(var(--list-height)_-_0.5rem))] overflow-y-auto overscroll-contain"
          onScroll={(event) => setScrollTop(event.currentTarget.scrollTop)}
        >
          <SelectList class="relative outline-none">
            {(state) => {
              const items = () => state.items as { value: string; label: string }[]
              const rows = () => visibleRows(scrollTop(), height, items().length, row)
              return (
                <div style={{ height: `${items().length * row}px` }}>
                  <For each={items().slice(rows().start, rows().end)}>
                    {(item, offset) => (
                      <SelectItem
                        value={item.value}
                        label={item.label}
                        index={rows().start + offset()}
                        style={{ top: `${(rows().start + offset()) * row}px`, height: `${row}px` }}
                        class="absolute inset-x-0 flex cursor-default items-center rounded-xl px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-selected:font-medium"
                      >
                        {item.label}
                      </SelectItem>
                    )}
                  </For>
                </div>
              )
            }}
          </SelectList>
        </div>
      </SelectContent>
    </Select>
  )
}

export { Example }

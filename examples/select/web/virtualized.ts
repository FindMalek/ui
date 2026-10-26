import "@ui-sdk/web/select"
import { ChevronDown, createElement } from "lucide"

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

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-select placeholder="Select an item">
      <div class="flex w-56 max-w-full flex-col gap-2">
        <ui-select-label class="text-sm leading-none font-medium">Item</ui-select-label>
        <ui-select-trigger>
          <button class="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent">
            <ui-select-value class="min-w-0 flex-1 truncate text-start"></ui-select-value>
            ${createElement(ChevronDown, { class: "pointer-events-none block size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-select-trigger>
      </div>
      <ui-select-content class="box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none [--list-height:var(--available-height)]">
        <div style="height: ${height}px" class="max-h-[max(0px,calc(var(--list-height)_-_0.5rem))] overflow-y-auto overscroll-contain">
          <ui-select-list class="relative outline-none">
            <div style="height: ${manyItems.length * row}px"></div>
          </ui-select-list>
        </div>
      </ui-select-content>
    </ui-select>
  `
  const select = root.querySelector("ui-select") as HTMLElement & { items: typeof manyItems }
  const scroller = root.querySelector<HTMLElement>("ui-select-content > div")!
  const rows = root.querySelector<HTMLElement>("ui-select-list > div")!
  select.items = manyItems

  const rendered = new Map<number, Element>()
  const render = () => {
    const { start, end } = visibleRows(scroller.scrollTop, height, manyItems.length, row)
    for (const [index, el] of rendered) {
      if (index >= start && index < end) continue
      el.remove()
      rendered.delete(index)
    }
    for (let index = start; index < end; index++) {
      if (rendered.has(index)) continue
      const item = manyItems[index]
      rows.insertAdjacentHTML(
        "beforeend",
        `<ui-select-item value="${item.value}" label="${item.label}" index="${index}" style="top: ${index * row}px; height: ${row}px" class="absolute inset-x-0 flex cursor-default items-center rounded-xl px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-selected:font-medium">${item.label}</ui-select-item>`,
      )
      rendered.set(index, rows.lastElementChild!)
    }
  }
  render()
  scroller.addEventListener("scroll", render)
  select.addEventListener("highlight", (event) => {
    const { index } = (event as CustomEvent<{ value: string | null; index: number }>).detail
    if (index < 0) return
    scroller.scrollTop = scrollForRow(index, scroller.scrollTop, scroller.clientHeight, row)
    render()
  })
}

export { mount }

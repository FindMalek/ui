import "@ui-sdk/web/combobox"
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
    <ui-combobox>
      <div class="flex w-64 max-w-full flex-col gap-2">
        <ui-combobox-label class="text-sm leading-none font-medium">Item</ui-combobox-label>
        <div class="relative">
          <ui-combobox-input>
            <input placeholder="Search 10,000 items" class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-8 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5" />
          </ui-combobox-input>
          <ui-combobox-trigger>
            <button aria-label="Show items" class="group inline-flex size-6 cursor-default items-center justify-center rounded-xl border border-transparent bg-transparent p-0 text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50 absolute end-1 top-1/2 -translate-y-1/2">${createElement(ChevronDown, { class: "pointer-events-none block size-4 shrink-0 transition-transform group-data-open:rotate-180", "aria-hidden": "true" }).outerHTML}</button>
          </ui-combobox-trigger>
        </div>
      </div>
      <ui-combobox-content class="box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none [--list-height:var(--available-height)] w-(--anchor-width) origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
        <ui-combobox-empty class="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden">No items found.</ui-combobox-empty>
        <div class="max-h-[min(18rem,max(0px,calc(var(--list-height)_-_0.5rem)))] overflow-y-auto overscroll-contain">
          <ui-combobox-list class="relative"></ui-combobox-list>
        </div>
      </ui-combobox-content>
    </ui-combobox>
  `
  const combobox = root.querySelector("ui-combobox") as HTMLElement & { items: typeof manyItems }
  const scroller = root.querySelector<HTMLElement>("ui-combobox-content > div")!
  const list = root.querySelector<HTMLElement>("ui-combobox-list")!

  let matches = manyItems
  const filter = (text: string) => {
    const needle = text.trim().toLowerCase()
    matches = needle ? manyItems.filter((item) => item.label.toLowerCase().includes(needle)) : manyItems
  }

  const rendered = new Map<string, HTMLElement>()
  const render = () => {
    list.style.height = `${matches.length * row}px`
    const { start, end } = visibleRows(scroller.scrollTop, height, matches.length, row)
    const visible = new Map(matches.slice(start, end).map((item, offset) => [item.value, start + offset]))
    for (const [value, el] of rendered) {
      if (visible.has(value)) continue
      el.remove()
      rendered.delete(value)
    }
    for (const [value, index] of visible) {
      const existing = rendered.get(value)
      if (existing) {
        existing.setAttribute("index", String(index))
        existing.style.top = `${index * row}px`
        continue
      }
      const item = matches[index]
      list.insertAdjacentHTML(
        "beforeend",
        `<ui-combobox-item value="${item.value}" label="${item.label}" index="${index}" style="top: ${index * row}px; height: ${row}px" class="absolute inset-x-0 flex cursor-default items-center rounded-xl px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-selected:font-medium ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2">${item.label}</ui-combobox-item>`,
      )
      rendered.set(value, list.lastElementChild as HTMLElement)
    }
  }
  render()
  combobox.items = manyItems
  scroller.addEventListener("scroll", render)
  combobox.addEventListener("querychange", (event) => {
    const { value, reason } = (event as CustomEvent<{ value: string; reason: string }>).detail
    filter(reason === "input-change" ? value : "")
    render()
  })
  combobox.addEventListener("highlight", (event) => {
    const { index } = (event as CustomEvent<{ value: string | null; index: number }>).detail
    if (index < 0) return
    scroller.scrollTop = scrollForRow(index, scroller.scrollTop, scroller.clientHeight, row)
    render()
  })
}

export { mount }

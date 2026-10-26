import { fuzzyScore } from "@ui-sdk/core/text-match"
import "@ui-sdk/web/command"

const commands = Array.from({ length: 10_000 }, (_, index) => ({
  value: `command-${index + 1}`,
  label: `Command ${index + 1}`,
}))

const row = 32
const height = 256

function rank(query: string) {
  if (!query.trim()) return commands
  return commands
    .map((item) => ({ item, score: fuzzyScore(item.label, query) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.item)
}

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-command class="flex h-80 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5">
      <div class="shrink-0 p-1 pb-0">
        <ui-command-input>
          <input aria-label="Search 10,000 commands" placeholder="Search 10,000 commands..." class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5" />
        </ui-command-input>
      </div>
      <ui-command-list style="height: ${height}px" class="relative mt-1 min-h-0 max-h-[min(16rem,50dvh)] overflow-y-auto overscroll-contain outline-none">
        <div aria-hidden="true"></div>
      </ui-command-list>
    </ui-command>
  `
  const command = root.querySelector("ui-command") as HTMLElement & { items: typeof commands }
  const list = root.querySelector<HTMLElement>("ui-command-list")!
  const spacer = list.querySelector<HTMLElement>("div")!

  let matches = commands

  const rendered = new Map<string, HTMLElement>()
  const render = () => {
    spacer.style.height = `${matches.length * row}px`
    const start = Math.max(0, Math.floor(list.scrollTop / row) - 4)
    const end = Math.min(matches.length, Math.ceil((list.scrollTop + list.clientHeight) / row) + 4)
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
        `<ui-command-item value="${item.value}" label="${item.label}" index="${index}" style="top: ${index * row}px; height: ${row}px" class="absolute inset-x-1 flex cursor-default items-center rounded-xl px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground">${item.label}</ui-command-item>`,
      )
      rendered.set(value, list.lastElementChild as HTMLElement)
    }
  }
  render()
  command.items = commands
  list.addEventListener("scroll", render)
  command.addEventListener("querychange", (event) => {
    matches = rank((event as CustomEvent<{ value: string }>).detail.value)
    render()
  })
  command.addEventListener("valuechange", (event) => {
    const { index } = (event as CustomEvent<{ value: string | null; index: number }>).detail
    if (index < 0) return
    const top = index * row
    if (top < list.scrollTop) list.scrollTop = top
    else if (top + row > list.scrollTop + list.clientHeight) list.scrollTop = top + row - list.clientHeight
    render()
  })
}

export { mount }

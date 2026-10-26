import "@ui-sdk/web/select"
import { Check, createElement } from "lucide"

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes" },
  { value: "pineapple", label: "Pineapple" },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-72 flex-col gap-3">
      <div class="flex items-center gap-2 rounded-3xl border border-border p-2">
        <span class="ps-1 text-sm text-muted-foreground">Toolbar</span>
        <ui-select-trigger for="select-controller">
          <button aria-label="Fruit" class="ms-auto flex h-8 w-36 min-w-0 items-center rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm outline-none transition-[color,box-shadow] duration-200 select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:opacity-50">
            <ui-select-value for="select-controller"></ui-select-value>
          </button>
        </ui-select-trigger>
      </div>
      <ui-select id="select-controller" placeholder="Fruit">
        <template>
          <ui-select-content class="max-h-(--available-height) min-w-(--anchor-width) origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
            <ui-select-item class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
              <ui-select-item-indicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">${createElement(Check, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-select-item-indicator>
            </ui-select-item>
          </ui-select-content>
        </template>
      </ui-select>
      <div class="flex flex-wrap gap-2">
        <button type="button" data-action="open" class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">
          Open
        </button>
        <button type="button" data-action="banana" class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">
          Banana
        </button>
        <button type="button" data-action="clear" class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">
          Clear
        </button>
        <button type="button" data-action="focus" class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">
          Focus
        </button>
      </div>
      <output class="text-sm text-muted-foreground">Use the buttons</output>
    </div>
  `
  const select = root.querySelector("ui-select") as HTMLElement & {
    items: typeof fruits
    api: {
      open: () => Promise<{ reason: string }>
      getValue: () => string | null
      setValue: (value: string | null) => void
      clear: () => void
      focus: () => void
    }
  }
  select.items = fruits
  const fruit = select.api
  const log = root.querySelector("output")!
  const actions: Record<string, () => void> = {
    open: async () => {
      const { reason } = await fruit.open()
      log.textContent = `Closed by ${reason}, with ${fruit.getValue() ?? "nothing"}`
    },
    banana: () => fruit.setValue("banana"),
    clear: () => fruit.clear(),
    focus: () => fruit.focus(),
  }
  for (const button of root.querySelectorAll<HTMLElement>("[data-action]"))
    button.addEventListener("click", () => actions[button.dataset.action!]())
}

import "@ui-sdk/web/select"
import { Check, ChevronDown, createElement } from "lucide"

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes" },
  { value: "pineapple", label: "Pineapple" },
]

const sides = ["top", "right", "bottom", "left"]
const aligns = ["start", "center", "end"]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-center gap-4">
      <div class="flex flex-col items-center gap-2">
        <div role="group" aria-label="Side" class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground">
          ${sides
            .map(
              (value) => `
                <button type="button" data-side="${value}" aria-pressed="${value === "bottom"}" class="inline-flex h-full flex-1 items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground aria-pressed:shadow-sm dark:text-muted-foreground dark:aria-pressed:border-input dark:aria-pressed:bg-input/30 dark:aria-pressed:text-foreground">
                  ${value}
                </button>
              `,
            )
            .join("")}
        </div>
        <div role="group" aria-label="Align" class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground">
          ${aligns
            .map(
              (value) => `
                <button type="button" data-align="${value}" aria-pressed="${value === "start"}" class="inline-flex h-full flex-1 items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground aria-pressed:shadow-sm dark:text-muted-foreground dark:aria-pressed:border-input dark:aria-pressed:bg-input/30 dark:aria-pressed:text-foreground">
                  ${value}
                </button>
              `,
            )
            .join("")}
        </div>
        <label class="flex items-center gap-2 text-xs text-muted-foreground">
          <input type="checkbox" class="size-4 accent-primary" />
          Anchor to the box
        </label>
      </div>
      <div id="select-positioning-box" class="flex items-center justify-center rounded-3xl border border-dashed border-border p-6">
        <ui-select default-value="apple">
          <ui-select-trigger>
            <button aria-label="Fruit" class="flex h-8 w-40 min-w-0 items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm outline-none transition-[color,box-shadow] duration-200 select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:opacity-50">
              <ui-select-value class="flex-1 truncate text-start"></ui-select-value>
              ${createElement(ChevronDown, { class: "size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
            </button>
          </ui-select-trigger>
          <ui-select-content side="bottom" align="start" side-offset="10" align-offset="0" collision-padding="16" class="w-44 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
            <ui-select-arrow class="size-2.5 rotate-45 border-foreground/5 bg-popover data-[side=bottom]:-top-[5px] data-[side=bottom]:border-t data-[side=bottom]:border-l data-[side=left]:-right-[5px] data-[side=left]:border-t data-[side=left]:border-r data-[side=right]:-left-[5px] data-[side=right]:border-b data-[side=right]:border-l data-[side=top]:-bottom-[5px] data-[side=top]:border-r data-[side=top]:border-b dark:border-foreground/10"></ui-select-arrow>
            ${fruits
              .map(
                (fruit) => `
                  <ui-select-item value="${fruit.value}" class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
                    ${fruit.label}
                    <ui-select-item-indicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">${createElement(Check, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-select-item-indicator>
                  </ui-select-item>
                `,
              )
              .join("")}
          </ui-select-content>
        </ui-select>
      </div>
    </div>
  `
  const content = root.querySelector("ui-select-content")!
  for (const name of ["side", "align"]) {
    const buttons = root.querySelectorAll<HTMLButtonElement>(`[data-${name}]`)
    for (const button of buttons)
      button.addEventListener("click", () => {
        content.setAttribute(name, button.getAttribute(`data-${name}`)!)
        for (const other of buttons) other.setAttribute("aria-pressed", String(other === button))
      })
  }
  const anchored = root.querySelector<HTMLInputElement>('input[type="checkbox"]')!
  anchored.addEventListener("change", () => {
    if (anchored.checked) content.setAttribute("anchor", "#select-positioning-box")
    else content.removeAttribute("anchor")
  })
}

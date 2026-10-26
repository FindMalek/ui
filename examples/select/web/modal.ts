import "@ui-sdk/web/select"
import { Check, ChevronDown, createElement } from "lucide"

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes" },
  { value: "pineapple", label: "Pineapple" },
]

const modes = [
  { value: "pointer", label: "Pointer" },
  { value: "true", label: "Modal" },
  { value: "false", label: "Non-modal" },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-56 flex-col gap-4">
      <div role="group" aria-label="Modal" class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground">
        ${modes
          .map(
            (mode) => `
              <button type="button" data-mode="${mode.value}" aria-pressed="${mode.value === "pointer"}" class="inline-flex h-full flex-1 items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground aria-pressed:shadow-sm dark:text-muted-foreground dark:aria-pressed:border-input dark:aria-pressed:bg-input/30 dark:aria-pressed:text-foreground">
                ${mode.label}
              </button>
            `,
          )
          .join("")}
      </div>
      <ui-select modal="pointer" default-value="apple">
        <div class="flex flex-col gap-2">
          <ui-select-label class="text-sm leading-none font-medium">Fruit</ui-select-label>
          <ui-select-trigger>
            <button class="flex h-8 w-full min-w-0 items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm outline-none transition-[color,box-shadow] duration-200 select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:opacity-50">
              <ui-select-value class="flex-1 truncate text-start"></ui-select-value>
              ${createElement(ChevronDown, { class: "size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
            </button>
          </ui-select-trigger>
        </div>
        <ui-select-content class="max-h-(--available-height) min-w-(--anchor-width) origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
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
      <button type="button" data-press class="inline-flex h-8 w-fit shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">
        Pressed 0 times
      </button>
    </div>
  `
  const select = root.querySelector("ui-select")!
  const buttons = root.querySelectorAll<HTMLButtonElement>("[data-mode]")
  for (const button of buttons)
    button.addEventListener("click", () => {
      select.setAttribute("modal", button.dataset.mode!)
      for (const other of buttons) other.setAttribute("aria-pressed", String(other === button))
    })
  let presses = 0
  const press = root.querySelector<HTMLButtonElement>("[data-press]")!
  press.addEventListener("click", () => (press.textContent = `Pressed ${++presses} times`))
}

import "@ui-sdk/web/drawer"
import { createElement, Minus, Plus } from "lucide"
const goal = { initial: 350, min: 200, max: 400, step: 10 }

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-drawer>
      <ui-drawer-trigger><button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Open Drawer</button></ui-drawer-trigger>
      <ui-drawer-backdrop class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm"></ui-drawer-backdrop>
      <ui-drawer-content class="relative mx-auto flex max-h-[85dvh] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit">
        <div aria-hidden="true" class="mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted"></div>
        <div class="mx-auto w-full max-w-sm">
          <div class="flex flex-col gap-0.5 p-4 text-center md:gap-1.5">
            <ui-drawer-title class="text-base font-medium text-foreground">Move Goal</ui-drawer-title>
            <ui-drawer-description class="text-sm text-muted-foreground">Set your daily activity goal.</ui-drawer-description>
          </div>
          <div class="p-4 pb-0">
            <div class="flex items-center justify-center gap-2">
              <button type="button" aria-label="Decrease" data-step="-1" class="inline-flex cursor-default size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background bg-clip-padding outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none">${createElement(Minus, { class: "size-4", "aria-hidden": "true" }).outerHTML}</button>
              <div class="flex-1 text-center">
                <div aria-live="polite" class="text-4xl font-medium tabular-nums"></div>
                <div class="text-xs text-muted-foreground uppercase">Calories/day</div>
              </div>
              <button type="button" aria-label="Increase" data-step="1" class="inline-flex cursor-default size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background bg-clip-padding outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none">${createElement(Plus, { class: "size-4", "aria-hidden": "true" }).outerHTML}</button>
            </div>
          </div>
          <div class="flex flex-col gap-2 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <ui-drawer-close value="submit"><button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Submit</button></ui-drawer-close>
            <ui-drawer-close><button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Cancel</button></ui-drawer-close>
          </div>
        </div>
      </ui-drawer-content>
    </ui-drawer>
  `
  const value = root.querySelector("[aria-live]")!
  const decrease = root.querySelector<HTMLButtonElement>('[data-step="-1"]')!
  const increase = root.querySelector<HTMLButtonElement>('[data-step="1"]')!
  let calories = goal.initial
  const show = () => {
    value.textContent = String(calories)
    decrease.disabled = calories <= goal.min
    increase.disabled = calories >= goal.max
  }
  decrease.addEventListener("click", () => {
    calories -= goal.step
    show()
  })
  increase.addEventListener("click", () => {
    calories += goal.step
    show()
  })
  show()
}

export { mount }

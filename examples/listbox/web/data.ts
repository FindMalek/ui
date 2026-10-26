import type { ListData } from "@ui-sdk/core/listbox"
import "@ui-sdk/web/listbox"
import { Check, createElement } from "lucide"
import type { UiListboxElement } from "@ui-sdk/web"

const plans: ListData<{ id: string; price: number }> = [
  { value: { id: "hobby", price: 0 }, label: "Hobby" },
  { value: { id: "pro", price: 20 }, label: "Pro" },
  { value: { id: "team", price: 50 }, label: "Team" },
  { value: { id: "enterprise", price: 200 }, label: "Enterprise", disabled: true },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-64 flex-col gap-3">
      <ui-listbox aria-label="Plan" class="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none">
        <template>
          <ui-listbox-group class="flex flex-col gap-0.5">
            <ui-listbox-group-label class="px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground"></ui-listbox-group-label>
            <ui-listbox-item class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50">
              <ui-listbox-item-indicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">${createElement(Check, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-listbox-item-indicator>
            </ui-listbox-item>
          </ui-listbox-group>
          <ui-listbox-separator class="-mx-1 my-1 h-px bg-border/50"></ui-listbox-separator>
        </template>
      </ui-listbox>
      <output class="m-0 block min-h-10 text-sm leading-5 break-words text-muted-foreground">pro, $20 a month</output>
    </div>
  `
  const listbox = root.querySelector<UiListboxElement>("ui-listbox")!
  const output = root.querySelector("output")!
  listbox.itemToValue = (plan) => (plan as { id: string }).id
  listbox.isItemEqualToValue = (plan, selected) =>
    (plan as { id: string }).id === (selected as { id: string }).id
  listbox.items = plans
  listbox.value = { id: "pro", price: 20 }
  listbox.addEventListener("valuechange", (event) => {
    const plan = event.detail.value as { id: string; price: number } | null
    output.textContent = plan ? `${plan.id}, $${plan.price} a month` : "No plan"
  })
}

export { mount }

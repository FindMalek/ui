import { Listbox, ListboxItem, ListboxItemIndicator, type ListData } from "@ui-sdk/solid/listbox"
import { createSignal, For } from "solid-js"

const plans = [
  { value: { id: "hobby", price: 0 }, label: "Hobby" },
  { value: { id: "pro", price: 20 }, label: "Pro" },
  { value: { id: "team", price: 50 }, label: "Team" },
  { value: { id: "enterprise", price: 200 }, label: "Enterprise", disabled: true },
] satisfies ListData<{ id: string; price: number }>

function Example() {
  const [value, setValue] = createSignal<{ id: string; price: number } | null>({ id: "pro", price: 20 })

  return (
    <div class="flex w-full max-w-64 flex-col gap-3">
      <Listbox
        items={plans}
        value={value()}
        onValueChange={setValue}
        itemToValue={(plan) => plan.id}
        isItemEqualToValue={(plan, selected) => plan.id === selected.id}
        aria-label="Plan"
        class="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none"
      >
        <For each={plans}>
          {(plan) => (
            <ListboxItem
              value={plan.value}
              disabled={plan.disabled}
              class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
            >
              {plan.label}
              <ListboxItemIndicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  class="pointer-events-none block size-4 shrink-0"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </ListboxItemIndicator>
            </ListboxItem>
          )}
        </For>
      </Listbox>
      <output class="m-0 block min-h-10 text-sm leading-5 break-words text-muted-foreground">
        {value() ? `${value()!.id}, $${value()!.price} a month` : "No plan"}
      </output>
    </div>
  )
}

export { Example }

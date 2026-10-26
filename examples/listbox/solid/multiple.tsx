import { Listbox, ListboxItem, ListboxItemIndicator } from "@ui-sdk/solid/listbox"
import { createSignal, For } from "solid-js"

const toppings = [
  { value: "basil", label: "Basil" },
  { value: "cheese", label: "Extra cheese" },
  { value: "mushroom", label: "Mushroom" },
  { value: "olive", label: "Olive" },
  { value: "onion", label: "Onion" },
  { value: "pepper", label: "Pepper" },
]

function Example() {
  const [value, setValue] = createSignal<string[]>(["cheese", "onion"])

  return (
    <div class="flex w-full max-w-64 flex-col gap-3">
      <Listbox
        multiple
        value={value()}
        onValueChange={setValue}
        aria-label="Toppings"
        class="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none"
      >
        <For each={toppings}>
          {(topping) => (
            <ListboxItem
              value={topping.value}
              class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
            >
              <ListboxItemIndicator
                keepMounted
                class="pointer-events-none flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 text-transparent data-selected:border-primary data-selected:bg-primary data-selected:text-primary-foreground"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  class="pointer-events-none block size-3.5 shrink-0"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </ListboxItemIndicator>
              {topping.label}
            </ListboxItem>
          )}
        </For>
      </Listbox>
      <output class="m-0 block min-h-10 text-sm leading-5 break-words text-muted-foreground">
        Value: {JSON.stringify(value())}
      </output>
    </div>
  )
}

export { Example }

import {
  Listbox,
  ListboxGroup,
  ListboxGroupLabel,
  ListboxItem,
  ListboxItemIndicator,
  ListboxSeparator,
} from "@ui-sdk/solid/listbox"
import { For, Show } from "solid-js"

const produce = [
  {
    label: "Fruits",
    items: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "orange", label: "Orange" },
    ],
  },
  {
    label: "Vegetables",
    items: [
      { value: "carrot", label: "Carrot" },
      { value: "broccoli", label: "Broccoli" },
      { value: "spinach", label: "Spinach" },
    ],
  },
]

function Example() {
  return (
    <Listbox
      multiple
      defaultValue={["banana"]}
      aria-label="Produce"
      class="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none"
    >
      <For each={produce}>
        {(group, index) => (
          <>
            <Show when={index() > 0}>
              <ListboxSeparator class="-mx-1 my-1 h-px bg-border/50" />
            </Show>
            <ListboxGroup class="flex flex-col gap-0.5">
              <ListboxGroupLabel class="px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground">
                {group.label}
              </ListboxGroupLabel>
              <For each={group.items}>
                {(item) => (
                  <ListboxItem
                    value={item.value}
                    class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
                  >
                    {item.label}
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
            </ListboxGroup>
          </>
        )}
      </For>
    </Listbox>
  )
}

export { Example }

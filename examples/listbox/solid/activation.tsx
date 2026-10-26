import { Listbox, ListboxItem, ListboxItemIcon } from "@ui-sdk/solid/listbox"
import { createSignal, For } from "solid-js"

const files = [
  { value: "readme", label: "README.md" },
  { value: "package", label: "package.json" },
  { value: "tsconfig", label: "tsconfig.json" },
  { value: "index", label: "index.ts" },
  { value: "styles", label: "styles.css" },
  { value: "logo", label: "logo.svg" },
]

function Example() {
  const [value, setValue] = createSignal<string[]>(["readme"])

  return (
    <div class="flex w-full max-w-64 flex-col gap-3">
      <Listbox
        multiple
        activation="automatic"
        value={value()}
        onValueChange={setValue}
        aria-label="Files"
        class="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none"
      >
        <For each={files}>
          {(file) => (
            <ListboxItem
              value={file.value}
              class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-selected:bg-accent data-selected:text-accent-foreground data-selected:font-medium"
            >
              <ListboxItemIcon class="flex text-muted-foreground group-data-highlighted:text-accent-foreground group-data-selected:text-accent-foreground">
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
                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                </svg>
              </ListboxItemIcon>
              {file.label}
            </ListboxItem>
          )}
        </For>
      </Listbox>
      <output class="m-0 block min-h-10 text-sm leading-5 break-words text-muted-foreground">
        {value().length} selected
      </output>
    </div>
  )
}

export { Example }

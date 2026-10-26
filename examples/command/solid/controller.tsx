import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPage,
  createCommandController,
} from "@ui-sdk/solid/command"
import { createSignal, For } from "solid-js"

const themes = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
]

const palette = createCommandController()

export function Example() {
  const [ran, setRan] = createSignal("")
  return (
    <div class="flex w-full max-w-sm flex-col gap-3">
      <div class="flex flex-wrap gap-2">
        <button
          type="button"
          class="inline-flex h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px dark:bg-transparent dark:hover:bg-input/30"
          onClick={() => palette.push("theme")}
        >
          Open themes
        </button>
        <button
          type="button"
          class="inline-flex h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px dark:bg-transparent dark:hover:bg-input/30"
          onClick={() => palette.pop()}
        >
          Back
        </button>
        <button
          type="button"
          class="inline-flex h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px dark:bg-transparent dark:hover:bg-input/30"
          onClick={() => palette.setValue("dark")}
        >
          Highlight Dark
        </button>
        <button
          type="button"
          class="inline-flex h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px dark:bg-transparent dark:hover:bg-input/30"
          onClick={() => palette.setQuery("li")}
        >
          Search “li”
        </button>
        <button
          type="button"
          class="inline-flex h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px dark:bg-transparent dark:hover:bg-input/30"
          onClick={() => palette.run()}
        >
          Run highlighted
        </button>
        <button
          type="button"
          class="inline-flex h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px dark:bg-transparent dark:hover:bg-input/30"
          onClick={() => palette.focus()}
        >
          Focus
        </button>
      </div>
      <Command
        controller={palette}
        onAction={(value) => {
          setRan(value)
        }}
        class="flex flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground shadow-sm ring-1 ring-foreground/5 dark:ring-foreground/10"
      >
        <div class="p-1 pb-0">
          <CommandInput
            aria-label="Search commands"
            class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm"
          />
        </div>
        <CommandList class="p-1 outline-none">
          <CommandPage>
            <CommandItem
              value="theme"
              page="theme"
              class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              Change theme…
            </CommandItem>
          </CommandPage>
          <CommandPage value="theme">
            <For each={themes}>
              {(theme) => (
                <CommandItem
                  value={theme.value}
                  class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
                >
                  {theme.label}
                </CommandItem>
              )}
            </For>
          </CommandPage>
        </CommandList>
      </Command>
      <output class="text-sm text-muted-foreground">{ran() ? `Ran ${ran()}` : "Nothing run yet"}</output>
    </div>
  )
}

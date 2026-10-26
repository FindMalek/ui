import { Command, CommandInput, CommandItem, CommandItemText, CommandList } from "@ui-sdk/solid/command"
import { For, Show } from "solid-js"

const pages = ["Anatomy", "Installation", "Styling"]

function Example() {
  return (
    <Command class="flex min-h-40 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5">
      <div class="shrink-0 p-1 pb-0">
        <CommandInput
          aria-label="Search docs"
          placeholder="Search docs..."
          class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
        />
      </div>
      <CommandList class="min-h-0 p-1 outline-none">
        <For each={pages}>
          {(page) => (
            <CommandItem
              value={page}
              render={(props) => <a {...props} href={`#${page.toLowerCase()}`} />}
              class="group relative flex min-h-7 cursor-default items-center justify-between gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 no-underline"
            >
              {(state) => (
                <>
                  <CommandItemText>
                    {(text) => (
                      <For each={text.segments}>
                        {(segment) =>
                          segment.match ? <strong class="font-semibold">{segment.text}</strong> : segment.text
                        }
                      </For>
                    )}
                  </CommandItemText>
                  <Show when={state.highlighted}>
                    <svg
                      class="pointer-events-none block size-4 shrink-0 text-muted-foreground"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 4v7a4 4 0 0 1-4 4H4" />
                      <path d="m9 10-5 5 5 5" />
                    </svg>
                  </Show>
                </>
              )}
            </CommandItem>
          )}
        </For>
      </CommandList>
    </Command>
  )
}

export { Example }

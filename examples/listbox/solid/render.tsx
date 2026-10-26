import { Listbox, ListboxItem } from "@ui-sdk/solid/listbox"
import { For, Show } from "solid-js"

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "nuxt", label: "Nuxt" },
  { value: "sveltekit", label: "SvelteKit" },
]

function Example() {
  return (
    <Listbox
      defaultValue="next"
      activation="manual"
      aria-label="Framework docs"
      class="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none"
    >
      <For each={frameworks}>
        {(framework) => (
          <ListboxItem
            value={framework.value}
            label={framework.label}
            render={(props) => <a {...props} href={`#${framework.value}`} />}
            class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 text-inherit no-underline data-selected:font-medium"
          >
            {(state) => (
              <>
                <span>{framework.label}</span>
                <Show when={state.selected}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                    class="pointer-events-none block size-4 shrink-0 ms-auto text-muted-foreground"
                  >
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </Show>
              </>
            )}
          </ListboxItem>
        )}
      </For>
    </Listbox>
  )
}

export { Example }

import { Menu, MenuContent, MenuItem, MenuTrigger } from "@ui-sdk/solid/menu"
import { For } from "solid-js"

const sections = [
  { href: "#anatomy", label: "Anatomy" },
  { href: "#styling", label: "Styling" },
  { href: "#api-reference", label: "API reference" },
]

function Example() {
  return (
    <Menu>
      <MenuTrigger class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
        Links
      </MenuTrigger>
      <MenuContent class="min-w-44 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
        <For each={sections}>
          {(section) => (
            <MenuItem
              class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
              render={(props, state) => (
                <a {...props} href={section.href}>
                  {props.children}

                  <svg
                    class={
                      state.highlighted
                        ? "ms-auto size-4 text-muted-foreground"
                        : "invisible ms-auto size-4 text-muted-foreground"
                    }
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
                </a>
              )}
            >
              {section.label}
            </MenuItem>
          )}
        </For>
      </MenuContent>
    </Menu>
  )
}

export { Example }

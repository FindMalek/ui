import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItemIndicator,
  MenuSeparator,
  MenuTrigger,
} from "@ui-sdk/solid/menu"
import { createSignal } from "solid-js"

function Example() {
  const [statusBar, setStatusBar] = createSignal(true)
  const [minimap, setMinimap] = createSignal(false)

  return (
    <>
      <Menu>
        <MenuTrigger class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
          View
        </MenuTrigger>
        <MenuContent class="min-w-40 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
          <MenuGroup>
            <MenuGroupLabel class="px-2 py-1 text-xs text-muted-foreground">Appearance</MenuGroupLabel>
            <MenuCheckboxItem
              class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
              value="status-bar"
              checked={statusBar()}
              onCheckedChange={setStatusBar}
            >
              <MenuItemIndicator
                keepMounted
                class="flex size-4 shrink-0 items-center justify-center data-unchecked:invisible"
              >
                <svg
                  class="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </MenuItemIndicator>
              Status bar
            </MenuCheckboxItem>
            <MenuCheckboxItem
              class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
              value="minimap"
              checked={minimap()}
              onCheckedChange={setMinimap}
            >
              <MenuItemIndicator
                keepMounted
                class="flex size-4 shrink-0 items-center justify-center data-unchecked:invisible"
              >
                <svg
                  class="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </MenuItemIndicator>
              Minimap
            </MenuCheckboxItem>
          </MenuGroup>
          <MenuSeparator class="-mx-1 my-1 h-px bg-border/50" />
          <MenuCheckboxItem
            class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
            value="line-numbers"
            defaultChecked
          >
            <MenuItemIndicator
              keepMounted
              class="flex size-4 shrink-0 items-center justify-center data-unchecked:invisible"
            >
              <svg
                class="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </MenuItemIndicator>
            Line numbers
          </MenuCheckboxItem>
          <MenuCheckboxItem
            class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
            value="word-wrap"
          >
            <MenuItemIndicator
              keepMounted
              class="flex size-4 shrink-0 items-center justify-center data-unchecked:invisible"
            >
              <svg
                class="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </MenuItemIndicator>
            Word wrap
          </MenuCheckboxItem>
        </MenuContent>
      </Menu>
      <output class="mt-3 text-sm text-muted-foreground block min-h-5">
        Status bar {statusBar() ? "shown" : "hidden"}, minimap {minimap() ? "shown" : "hidden"}
      </output>
    </>
  )
}

export { Example }

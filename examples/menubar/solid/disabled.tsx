import { Menu, MenuContent, MenuItem, MenuTrigger } from "@ui-sdk/solid/menu"
import { Menubar } from "@ui-sdk/solid/menubar"
import { For } from "solid-js"

function Example() {
  return (
    <div class="flex flex-col items-start gap-3">
      <Menubar class="flex h-8 w-fit items-center rounded-2xl border border-border p-[3px]">
        <Menu>
          <MenuTrigger class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50">
            File
          </MenuTrigger>
          <MenuContent class="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
            <MenuItem class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
              New File
            </MenuItem>
            <MenuItem
              disabled
              class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              Revert File
            </MenuItem>
          </MenuContent>
        </Menu>
        <Menu>
          <MenuTrigger
            disabled
            class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            Share
          </MenuTrigger>
          <MenuContent class="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
            <MenuItem class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
              Email link
            </MenuItem>
          </MenuContent>
        </Menu>
      </Menubar>
      <Menubar
        disabled
        class="flex h-8 w-fit items-center rounded-2xl border border-border p-[3px] data-disabled:opacity-50"
      >
        <For each={["Edit", "View"]}>
          {(label) => (
            <Menu>
              <MenuTrigger class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30">
                {label}
              </MenuTrigger>
              <MenuContent class="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
                <MenuItem class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
                  Unavailable
                </MenuItem>
              </MenuContent>
            </Menu>
          )}
        </For>
      </Menubar>
    </div>
  )
}

export { Example }

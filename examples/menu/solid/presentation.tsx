import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from "@ui-sdk/solid/menu"
import { createSignal } from "solid-js"

function Example() {
  const [action, setAction] = createSignal("")

  return (
    <>
      <Menu presentation="sheet" onAction={setAction}>
        <MenuTrigger class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
          Options
        </MenuTrigger>
        <MenuContent
          class={(state) =>
            state.presentation === "sheet"
              ? "outline-none bg-popover text-popover-foreground ring-1 ring-foreground/5  rounded-t-3xl px-2 pt-2 pb-[max(env(safe-area-inset-bottom),0.75rem)] text-base [--sheet-backdrop:rgb(0_0_0/0.4)]"
              : "outline-none bg-popover text-popover-foreground ring-1 ring-foreground/5  min-w-44 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl p-1 text-sm shadow-xl transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0"
          }
        >
          <div aria-hidden="true" class="mx-auto mb-2 h-1 w-10 rounded-full bg-input" />
          <MenuItem
            class="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground"
            value="share"
          >
            <svg
              class="size-5 text-muted-foreground group-data-highlighted:text-current"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M12 2v13" />
              <path d="m16 6-4-4-4 4" />
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            </svg>
            Share
          </MenuItem>
          <MenuItem
            class="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground"
            value="copy-link"
          >
            <svg
              class="size-5 text-muted-foreground group-data-highlighted:text-current"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            Copy link
          </MenuItem>
          <MenuSub>
            <MenuSubTrigger class="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground">
              <svg
                class="size-5 text-muted-foreground group-data-highlighted:text-current"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
              Move to
              <svg
                class="ms-auto size-4 text-muted-foreground transition-transform group-data-open:rotate-90 rtl:rotate-180 rtl:group-data-open:rotate-90 motion-reduce:transition-none"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </MenuSubTrigger>
            <MenuSubContent
              class={(state) =>
                state.presentation === "sheet"
                  ? "outline-none"
                  : "outline-none bg-popover text-popover-foreground ring-1 ring-foreground/5  min-w-44 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl p-1 text-sm shadow-xl transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0"
              }
            >
              <MenuItem
                class="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground"
                value="inbox"
              >
                Inbox
              </MenuItem>
              <MenuItem
                class="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground"
                value="archive"
              >
                Archive
              </MenuItem>
            </MenuSubContent>
          </MenuSub>
          <MenuSeparator class="-mx-1 my-1 h-px bg-border/50" />
          <MenuItem
            class="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground"
            value="delete"
            destructive
          >
            <svg
              class="size-5 text-muted-foreground group-data-highlighted:text-current"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M10 11v6" />
              <path d="M14 11v6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
              <path d="M3 6h18" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
            Delete
          </MenuItem>
        </MenuContent>
      </Menu>
      <output class="mt-3 text-sm text-muted-foreground block min-h-5">
        {action() ? `Ran ${action()}` : "Opens as a sheet"}
      </output>
    </>
  )
}

export { Example }

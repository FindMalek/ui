import {
  Menu,
  MenuContent,
  MenuGroupLabel,
  MenuItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuTrigger,
} from "@ui-sdk/solid/menu"
import { createSignal, For } from "solid-js"

const accounts = [
  { value: "personal", name: "Riley Park", initials: "RP" },
  { value: "studio", name: "North Studio", initials: "NS" },
]

function Example() {
  const [account, setAccount] = createSignal("personal")
  const [action, setAction] = createSignal("")
  const current = () => accounts.find((option) => option.value === account())!

  return (
    <>
      <Menu onAction={setAction}>
        <MenuTrigger
          aria-label="Account"
          class={(state) =>
            `inline-flex cursor-default size-8 items-center justify-center rounded-full text-xs font-medium bg-primary text-primary-foreground outline-none transition-shadow focus-visible:ring-3 focus-visible:ring-ring/30 ${state.open ? "ring-3 ring-ring/30" : ""} motion-reduce:transition-none`
          }
        >
          {current().initials}
        </MenuTrigger>
        <MenuContent
          class="w-56 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
          align="end"
        >
          <div class="flex items-center gap-2 px-2 py-1.5">
            <span
              class={`inline-flex cursor-default size-8 shrink-0 items-center justify-center rounded-full text-xs font-medium bg-primary text-primary-foreground`}
            >
              {current().initials}
            </span>
            <div>
              <div class="text-sm font-medium">{current().name}</div>
              <div class="text-xs text-muted-foreground">{current().value}@example.com</div>
            </div>
          </div>
          <MenuSeparator class="-mx-1 my-1 h-px bg-border/50" />
          <MenuRadioGroup value={account()} onValueChange={setAccount}>
            <MenuGroupLabel class="px-2 py-1 text-xs text-muted-foreground">Switch account</MenuGroupLabel>
            <For each={accounts}>
              {(option) => (
                <MenuRadioItem
                  class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
                  value={option.value}
                  closeOnSelect
                >
                  <span
                    class={`inline-flex cursor-default size-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold bg-primary text-primary-foreground`}
                  >
                    {option.initials}
                  </span>
                  {option.name}
                  <svg
                    class="invisible ms-auto size-4 group-data-checked:visible"
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
                </MenuRadioItem>
              )}
            </For>
          </MenuRadioGroup>
          <MenuItem
            class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
            value="add-account"
          >
            <svg
              class="size-4 text-muted-foreground group-data-highlighted:text-current"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" x2="19" y1="8" y2="14" />
              <line x1="22" x2="16" y1="11" y2="11" />
            </svg>
            Add account
          </MenuItem>
          <MenuSeparator class="-mx-1 my-1 h-px bg-border/50" />
          <MenuItem
            class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
            value="settings"
          >
            <svg
              class="size-4 text-muted-foreground group-data-highlighted:text-current"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Settings
          </MenuItem>
          <MenuItem
            class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
            value="sign-out"
          >
            <svg
              class="size-4 text-muted-foreground group-data-highlighted:text-current"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m16 17 5-5-5-5" />
              <path d="M21 12H9" />
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            </svg>
            Sign out
          </MenuItem>
        </MenuContent>
      </Menu>
      <output class="mt-3 text-sm text-muted-foreground block min-h-5">
        {action() ? `Ran ${action()}` : `Signed in as ${current().name}`}
      </output>
    </>
  )
}

export { Example }

import {
  Menu,
  MenuContent,
  MenuGroupLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
} from "@ui-sdk/solid/menu"
import { createSignal, For } from "solid-js"

const fonts = [
  "Inter",
  "Geist",
  "IBM Plex Sans",
  "Source Sans",
  "Work Sans",
  "Manrope",
  "DM Sans",
  "Figtree",
  "Outfit",
  "Lexend",
  "Nunito",
  "Rubik",
  "Karla",
  "Barlow",
  "Mulish",
  "Urbanist",
  "Sora",
  "Onest",
]

function Example() {
  const [font, setFont] = createSignal("Inter")

  return (
    <Menu>
      <MenuTrigger class="inline-flex cursor-default h-8 w-44 shrink-0 items-center justify-between gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground motion-reduce:transition-none">
        {font()}
        <svg
          class="size-4 text-muted-foreground"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </MenuTrigger>
      <MenuContent
        class="max-h-(--available-height) w-[calc(var(--anchor-width)+8px)] overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
        sideOffset={8}
        alignOffset={-4}
        collisionPadding={24}
      >
        <MenuRadioGroup value={font()} onValueChange={setFont}>
          <MenuGroupLabel class="px-2 py-1 text-xs text-muted-foreground">Font</MenuGroupLabel>
          <For each={fonts}>
            {(name) => (
              <MenuRadioItem
                class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
                value={name}
                closeOnSelect
              >
                {name}
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
      </MenuContent>
    </Menu>
  )
}

export { Example }

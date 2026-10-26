import {
  Menu,
  MenuContent,
  MenuItemIndicator,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
} from "@ui-sdk/react/menu"
import { Menubar } from "@ui-sdk/react/menubar"
import * as React from "react"

const profiles = [
  { value: "andy", label: "Andy" },
  { value: "benoit", label: "Benoit" },
  { value: "luis", label: "Luis" },
]

const themes = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
]

export function Example() {
  const [theme, setTheme] = React.useState("system")
  return (
    <div className="flex flex-col items-start gap-3">
      <Menubar className="flex h-8 w-fit items-center rounded-2xl border border-border p-[3px]">
        <Menu>
          <MenuTrigger className="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted">
            Profiles
          </MenuTrigger>
          <MenuContent className="min-w-36 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
            <MenuRadioGroup defaultValue="benoit">
              {profiles.map((profile) => (
                <MenuRadioItem
                  key={profile.value}
                  value={profile.value}
                  className="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
                >
                  <MenuItemIndicator className="pointer-events-none absolute start-1.5 flex size-4 items-center justify-center">
                    <span className="size-2 rounded-full bg-current" />
                  </MenuItemIndicator>
                  {profile.label}
                </MenuRadioItem>
              ))}
            </MenuRadioGroup>
          </MenuContent>
        </Menu>
        <Menu>
          <MenuTrigger className="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted">
            Theme
          </MenuTrigger>
          <MenuContent className="min-w-36 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
            <MenuRadioGroup value={theme} onValueChange={setTheme}>
              {themes.map((option) => (
                <MenuRadioItem
                  key={option.value}
                  value={option.value}
                  className="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
                >
                  <MenuItemIndicator className="pointer-events-none absolute start-1.5 flex size-4 items-center justify-center">
                    <span className="size-2 rounded-full bg-current" />
                  </MenuItemIndicator>
                  {option.label}
                </MenuRadioItem>
              ))}
            </MenuRadioGroup>
          </MenuContent>
        </Menu>
      </Menubar>
      <output className="text-sm text-muted-foreground">Theme: {theme}</output>
    </div>
  )
}

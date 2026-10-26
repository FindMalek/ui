"use client"

import * as React from "react"
import {
  Menu,
  MenuContent,
  MenuGroupLabel,
  MenuItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuTrigger,
} from "@ui-sdk/react/menu"
import { Check, LogOut, Settings, UserPlus } from "lucide-react"

const accounts = [
  { value: "personal", name: "Riley Park", initials: "RP" },
  { value: "studio", name: "North Studio", initials: "NS" },
]

function Example() {
  const [account, setAccount] = React.useState("personal")
  const [action, setAction] = React.useState("")
  const current = accounts.find((option) => option.value === account)!

  return (
    <>
      <Menu onAction={setAction}>
        <MenuTrigger
          aria-label="Account"
          className={(state) =>
            `inline-flex cursor-default size-8 items-center justify-center rounded-full text-xs font-medium bg-primary text-primary-foreground outline-none transition-shadow focus-visible:ring-3 focus-visible:ring-ring/30 ${state.open ? "ring-3 ring-ring/30" : ""} motion-reduce:transition-none`
          }
        >
          {current.initials}
        </MenuTrigger>
        <MenuContent
          className="w-56 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
          align="end"
        >
          <div className="flex items-center gap-2 px-2 py-1.5">
            <span
              className={`inline-flex cursor-default size-8 shrink-0 items-center justify-center rounded-full text-xs font-medium bg-primary text-primary-foreground`}
            >
              {current.initials}
            </span>
            <div>
              <div className="text-sm font-medium">{current.name}</div>
              <div className="text-xs text-muted-foreground">{current.value}@example.com</div>
            </div>
          </div>
          <MenuSeparator className="-mx-1 my-1 h-px bg-border/50" />
          <MenuRadioGroup value={account} onValueChange={setAccount}>
            <MenuGroupLabel className="px-2 py-1 text-xs text-muted-foreground">
              Switch account
            </MenuGroupLabel>
            {accounts.map((option) => (
              <MenuRadioItem
                key={option.value}
                className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
                value={option.value}
                closeOnSelect
              >
                <span
                  className={`inline-flex cursor-default size-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold bg-primary text-primary-foreground`}
                >
                  {option.initials}
                </span>
                {option.name}
                <Check aria-hidden="true" className="invisible ms-auto size-4 group-data-checked:visible" />
              </MenuRadioItem>
            ))}
          </MenuRadioGroup>
          <MenuItem
            className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
            value="add-account"
          >
            <UserPlus
              aria-hidden="true"
              className="size-4 text-muted-foreground group-data-highlighted:text-current"
            />
            Add account
          </MenuItem>
          <MenuSeparator className="-mx-1 my-1 h-px bg-border/50" />
          <MenuItem
            className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
            value="settings"
          >
            <Settings
              aria-hidden="true"
              className="size-4 text-muted-foreground group-data-highlighted:text-current"
            />
            Settings
          </MenuItem>
          <MenuItem
            className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
            value="sign-out"
          >
            <LogOut
              aria-hidden="true"
              className="size-4 text-muted-foreground group-data-highlighted:text-current"
            />
            Sign out
          </MenuItem>
        </MenuContent>
      </Menu>
      <output className="mt-3 text-sm text-muted-foreground block min-h-5">
        {action ? `Ran ${action}` : `Signed in as ${current.name}`}
      </output>
    </>
  )
}

export { Example }

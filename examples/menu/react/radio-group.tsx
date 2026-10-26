"use client"

import * as React from "react"
import {
  Menu,
  MenuContent,
  MenuGroupLabel,
  MenuItemIndicator,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuTrigger,
} from "@ui-sdk/react/menu"

function Example() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <>
      <Menu>
        <MenuTrigger className="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
          Panel
        </MenuTrigger>
        <MenuContent className="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
          <MenuRadioGroup name="position" value={position} onValueChange={setPosition}>
            <MenuGroupLabel className="px-2 py-1 text-xs text-muted-foreground">Position</MenuGroupLabel>
            {["Top", "Bottom", "Right"].map((option) => (
              <MenuRadioItem
                key={option}
                className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
                value={option.toLowerCase()}
              >
                <span className="flex size-4 shrink-0 items-center justify-center">
                  <MenuItemIndicator className="size-2 rounded-full bg-current" />
                </span>
                {option}
              </MenuRadioItem>
            ))}
          </MenuRadioGroup>
          <MenuSeparator className="-mx-1 my-1 h-px bg-border/50" />
          <MenuRadioGroup defaultValue="comfortable">
            <MenuGroupLabel className="px-2 py-1 text-xs text-muted-foreground">Density</MenuGroupLabel>
            {["Compact", "Comfortable"].map((option) => (
              <MenuRadioItem
                key={option}
                className="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
                value={option.toLowerCase()}
              >
                <span className="flex size-4 shrink-0 items-center justify-center">
                  <MenuItemIndicator className="size-2 rounded-full bg-current" />
                </span>
                {option}
              </MenuRadioItem>
            ))}
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
      <output className="mt-3 text-sm text-muted-foreground block min-h-5">Panel at the {position}</output>
    </>
  )
}

export { Example }

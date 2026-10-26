"use client"

import * as React from "react"
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuItem,
  MenuItemIndicator,
  MenuSeparator,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
  type MenuData,
  type MenuDataItem,
} from "@ui-sdk/react/menu"
import { Menubar } from "@ui-sdk/react/menubar"
import { Check, ChevronRight } from "lucide-react"

const file: MenuData = [
  { value: "new", label: "New File", shortcut: "mod+alt+n" },
  { value: "open", label: "Open…" },
  { type: "separator" },
  { type: "submenu", label: "Share", items: [{ value: "email", label: "Email link" }] },
]
const view: MenuData = [
  { type: "checkbox", value: "minimap", label: "Minimap", defaultChecked: true },
  { type: "checkbox", value: "wrap", label: "Word Wrap" },
]

function MenuEntries({
  items,
  itemClassName,
  contentClassName,
}: {
  items: MenuData
  itemClassName: string
  contentClassName: string
}) {
  return items.map((entry, index) => {
    const item: MenuDataItem = typeof entry === "string" ? { value: entry, label: entry } : entry
    switch (item.type) {
      case undefined:
      case "item":
        return (
          <MenuItem key={item.value} value={item.value} shortcut={item.shortcut} className={itemClassName}>
            {item.label}
          </MenuItem>
        )
      case "separator":
        return <MenuSeparator key={`separator-${index}`} className="-mx-1 my-1 h-px bg-border/50" />
      case "checkbox":
        return (
          <MenuCheckboxItem
            key={item.value}
            value={item.value}
            defaultChecked={item.defaultChecked}
            className={itemClassName}
          >
            <MenuItemIndicator className="pointer-events-none absolute start-1.5 flex size-4 items-center justify-center">
              <Check aria-hidden="true" className="size-4" />
            </MenuItemIndicator>
            {item.label}
          </MenuCheckboxItem>
        )
      case "submenu":
        return (
          <MenuSub key={`submenu-${index}`}>
            <MenuSubTrigger className={itemClassName}>
              {item.label}
              <ChevronRight aria-hidden="true" className="size-4 ms-auto" />
            </MenuSubTrigger>
            <MenuSubContent className={contentClassName}>
              <MenuEntries
                items={item.items}
                itemClassName={itemClassName}
                contentClassName={contentClassName}
              />
            </MenuSubContent>
          </MenuSub>
        )
    }
  })
}

const fileContent =
  "min-w-48 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 **:data-[slot=menu-shortcut]:ms-auto **:data-[slot=menu-shortcut]:text-xs **:data-[slot=menu-shortcut]:tracking-widest **:data-[slot=menu-shortcut]:text-muted-foreground data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
const fileItem =
  "flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
const viewContent =
  "min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
const viewItem =
  "relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"

function Example() {
  const [last, setLast] = React.useState("nothing yet")
  return (
    <div className="flex flex-col items-start gap-3">
      <Menubar className="flex h-8 w-fit items-center rounded-2xl border border-border p-[3px]">
        <Menu items={file} onAction={setLast}>
          <MenuTrigger className="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted">
            File
          </MenuTrigger>
          <MenuContent className={fileContent}>
            <MenuEntries items={file} itemClassName={fileItem} contentClassName={fileContent} />
          </MenuContent>
        </Menu>
        <Menu
          items={view}
          onCheckedChange={(checked, { value }) => setLast(`${value} ${checked ? "on" : "off"}`)}
        >
          <MenuTrigger className="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted">
            View
          </MenuTrigger>
          <MenuContent className={viewContent}>
            <MenuEntries items={view} itemClassName={viewItem} contentClassName={viewContent} />
          </MenuContent>
        </Menu>
      </Menubar>
      <output className="text-sm text-muted-foreground block min-h-5">Last: {last}</output>
    </div>
  )
}

export { Example }

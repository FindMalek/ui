"use client"

import * as React from "react"
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from "@ui-sdk/react/menu"
import { ChevronRight, Download, Link, Share, Trash } from "lucide-react"

function Example() {
  const [action, setAction] = React.useState("")

  return (
    <>
      <Menu presentation="sheet" onAction={setAction}>
        <MenuTrigger className="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
          Options
        </MenuTrigger>
        <MenuContent
          className={(state) =>
            state.presentation === "sheet"
              ? "outline-none bg-popover text-popover-foreground ring-1 ring-foreground/5  rounded-t-3xl px-2 pt-2 pb-[max(env(safe-area-inset-bottom),0.75rem)] text-base [--sheet-backdrop:rgb(0_0_0/0.4)]"
              : "outline-none bg-popover text-popover-foreground ring-1 ring-foreground/5  min-w-44 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl p-1 text-sm shadow-xl transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0"
          }
        >
          <div aria-hidden className="mx-auto mb-2 h-1 w-10 rounded-full bg-input" />
          <MenuItem
            className="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground"
            value="share"
          >
            <Share className="size-5 text-muted-foreground group-data-highlighted:text-current" />
            Share
          </MenuItem>
          <MenuItem
            className="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground"
            value="copy-link"
          >
            <Link className="size-5 text-muted-foreground group-data-highlighted:text-current" />
            Copy link
          </MenuItem>
          <MenuSub>
            <MenuSubTrigger className="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground">
              <Download className="size-5 text-muted-foreground group-data-highlighted:text-current" />
              Move to
              <ChevronRight
                aria-hidden="true"
                className="ms-auto size-4 text-muted-foreground transition-transform group-data-open:rotate-90 rtl:rotate-180 rtl:group-data-open:rotate-90 motion-reduce:transition-none"
              />
            </MenuSubTrigger>
            <MenuSubContent
              className={(state) =>
                state.presentation === "sheet"
                  ? "outline-none"
                  : "outline-none bg-popover text-popover-foreground ring-1 ring-foreground/5  min-w-44 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl p-1 text-sm shadow-xl transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0"
              }
            >
              <MenuItem
                className="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground"
                value="inbox"
              >
                Inbox
              </MenuItem>
              <MenuItem
                className="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground"
                value="archive"
              >
                Archive
              </MenuItem>
            </MenuSubContent>
          </MenuSub>
          <MenuSeparator className="-mx-1 my-1 h-px bg-border/50" />
          <MenuItem
            className="group flex cursor-default items-center gap-3 rounded-xl px-3 py-3 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground"
            value="delete"
            destructive
          >
            <Trash
              aria-hidden="true"
              className="size-5 text-muted-foreground group-data-highlighted:text-current"
            />
            Delete
          </MenuItem>
        </MenuContent>
      </Menu>
      <output className="mt-3 text-sm text-muted-foreground block min-h-5">
        {action ? `Ran ${action}` : "Opens as a sheet"}
      </output>
    </>
  )
}

export { Example }

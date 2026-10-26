import * as React from "react"
import {
  createPopup,
  definePrimitive,
  popupClose,
  popupContent,
  popupState,
  popupTitle,
  popupTrigger,
  type ChangeDetails,
  type PopupPreset,
} from "@ui-sdk/core"
import { dialogPreset } from "@ui-sdk/core/dialog"
import { popoverPreset } from "@ui-sdk/core/popover"
import { tooltipPreset } from "@ui-sdk/core/tooltip"
import { createParts } from "@ui-sdk/react/primitive"

type PanelOptions = {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean, details: ChangeDetails<string>) => void
}

const popupWith = (name: string, preset: PopupPreset) =>
  definePrimitive({
    name,
    options: { open: "boolean", defaultOpen: "boolean", onOpenChange: "callback" },
    state: (options: PanelOptions) => popupState(options),
    sync: (options) => (options.open === undefined ? {} : { open: options.open }),
    api: (context) => createPopup(context, { preset }),
    slots: (slot) => ({
      trigger: popupTrigger(slot),
      content: popupContent(slot),
      title: popupTitle(slot),
      close: popupClose(slot),
    }),
  })

const tags = { trigger: "button", content: "div", title: "h2", close: "button" } as const

const filters = createParts(popupWith("filters", popoverPreset), tags)
const rename = createParts(popupWith("rename", dialogPreset), tags)
const help = createParts(popupWith("help", tooltipPreset), tags)

const button = "rounded-md border border-border px-3 py-1.5 text-sm"
const panel =
  "flex flex-col gap-2 rounded-xl bg-popover p-3 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none"

function Example() {
  return (
    <div className="flex items-center gap-2">
      <filters.Root>
        <filters.Trigger className={button}>Filters</filters.Trigger>
        <filters.Content sideOffset={6} className={`${panel} w-48`}>
          <filters.Title className="font-medium">Filters</filters.Title>
          <label className="flex items-center gap-1.5">
            <input type="checkbox" defaultChecked /> Unread only
          </label>
          <filters.Close className="self-end text-xs underline">Done</filters.Close>
        </filters.Content>
      </filters.Root>
      <rename.Root>
        <rename.Trigger className={button}>Rename</rename.Trigger>
        <rename.Content className={`${panel} m-auto w-64 backdrop:bg-black/40`}>
          <rename.Title className="font-medium">Rename file</rename.Title>
          <input
            aria-label="Name"
            defaultValue="notes.md"
            className="rounded-md border border-border bg-background px-2 py-1"
          />
          <rename.Close className="self-end rounded-md bg-foreground px-2 py-1 text-xs text-background">
            Save
          </rename.Close>
        </rename.Content>
      </rename.Root>
      <help.Root>
        <help.Trigger aria-label="Help" className={`${button} size-8 px-0`}>
          ?
        </help.Trigger>
        <help.Content sideOffset={6} className="rounded-md bg-foreground px-2 py-1 text-xs text-background">
          Filters narrow the list, and Rename changes the file's name.
        </help.Content>
      </help.Root>
    </div>
  )
}

export { Example, filters, help, rename }

import type { ListAnnouncement, CommandData } from "@ui-sdk/core/command"
import "@ui-sdk/web/command"
import { createElement, Search } from "lucide"

const commands: CommandData = [
  "Home",
  "Inbox",
  "Documents",
  "Downloads",
  "Pictures",
  "Music",
  "New file",
  "New folder",
  "Copy",
  "Cut",
  "Paste",
  "Delete",
  "Zoom in",
  "Zoom out",
  "Notifications",
  "Help",
  "Keyboard shortcuts",
  "Settings",
]

const suggested: CommandData = [
  { type: "group", label: "Suggested", items: ["New file", "Settings", "Help"] },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-command class="flex h-80 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5">
      <div class="shrink-0 p-1 pb-0">
        <div class="box-border flex h-8 items-center gap-2 rounded-2xl border border-transparent bg-input/50 px-2.5 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30">
          ${createElement(Search, { class: "pointer-events-none block size-4 shrink-0 opacity-50", "aria-hidden": "true" }).outerHTML}
          <ui-command-input>
            <input aria-label="Search commands" placeholder="Search commands…" class="m-0 h-full w-full min-w-0 border-0 bg-transparent p-0 text-base leading-6 text-inherit outline-none placeholder:text-muted-foreground md:text-sm md:leading-5" />
          </ui-command-input>
        </div>
      </div>
      <ui-command-empty class="m-0 shrink-0 py-6 text-center text-sm leading-5 text-muted-foreground empty:hidden">No results found.</ui-command-empty>
      <ui-command-list class="min-h-0 flex-1 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none max-h-64 p-1"></ui-command-list>
      <template>
        <ui-command-group>
          <ui-command-group-label class="px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground"></ui-command-group-label>
          <ui-command-item class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
            <ui-command-item-text class="[&_mark]:bg-transparent [&_mark]:font-semibold [&_mark]:text-foreground"></ui-command-item-text>
          </ui-command-item>
        </ui-command-group>
      </template>
    </ui-command>
  `
  const command = root.querySelector("ui-command")!
  command.announcement = (change: ListAnnouncement) =>
    change.type === "results" ? `${change.count} commands` : null
  command.emptyItems = suggested
  command.items = commands
}

export { mount }

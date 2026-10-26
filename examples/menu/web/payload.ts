import type { UiMenuElement } from "@ui-sdk/web/menu"
import "@ui-sdk/web/menu"
import { createElement, Ellipsis } from "lucide"

type File = { name: string; size: string }

const files: File[] = [
  { name: "Roadmap.pdf", size: "2.4 MB" },
  { name: "Budget.xlsx", size: "860 KB" },
  { name: "Team photo.jpg", size: "5.1 MB" },
]

let count = 0

function mount(root: HTMLElement) {
  const id = `file-actions-${++count}`
  root.innerHTML = `
    <ul class="w-full max-w-sm divide-y divide-border rounded-2xl border border-border"></ul>
    <ui-menu id="${id}">
      <ui-menu-content class="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none" align="end">
        <ui-menu-group>
          <ui-menu-group-label class="px-2 py-1 text-xs text-muted-foreground"></ui-menu-group-label>
          <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="open">Open</ui-menu-item>
          <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="rename">Rename</ui-menu-item>
          <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="duplicate">Duplicate</ui-menu-item>
        </ui-menu-group>
        <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
        <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="delete">Delete</ui-menu-item>
      </ui-menu-content>
    </ui-menu>
    <button class="mt-3 inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">Open for ${files[0].name}</button>
    <output class="mt-3 text-sm text-muted-foreground block min-h-5">Pick a file's actions</output>
  `
  const menu = root.querySelector<UiMenuElement<File>>("ui-menu")!
  const label = root.querySelector("ui-menu-group-label")!
  const status = root.querySelector("output")!

  for (const file of files) {
    const row = document.createElement("li")
    row.className = "flex items-center gap-3 py-1.5 ps-3 pe-1.5 text-sm"
    row.innerHTML = `${file.name}<span class="ms-auto text-sm text-muted-foreground">${file.size}</span>`
    const trigger = Object.assign(document.createElement("ui-menu-trigger"), { payload: file })
    trigger.setAttribute("for", id)
    trigger.innerHTML = `
      <button class="inline-flex cursor-default size-7 shrink-0 items-center justify-center rounded-2xl text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground motion-reduce:transition-none" aria-label="Actions for ${file.name}">
        ${createElement(Ellipsis, { class: "size-4", "aria-hidden": "true" }).outerHTML}
      </button>
    `
    row.append(trigger)
    root.querySelector("ul")!.append(row)
  }

  menu.addEventListener("payloadchange", (event) => {
    const file = event.detail.value
    label.textContent = file?.name ?? ""
  })
  menu.addEventListener("action", (event) => {
    const { value } = event.detail
    status.textContent = `${value} ${menu.api.getPayload()?.name}`
  })

  const opener = root.querySelector<HTMLButtonElement>(":scope > button")!
  opener.addEventListener("click", async () => {
    const result = await menu.api.open({ payload: files[0], anchor: opener })
    status.textContent = `Closed with ${result.reason}`
  })
}

export { mount }

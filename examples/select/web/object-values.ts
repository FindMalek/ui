import "@ui-sdk/web/select"
import { Check, ChevronDown, createElement } from "lucide"

type Member = { id: number; name: string; email: string }

const members: Member[] = [
  { id: 1, name: "Ada Lovelace", email: "ada@example.com" },
  { id: 2, name: "Grace Hopper", email: "grace@example.com" },
  { id: 3, name: "Alan Turing", email: "alan@example.com" },
  { id: 4, name: "Margaret Hamilton", email: "margaret@example.com" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-64 max-w-full flex-col gap-3">
      <ui-select name="assignee" placeholder="Unassigned">
        <div class="flex flex-col gap-2">
          <ui-select-label class="text-sm leading-none font-medium">Assignee</ui-select-label>
          <ui-select-trigger>
            <button class="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent">
              <ui-select-value class="min-w-0 flex-1 truncate text-start"></ui-select-value>
              ${createElement(ChevronDown, { class: "pointer-events-none block size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
            </button>
          </ui-select-trigger>
        </div>
        <ui-select-content class="max-h-(--available-height) scroll-py-1 overflow-x-hidden overflow-y-auto box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none">
          ${members
            .map(
              (member) => `
                <ui-select-item value="${member.id}" class="relative flex min-h-7 w-full cursor-default flex-col rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
                  <span>${member.name}</span>
                  <span class="text-xs leading-4 text-muted-foreground">${member.email}</span>
                  <ui-select-item-indicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center top-1/2 -translate-y-1/2">${createElement(Check, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-select-item-indicator>
                </ui-select-item>
              `,
            )
            .join("")}
        </ui-select-content>
      </ui-select>
      <output class="block min-h-10 text-sm leading-5 break-all text-muted-foreground"></output>
    </div>
  `
  const select = root.querySelector("ui-select") as HTMLElement & {
    items: { value: Member; label: string }[]
    itemToValue: (member: Member) => string
    itemToLabel: (member: Member) => string
    value: Member | null
  }
  const output = root.querySelector("output")!
  select.addEventListener("valuechange", (event) => {
    const { value } = (event as CustomEvent<{ value: Member | null }>).detail
    output.textContent = `Submits assignee=${value ? value.id : ""}`
  })
  select.items = members.map((member) => ({ value: member, label: member.name }))
  select.itemToValue = (member) => String(member.id)
  select.itemToLabel = (member) => member.name
  select.value = { ...members[1] }
}

export { mount }

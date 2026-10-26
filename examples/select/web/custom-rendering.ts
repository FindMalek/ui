import "@ui-sdk/web/select"
import { Check, ChevronDown, createElement } from "lucide"

type Member = { id: number; name: string; email: string }

const members: Member[] = [
  { id: 1, name: "Ada Lovelace", email: "ada@example.com" },
  { id: 2, name: "Grace Hopper", email: "grace@example.com" },
  { id: 3, name: "Alan Turing", email: "alan@example.com" },
  { id: 4, name: "Margaret Hamilton", email: "margaret@example.com" },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-select default-value="1">
      <div class="flex w-64 flex-col gap-2">
        <ui-select-label class="text-sm leading-none font-medium">Reviewer</ui-select-label>
        <ui-select-trigger>
          <button class="group flex h-10 w-full min-w-0 items-center gap-2 rounded-full border border-transparent bg-input/50 ps-1.5 pe-3 text-sm outline-none transition-[color,box-shadow] duration-200 select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30">
            <ui-select-value class="flex items-center gap-2 truncate">
              <span class="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground"></span>
              <span></span>
            </ui-select-value>
            ${createElement(ChevronDown, { class: "ms-auto size-4 shrink-0 text-muted-foreground transition-transform group-data-open:rotate-180", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-select-trigger>
      </div>
      <ui-select-content class="max-h-(--available-height) min-w-(--anchor-width) origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
        ${members
          .map(
            (member) => `
              <ui-select-item value="${member.id}" label="${member.name}" ${member.id === 4 ? "disabled" : ""} class="group flex cursor-default items-center gap-2 rounded-xl p-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-50">
                <span class="flex size-7 shrink-0 items-center justify-center rounded-full bg-background text-xs font-medium text-muted-foreground ring-1 ring-foreground/10 group-data-selected:bg-primary group-data-selected:text-primary-foreground group-data-selected:ring-0">
                  ${member.name.slice(0, 1)}
                </span>
                <span class="flex flex-col">
                  ${member.name}
                  <span class="text-xs text-muted-foreground">${member.id === 4 ? "Out of office" : member.email}</span>
                </span>
                <ui-select-item-indicator as-child>
                  <span class="ms-auto">${createElement(Check, { class: "size-4", "aria-hidden": "true" }).outerHTML}</span>
                </ui-select-item-indicator>
              </ui-select-item>
            `,
          )
          .join("")}
      </ui-select-content>
    </ui-select>
  `
  const select = root.querySelector("ui-select")!
  const [avatar, label] = root.querySelectorAll("ui-select-value > span")
  const show = (value: string | null) => {
    const member = members.find((candidate) => String(candidate.id) === value)
    avatar.textContent = member?.name.slice(0, 1) ?? ""
    label.textContent = member?.name ?? ""
  }
  show("1")
  select.addEventListener("valuechange", (event) => {
    show((event as CustomEvent<{ value: string | null }>).detail.value)
  })
}

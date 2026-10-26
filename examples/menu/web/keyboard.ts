import "@ui-sdk/web/menu"

const statuses = [
  { value: "online", label: "Online", hint: "Visible to everyone" },
  { value: "away", label: "Away", hint: "Shown as idle" },
  { value: "busy", label: "Do not disturb", hint: "Notifications are muted" },
  { value: "invisible", label: "Invisible", hint: "Appear offline" },
]

function mount(root: HTMLElement) {
  let current = statuses[0]

  root.innerHTML = `
    <ui-menu loop="false">
      <ui-menu-trigger>
        <button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
          <span data-label>${current.label}</span>
        </button>
      </ui-menu-trigger>
      <ui-menu-content class="min-w-48 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
        <ui-menu-radio-group value="${current.value}">
          ${statuses
            .map(
              (option) => `
                <ui-menu-radio-item
                  class="group flex min-h-7 cursor-default items-start gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
                  value="${option.value}"
                  label="${option.label}"
                  close-on-select
                >
                  <span class="group-data-checked:font-medium">
                    ${option.label}
                    <span class="block text-xs font-normal text-muted-foreground">${option.hint}</span>
                  </span>
                </ui-menu-radio-item>
              `,
            )
            .join("")}
        </ui-menu-radio-group>
      </ui-menu-content>
    </ui-menu>
    <output class="mt-3 text-sm text-muted-foreground block min-h-5">Arrow keys stop at the ends. Type a status to jump to it.</output>
  `
  const group = root.querySelector("ui-menu-radio-group")!
  group.addEventListener("valuechange", (event) => {
    const { value } = (event as CustomEvent<{ value: string }>).detail
    const next = statuses.find((option) => option.value === value)!
    group.setAttribute("value", value)
    root.querySelector("[data-label]")!.textContent = next.label
    current = next
  })
}

export { mount }

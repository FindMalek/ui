import "@ui-sdk/web/combobox"
import { Check, createElement, LoaderCircle, Plus } from "lucide"

const labels = ["Bug", "Feature", "Documentation", "Design", "Performance", "Security", "Testing"]

function saveLabel(name: string) {
  return new Promise<void>((resolve, reject) =>
    setTimeout(
      () => (name.length > 20 ? reject(new Error("Labels are 20 characters at most.")) : resolve()),
      800,
    ),
  )
}

const item = (label: string) => `
  <ui-combobox-item value="${label}" class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2">
    ${label}
    <ui-combobox-item-indicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">${createElement(Check, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-combobox-item-indicator>
  </ui-combobox-item>
`

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-combobox multiple default-value="Bug">
      <div class="flex w-80 max-w-full flex-col gap-2">
        <ui-combobox-label class="text-sm leading-none font-medium">Labels</ui-combobox-label>
        <ui-combobox-chips class="box-border flex min-h-8 w-full flex-wrap items-center gap-1 rounded-2xl border border-transparent bg-input/50 bg-clip-padding p-1 text-sm leading-5 transition-[color,box-shadow] duration-200 focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/30">
          <ui-combobox-input>
            <input placeholder="Add or create a label" class="h-6 min-w-16 flex-1 border-0 bg-transparent px-1.5 py-0 text-base leading-6 text-inherit outline-none placeholder:text-muted-foreground md:text-sm md:leading-5" />
          </ui-combobox-input>
        </ui-combobox-chips>
      </div>
      <ui-combobox-content class="max-h-[min(18rem,var(--available-height))] scroll-py-1 overflow-x-hidden overflow-y-auto box-border w-(--anchor-width) min-w-36 rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
        <ui-combobox-list>
          ${labels.map(item).join("")}
          <ui-combobox-create min-length="2" class="flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground  ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2 data-pending:cursor-progress group">
            ${createElement(LoaderCircle, { class: "pointer-events-none hidden size-4 shrink-0 text-muted-foreground animate-spin group-data-pending:block", "aria-hidden": "true" }).outerHTML}
            <span class="hidden group-data-pending:inline">Creating “<span data-query></span>”…</span>
            ${createElement(Plus, { class: "pointer-events-none block size-4 shrink-0 text-muted-foreground group-data-pending:hidden", "aria-hidden": "true" }).outerHTML}
            <span class="flex flex-col group-data-pending:hidden">
              <span>Create “<span data-query></span>”</span>
              <span data-error class="text-xs leading-4 font-medium text-foreground empty:hidden"></span>
            </span>
          </ui-combobox-create>
        </ui-combobox-list>
      </ui-combobox-content>
      <template>
        <ui-combobox-chip class="box-border flex h-5.25 w-fit items-center justify-center gap-1 rounded-2xl bg-input ps-1.5 pe-0.5 text-xs leading-4 font-medium whitespace-nowrap text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30">
          <ui-combobox-chip-remove><button type="button" class="-ms-0.5 flex size-4.5 cursor-default items-center justify-center rounded-full border-0 bg-transparent p-0 text-inherit opacity-50 outline-none hover:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none">×</button></ui-combobox-chip-remove>
        </ui-combobox-chip>
      </template>
    </ui-combobox>
  `
  const combobox = root.querySelector("ui-combobox") as HTMLElement & {
    value: string[]
  }
  const error = root.querySelector("[data-error]")!
  combobox.addEventListener("querychange", (event) => {
    const query = (event as CustomEvent<{ value: string }>).detail.value.trim()
    for (const span of root.querySelectorAll("[data-query]")) span.textContent = query
  })
  combobox.addEventListener("create", (event) => {
    const { value, waitUntil } = (
      event as CustomEvent<{ value: string; waitUntil: (promise: Promise<unknown>) => void }>
    ).detail
    error.textContent = ""
    waitUntil(
      saveLabel(value).then(
        () => {
          root.querySelector("ui-combobox-create")!.insertAdjacentHTML("beforebegin", item(value))
          combobox.value = [...combobox.value, value]
        },
        (reason: Error) => {
          error.textContent = reason.message
          throw reason
        },
      ),
    )
  })
}

export { mount }

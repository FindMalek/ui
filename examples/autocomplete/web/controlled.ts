import "@ui-sdk/web/autocomplete"

const fruits = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Blackberry",
  "Blueberry",
  "Cherry",
  "Grape",
  "Lemon",
  "Mango",
  "Orange",
  "Peach",
  "Pear",
  "Pineapple",
  "Strawberry",
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-64 flex-col gap-2">
      <ui-autocomplete debug>
        <ui-autocomplete-label class="text-sm leading-none font-medium">Fruit (12 characters at most)</ui-autocomplete-label>
        <ui-autocomplete-input>
          <input class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm" />
        </ui-autocomplete-input>
        <ui-autocomplete-content class="max-h-[min(18rem,var(--available-height))] w-(--anchor-width) min-w-36 origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
          <ui-autocomplete-list>
            ${fruits.map((fruit) => `<ui-autocomplete-item value="${fruit}" class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">${fruit}</ui-autocomplete-item>`).join("")}
          </ui-autocomplete-list>
        </ui-autocomplete-content>
      </ui-autocomplete>
      <output class="text-sm text-muted-foreground">Type something</output>
    </div>
  `
  const autocomplete = root.querySelector("ui-autocomplete")!
  const log = root.querySelector("output")!
  autocomplete.addEventListener("valuechange", (event) => {
    if (event.detail.value.length > 12) return event.preventDefault()
    log.textContent = `text: ${event.detail.reason}`
  })
  autocomplete.addEventListener("openchange", (event) => {
    log.textContent = `${event.detail.value ? "opened" : "closed"}: ${event.detail.reason}`
  })
  autocomplete.addEventListener("openchangecomplete", (event) => {
    log.textContent = `${event.detail.value ? "opened" : "closed"} and settled`
  })
  autocomplete.addEventListener("highlight", (event) => {
    if (event.detail.value) log.textContent = `highlighted ${event.detail.value}`
  })
}

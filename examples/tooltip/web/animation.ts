import "@ui-sdk/web/tooltip"

const items = ["Inbox", "Drafts", "Sent"]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-center">
      <div class="flex gap-2">
        ${items
          .map(
            (item) => `
        <ui-tooltip data-item="${item}">
          <ui-tooltip-trigger><button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none">${item}</button></ui-tooltip-trigger>
          <ui-tooltip-content class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale,translate] duration-300 ease-out data-starting-style:translate-y-1 data-starting-style:scale-90 data-starting-style:opacity-0 data-ending-style:scale-90 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none">Open ${item.toLowerCase()}</ui-tooltip-content>
        </ui-tooltip>`,
          )
          .join("")}
      </div>
      <output class="mt-3 text-sm text-muted-foreground">Closed</output>
    </div>
  `
  const status = root.querySelector("output")!
  const item = (event: Event) => (event.target as HTMLElement).dataset.item
  const open = (event: Event) => (event as CustomEvent<{ value: boolean }>).detail.value
  root.addEventListener(
    "openchange",
    (event) => {
      status.textContent = `${item(event)} ${open(event) ? "opening" : "closing"}`
    },
    { capture: true },
  )
  root.addEventListener(
    "openchangecomplete",
    (event) => {
      if (!open(event) && status.textContent !== `${item(event)} closing`) return
      status.textContent = `${item(event)} ${open(event) ? "open" : "closed"}`
    },
    { capture: true },
  )
}

export { mount }

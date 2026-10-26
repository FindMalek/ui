import "@ui-sdk/web/drawer"

let count = 0

function mount(root: HTMLElement) {
  const id = `drawer-chat-${++count}`
  root.innerHTML = `
    <ui-drawer persistent-elements="#${id}">
      <ui-drawer-trigger><button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Upgrade plan</button></ui-drawer-trigger>
      <ui-drawer-backdrop class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm"></ui-drawer-backdrop>
      <ui-drawer-content class="relative mx-auto flex max-h-[85dvh] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit">
        <div aria-hidden="true" class="mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted"></div>
        <div class="flex flex-col gap-0.5 p-4 text-center md:gap-1.5 md:text-start">
          <ui-drawer-title class="text-base font-medium text-foreground">Upgrade to Pro</ui-drawer-title>
          <ui-drawer-description class="text-sm text-muted-foreground">Questions? The chat in the corner still works.</ui-drawer-description>
        </div>
        <div class="flex flex-col gap-2 p-4 pt-0 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <ui-drawer-close value="upgrade"><button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Upgrade</button></ui-drawer-close>
          <ui-drawer-close><button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Not now</button></ui-drawer-close>
        </div>
      </ui-drawer-content>
    </ui-drawer>
    <button id="${id}" type="button" popover="manual" class="fixed inset-auto end-4 top-4 m-0 inline-flex cursor-default not-open:hidden h-9 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-4 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">Chat with us</button>
  `
  const chat = root.querySelector<HTMLButtonElement>(`#${id}`)!
  let messages = 0
  chat.addEventListener("click", () => (chat.textContent = `Chat with us (${++messages})`))
  root.querySelector("ui-drawer")!.addEventListener("openchange", (event) => {
    if (event.detail.value) requestAnimationFrame(() => chat.showPopover())
    else chat.hidePopover()
  })
}

export { mount }

import "@ui-sdk/web/drawer"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-drawer dismissible="false">
      <ui-drawer-trigger><button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Write a post</button></ui-drawer-trigger>
      <ui-drawer-backdrop class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm"></ui-drawer-backdrop>
      <ui-drawer-content class="relative mx-auto flex max-h-[85dvh] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit">
        <div aria-hidden="true" class="mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted"></div>
        <div class="flex flex-col gap-0.5 p-4 text-center md:gap-1.5 md:text-start">
          <ui-drawer-title class="text-base font-medium text-foreground">New post</ui-drawer-title>
          <ui-drawer-description class="text-sm text-muted-foreground">Try to swipe it away, press outside it or press Escape.</ui-drawer-description>
        </div>
        <div class="px-4">
          <textarea aria-label="Post" class="h-24 min-h-16 w-full min-w-0 resize-none rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none">Shipped the new drawer today. It feels just like the system sheet.</textarea>
        </div>
        <div class="min-h-24"><div role="alert" hidden class="mx-4 mt-3 flex items-center justify-between gap-3 rounded-2xl bg-muted p-3">
          <span>
            You have unsaved changes.
            <span class="block text-xs text-muted-foreground" data-reason></span>
          </span>
          <ui-drawer-close><button class="inline-flex cursor-default h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-transparent bg-foreground/10 bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-foreground/10 focus-visible:border-foreground/40 focus-visible:ring-3 focus-visible:ring-foreground/20 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Discard</button></ui-drawer-close>
        </div>
        </div>
        <div class="flex flex-col gap-2 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <ui-drawer-close value="post"><button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Post</button></ui-drawer-close>
        </div>
      </ui-drawer-content>
    </ui-drawer>
  `
  const drawer = root.querySelector("ui-drawer")!
  const alert = root.querySelector<HTMLElement>('[role="alert"]')!
  const reason = root.querySelector("[data-reason]")!
  drawer.addEventListener("dismissattempt", (event) => {
    reason.textContent = `Refused: ${event.detail.reason}`
    alert.hidden = false
  })
  drawer.addEventListener("openchange", (event) => {
    if (event.detail.value) alert.hidden = true
  })
}

export { mount }

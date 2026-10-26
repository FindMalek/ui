import "@ui-sdk/web/drawer"

let count = 0

function mount(root: HTMLElement) {
  const id = `drawer-form-profile-${++count}`
  root.innerHTML = `
    <div class="grid w-full max-w-sm gap-3">
      <div id="${id}" tabindex="-1" class="rounded-2xl border border-border p-3 text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/30">
        <div class="font-medium" data-name>Pedro Duarte</div>
        <div class="text-muted-foreground" data-username>@peduarte</div>
      </div>
      <ui-drawer>
        <ui-drawer-trigger><button class="inline-flex cursor-default h-8 w-fit shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Edit profile</button></ui-drawer-trigger>
        <ui-drawer-backdrop class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm"></ui-drawer-backdrop>
        <ui-drawer-content keep-mounted final-focus="#${id}" class="relative mx-auto flex max-h-[85dvh] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit">
          <div aria-hidden="true" class="mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted"></div>
          <div class="flex flex-col gap-0.5 p-4 text-center md:gap-1.5 md:text-start">
            <ui-drawer-title class="text-base font-medium text-foreground">Edit profile</ui-drawer-title>
            <ui-drawer-description class="text-sm text-muted-foreground">Make changes to your profile here. Save when you're done.</ui-drawer-description>
          </div>
          <form class="grid gap-4 px-4">
            <label class="grid gap-2 text-sm leading-none font-medium">
              Name
              <input name="name" value="Pedro Duarte" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base font-normal outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none" />
            </label>
            <label class="grid gap-2 text-sm leading-none font-medium">
              Username
              <input name="username" value="@peduarte" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base font-normal outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none" />
            </label>
          </form>
          <div class="flex flex-col gap-2 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <ui-drawer-close action value="save"><button class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pending:cursor-progress data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Save changes</button></ui-drawer-close>
            <ui-drawer-close><button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Cancel</button></ui-drawer-close>
          </div>
        </ui-drawer-content>
      </ui-drawer>
    </div>
  `
  const drawer = root.querySelector("ui-drawer")!
  const form = root.querySelector("form")!
  const close = root.querySelector("ui-drawer-close")!
  const button = close.querySelector("button")!
  let tries = 0
  form.addEventListener("submit", (event) => event.preventDefault())

  async function save() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    tries++
    if (tries === 1) throw new Error("The server didn't answer.")
    const data = new FormData(form)
    root.querySelector("[data-name]")!.textContent = String(data.get("name"))
    root.querySelector("[data-username]")!.textContent = String(data.get("username"))
  }

  close.addEventListener("action", (event) => {
    button.textContent = "Saving…"
    const run = save()
    const { waitUntil } = (event as CustomEvent<{ waitUntil: (promise: Promise<unknown>) => void }>).detail
    waitUntil(run)
    run.then(
      () => (button.textContent = "Save changes"),
      () => (button.textContent = "Couldn't save. Try again"),
    )
  })
  drawer.addEventListener("openchange", (event) => {
    if (event.detail.value) button.textContent = "Save changes"
  })
}

export { mount }

import "@ui-sdk/web/popover"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-popover>
      <ui-popover-trigger><button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Edit profile</button></ui-popover-trigger>
      <ui-popover-content class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
        <div class="flex flex-col gap-1">
          <ui-popover-title class="text-base font-medium">Profile</ui-popover-title>
          <ui-popover-description class="text-sm text-muted-foreground">Your name appears on your posts.</ui-popover-description>
        </div>
        <form class="flex flex-col gap-4">
          <label class="grid gap-2 text-sm leading-none font-medium">
            Name
            <input name="name" value="Ada Lovelace" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base font-normal outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm motion-reduce:transition-none" />
          </label>
          <button type="submit" class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 self-end rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Save</button>
        </form>
      </ui-popover-content>
    </ui-popover>
    <output class="mt-3 text-sm text-muted-foreground block min-h-5">Not saved yet</output>
  `
  const popover = root.querySelector("ui-popover")!
  root.querySelector("form")!.addEventListener("submit", (event) => {
    event.preventDefault()
    const name = new FormData(event.target as HTMLFormElement).get("name")
    root.querySelector("output")!.textContent = `Saved ${name}`
    popover.api.close()
  })
}

export { mount }

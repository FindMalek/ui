import "@ui-sdk/web/menubar"
import "@ui-sdk/web/menu"
import { registerShortcut } from "@ui-sdk/web"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-start gap-3">
      <ui-menubar class="flex h-8 w-fit items-center rounded-2xl border border-border p-[3px] data-open:border-ring">
        ${["File", "Edit"]
          .map(
            (label) => `
              <ui-menu>
                <ui-menu-trigger>
                  <button class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted">${label}</button>
                </ui-menu-trigger>
                <ui-menu-content class="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
                  <ui-menu-item value="close" close-on-select="false" class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">Close from the controller</ui-menu-item>
                </ui-menu-content>
              </ui-menu>
            `,
          )
          .join("")}
      </ui-menubar>
      <div class="flex items-center gap-2">
        <button type="button" data-action="focus" class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">Focus menubar</button>
        <output class="text-sm text-muted-foreground block min-h-5">Open: none · Alt+M focuses it too</output>
      </div>
    </div>
  `
  const menubar = root.querySelector("ui-menubar")!
  const output = root.querySelector("output")!
  const off = registerShortcut("alt+m", () => menubar.api.focus())
  root.querySelector("[data-action=focus]")!.addEventListener("click", () => menubar.api.focus())
  menubar.addEventListener("action", () => menubar.api.close(), { capture: true })
  root.querySelectorAll("ui-menu").forEach((menu) => {
    const label = menu.querySelector("button")!.textContent!.trim()
    menu.addEventListener("openchange", (event) => {
      output.textContent = `Open: ${event.detail.value ? label : "none"} · Alt+M focuses it too`
    })
  })
  return off
}

export { mount }

import "@ui-sdk/web/drawer"
import type { UiDrawerElement } from "@ui-sdk/web/drawer"

type SharedDocument = { name: string; size: string; uploading?: boolean }

const documents: SharedDocument[] = [
  { name: "Budget.xlsx", size: "48 KB" },
  { name: "Roadmap.pdf", size: "1.2 MB" },
  { name: "Launch video.mp4", size: "310 MB", uploading: true },
]

let count = 0

function mount(root: HTMLElement) {
  const id = `drawer-share-${++count}`
  root.innerHTML = `
    <div class="grid w-full max-w-md gap-3">
      <ul class="divide-y divide-border rounded-2xl border border-border"></ul>
      <div class="flex items-center gap-3">
        <button type="button" data-code class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">Share the roadmap</button>
        <span role="status" class="text-sm text-muted-foreground block min-h-5"></span>
      </div>
      <ui-drawer id="${id}">
        <ui-drawer-backdrop class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm"></ui-drawer-backdrop>
        <ui-drawer-content class="relative mx-auto flex max-h-[85dvh] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit">
          <div aria-hidden="true" class="mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted"></div>
          <div class="flex flex-col gap-0.5 p-4 text-center md:gap-1.5 md:text-start">
            <ui-drawer-title class="text-base font-medium text-foreground"></ui-drawer-title>
            <ui-drawer-description class="text-sm text-muted-foreground">Anyone with the link can view it.</ui-drawer-description>
          </div>
          <div class="flex flex-col gap-2 p-4 pt-0 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <ui-drawer-close value="copy"><button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Copy link</button></ui-drawer-close>
            <ui-drawer-close value="email"><button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Send by email</button></ui-drawer-close>
          </div>
        </ui-drawer-content>
      </ui-drawer>
    </div>
  `
  const list = root.querySelector("ul")!
  const drawer = root.querySelector<UiDrawerElement<SharedDocument>>("ui-drawer")!
  const title = root.querySelector("ui-drawer-title")!
  const status = root.querySelector('[role="status"]')!
  for (const file of documents) {
    const row = document.createElement("li")
    row.className = "flex items-center justify-between gap-3 px-3 py-2 text-sm"
    row.innerHTML = `<span>${file.name}<span class="block text-xs text-muted-foreground">${file.uploading ? "Uploading…" : file.size}</span></span>`
    const trigger = Object.assign(document.createElement("ui-drawer-trigger"), { payload: file })
    trigger.setAttribute("for", id)
    if (file.uploading) trigger.setAttribute("disabled", "")
    trigger.innerHTML = `<button aria-label="Share ${file.name}" class="inline-flex cursor-default h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Share</button>`
    row.append(trigger)
    list.append(row)
  }
  drawer.addEventListener("openchange", (event) => {
    const { value, returnValue } = event.detail
    if (!value) {
      if (returnValue) status.textContent = `Shared: ${returnValue}`
      return
    }
    title.textContent = `Share ${drawer.api.getPayload()?.name}`
  })
  root.querySelector("[data-code]")!.addEventListener("click", async () => {
    const { reason, returnValue } = await drawer.api.open({ payload: documents[1] })
    status.textContent = returnValue ? `Shared from code: ${returnValue}` : `Closed with ${reason}`
  })
}

export { mount }

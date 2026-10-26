import { createConfirm } from "@ui-sdk/core/alert-dialog"
import "@ui-sdk/web/alert-dialog"
import type { UiAlertDialogElement } from "@ui-sdk/web/alert-dialog"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="grid w-full max-w-xs gap-3">
      <ul aria-label="Projects" class="m-0 min-h-36 list-none p-0"></ul>
      <button
        type="button"
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground transition-colors outline-none select-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50"
      >
        Reset projects
      </button>
      <ui-alert-dialog>
        <ui-alert-dialog-backdrop
          hidden
          class="fixed inset-0 isolate z-50 bg-black/30 supports-backdrop-filter:backdrop-blur-sm"
        ></ui-alert-dialog-backdrop>
        <ui-alert-dialog-content
          hidden
          class="fixed top-1/2 left-1/2 z-50 grid max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-xs -translate-x-1/2 -translate-y-1/2 gap-6 overflow-y-auto rounded-[min(var(--radius-4xl),24px)] bg-popover p-6 text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none sm:max-w-md"
        >
          <div class="grid place-items-center gap-1.5 text-center sm:place-items-start sm:text-start">
            <ui-alert-dialog-title class="m-0 text-lg font-medium"></ui-alert-dialog-title>
            <ui-alert-dialog-description
              class="m-0 text-sm leading-5 text-balance text-muted-foreground md:text-pretty"
            >
              The project and its files will be deleted for everyone.
            </ui-alert-dialog-description>
          </div>
          <div class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <ui-alert-dialog-close>
              <button
                class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground transition-colors outline-none select-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50"
              >
                Cancel
              </button>
            </ui-alert-dialog-close>
            <ui-alert-dialog-close value="confirm">
              <button
                class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground transition-colors outline-none select-none hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50"
              >
                Delete
              </button>
            </ui-alert-dialog-close>
          </div>
        </ui-alert-dialog-content>
      </ui-alert-dialog>
    </div>
  `
  const confirm = createConfirm<{ name: string }>()
  const dialog = root.querySelector<UiAlertDialogElement<{ name: string }>>("ui-alert-dialog")!
  const title = root.querySelector("ui-alert-dialog-title")!
  const list = root.querySelector("ul")!
  const reset = root.querySelector("button")!
  dialog.controller = confirm.controller
  dialog.addEventListener("payloadchange", (event) => {
    title.textContent = `Delete ${event.detail.value?.name}?`
  })

  function resetProjects() {
    list.innerHTML = ["Acme", "Globex", "Initech"]
      .map(
        (name) => `
    <li class="flex h-12 items-center justify-between gap-3 border-b border-border text-sm text-foreground">${name}<button type="button" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground transition-colors outline-none select-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50">Delete</button></li>
  `,
      )
      .join("")
    for (const row of list.querySelectorAll("li")) {
      const button = row.querySelector("button")!
      const name = row.firstChild!.textContent!
      button.addEventListener("click", async () => {
        if (!(await confirm({ name }))) return
        const next = (row.nextElementSibling ?? row.previousElementSibling)?.querySelector("button")
        const target = next ?? reset
        target.focus()
        row.remove()
        if (!list.children.length)
          list.innerHTML = `<li class="flex h-12 items-center text-sm text-muted-foreground">All projects deleted.</li>`
      })
    }
  }
  reset.addEventListener("click", resetProjects)
  resetProjects()
}

export { mount }

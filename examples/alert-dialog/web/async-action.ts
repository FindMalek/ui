import "@ui-sdk/web/alert-dialog"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="grid w-full max-w-xs justify-items-start gap-3">
      <ui-alert-dialog pending-announcement="Deleting project">
        <ui-alert-dialog-trigger>
          <button
            class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground transition-colors outline-none select-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50"
          >
            Delete project
          </button>
        </ui-alert-dialog-trigger>
        <ui-alert-dialog-backdrop
          hidden
          class="fixed inset-0 isolate z-50 bg-black/30 supports-backdrop-filter:backdrop-blur-sm"
        ></ui-alert-dialog-backdrop>
        <ui-alert-dialog-content
          hidden
          class="fixed top-1/2 left-1/2 z-50 grid max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-xs -translate-x-1/2 -translate-y-1/2 gap-6 overflow-y-auto rounded-[min(var(--radius-4xl),24px)] bg-popover p-6 text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none sm:max-w-md"
        >
          <div class="grid place-items-center gap-1.5 text-center sm:place-items-start sm:text-start">
            <ui-alert-dialog-title class="m-0 text-lg font-medium">Delete project?</ui-alert-dialog-title>
            <ui-alert-dialog-description
              class="m-0 text-sm leading-5 text-balance text-muted-foreground md:text-pretty"
            >
              This permanently deletes the project and its files.
            </ui-alert-dialog-description>
          </div>
          <div class="grid gap-2">
            <div class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <ui-alert-dialog-close>
                <button
                  class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground transition-colors outline-none select-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50"
                >
                  Cancel
                </button>
              </ui-alert-dialog-close>
              <ui-alert-dialog-close action value="confirm">
                <button
                  class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground transition-colors outline-none select-none hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 min-w-24 data-pending:cursor-wait"
                >
                  Delete
                </button>
              </ui-alert-dialog-close>
            </div>
            <p role="alert" class="m-0 min-h-12 text-sm leading-6 text-muted-foreground"></p>
          </div>
        </ui-alert-dialog-content>
      </ui-alert-dialog>
      <output aria-live="polite" class="min-h-5 text-sm text-muted-foreground"></output>
    </div>
  `
  let attempts = 0
  const dialog = root.querySelector("ui-alert-dialog")!
  const close = root.querySelector("ui-alert-dialog-close[action]")!
  const button = close.querySelector("button")!
  const message = root.querySelector("p")!
  const output = root.querySelector("output")!

  async function deleteProject() {
    await new Promise((resolve) => setTimeout(resolve, 1200))
    if (attempts++ === 0) throw new Error("Couldn't delete the project. Try again.")
  }

  close.addEventListener("action", (event) => {
    const { waitUntil } = (event as CustomEvent<{ waitUntil: (promise: Promise<unknown>) => void }>).detail
    button.textContent = "Deleting…"
    message.textContent = ""
    const deleting = deleteProject()
    waitUntil(deleting)
    deleting.then(
      () => {
        button.textContent = "Delete"
      },
      (error: Error) => {
        button.textContent = "Try again"
        message.textContent = error.message
      },
    )
  })
  dialog.addEventListener("openchange", (event) => {
    const { value, reason } = event.detail
    if (value) {
      button.textContent = "Delete"
      message.textContent = ""
      output.textContent = ""
    } else if (reason === "action") output.textContent = "Deleted"
  })
}

export { mount }

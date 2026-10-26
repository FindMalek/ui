import { createConfirm } from "@ui-sdk/core/alert-dialog"
import "@ui-sdk/web/alert-dialog"
import type { UiAlertDialogElement } from "@ui-sdk/web/alert-dialog"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="grid w-full max-w-xs justify-items-start gap-3">
      <button
        type="button"
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground transition-colors outline-none select-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50"
      >
        Review two projects
      </button>
      <output aria-live="polite" class="min-h-10 text-sm leading-5 text-muted-foreground"></output>
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
              Archived projects leave the active list. You can restore them later.
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
                Archive
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
  const output = root.querySelector("output")!
  dialog.controller = confirm.controller
  dialog.addEventListener("payloadchange", (event) => {
    title.textContent = `Archive ${event.detail.value?.name}?`
  })
  root.querySelector("button")!.addEventListener("click", async () => {
    output.textContent = ""
    const acme = confirm({ name: "Acme" })
    const globex = confirm({ name: "Globex" })
    const [first, second] = await Promise.all([acme, globex])
    output.textContent = `Acme: ${first ? "confirmed" : "canceled"}. Globex: ${second ? "confirmed" : "canceled"}.`
  })
}

export { mount }

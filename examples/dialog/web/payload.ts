import "@ui-sdk/web/dialog"
import type { UiDialogElement } from "@ui-sdk/web/dialog"

type Invoice = { id: string; customer: string; amount: string; status: "Paid" | "Due" }

const invoices: Invoice[] = [
  { id: "INV-001", customer: "Acme", amount: "$250.00", status: "Paid" },
  { id: "INV-002", customer: "Globex", amount: "$150.00", status: "Due" },
  { id: "INV-003", customer: "Initech", amount: "$350.00", status: "Due" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ul class="m-0 w-full max-w-md list-none divide-y divide-border rounded-2xl border border-border p-0"></ul>
    <button type="button" data-code class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 mt-3">Open from code</button>
    <ui-dialog id="invoice-reminder">
      <ui-dialog-backdrop class="fixed inset-0 bg-black/30 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-sm data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none"></ui-dialog-backdrop>
      <ui-dialog-content class="fixed top-1/2 left-1/2 grid w-full max-w-[calc(100%-2rem)] -translate-1/2 gap-6 rounded-[min(var(--radius-4xl),24px)] border-0 bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 sm:max-w-md motion-reduce:transition-none">
        <div class="flex flex-col gap-1.5">
          <ui-dialog-title class="m-0 text-base leading-none font-medium"></ui-dialog-title>
          <ui-dialog-description class="m-0 text-sm text-muted-foreground"></ui-dialog-description>
        </div>
        <div class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <ui-dialog-close><button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">Cancel</button></ui-dialog-close>
          <ui-dialog-close value="send"><button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-colors hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">Send reminder</button></ui-dialog-close>
        </div>
      </ui-dialog-content>
    </ui-dialog>
    <output class="mt-3 block min-h-5 text-sm text-muted-foreground"></output>
  `
  const list = root.querySelector("ul")!
  const dialog = root.querySelector<UiDialogElement<Invoice>>("ui-dialog")!
  const output = root.querySelector("output")!
  for (const invoice of invoices) {
    const row = document.createElement("li")
    row.className = "flex items-center gap-3 py-2 ps-4 pe-2 text-sm"
    row.innerHTML = `${invoice.customer}<span class="ms-auto text-muted-foreground">${invoice.amount} · ${invoice.status}</span>`
    const trigger = Object.assign(document.createElement("ui-dialog-trigger"), { payload: invoice })
    trigger.setAttribute("for", "invoice-reminder")
    if (invoice.status === "Paid") trigger.setAttribute("disabled", "")
    trigger.innerHTML = `<button aria-label="Remind ${invoice.customer}" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">Remind</button>`
    row.append(trigger)
    list.append(row)
  }
  dialog.addEventListener("openchange", (event) => {
    const { value, returnValue } = event.detail
    if (!value) {
      if (returnValue === "send") output.textContent = "Reminder sent"
      return
    }
    const invoice = dialog.api.getPayload()
    root.querySelector("ui-dialog-title")!.textContent = `Remind ${invoice?.customer}`
    root.querySelector("ui-dialog-description")!.textContent =
      `${invoice?.id} for ${invoice?.amount} is due. We'll email the billing contact.`
  })
  root.querySelector("[data-code]")!.addEventListener("click", async () => {
    const { reason, returnValue } = await dialog.api.open({ payload: invoices[2] })
    output.textContent = returnValue === "send" ? "Reminder sent from code" : `Closed with ${reason}`
  })
}

export { mount }

"use client"

import * as React from "react"
import {
  createDialogController,
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@ui-sdk/react/dialog"

type Invoice = { id: string; customer: string; amount: string; status: "Paid" | "Due" }

const invoices: Invoice[] = [
  { id: "INV-001", customer: "Acme", amount: "$250.00", status: "Paid" },
  { id: "INV-002", customer: "Globex", amount: "$150.00", status: "Due" },
  { id: "INV-003", customer: "Initech", amount: "$350.00", status: "Due" },
]

function Example() {
  const [reminder] = React.useState(() => createDialogController<Invoice, "send">())
  const [status, setStatus] = React.useState("")

  async function remindFromCode() {
    const { reason, returnValue } = await reminder.open({ payload: invoices[2] })
    setStatus(returnValue === "send" ? "Reminder sent from code" : `Closed with ${reason}`)
  }

  return (
    <>
      <ul className="m-0 w-full max-w-md list-none divide-y divide-border rounded-2xl border border-border p-0">
        {invoices.map((invoice) => (
          <li key={invoice.id} className="flex items-center gap-3 py-2 ps-4 pe-2 text-sm">
            {invoice.customer}
            <span className="ms-auto text-muted-foreground">
              {invoice.amount} · {invoice.status}
            </span>
            <DialogTrigger
              controller={reminder}
              payload={invoice}
              disabled={invoice.status === "Paid"}
              aria-label={`Remind ${invoice.customer}`}
              className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              Remind
            </DialogTrigger>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={remindFromCode}
        className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 mt-3"
      >
        Open from code
      </button>
      <Dialog
        controller={reminder}
        onOpenChange={(open, details) => {
          if (!open && details.returnValue === "send") setStatus("Reminder sent")
        }}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-sm data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none" />
        <DialogContent<Invoice> className="fixed top-1/2 left-1/2 grid w-full max-w-[calc(100%-2rem)] -translate-1/2 gap-6 rounded-[min(var(--radius-4xl),24px)] border-0 bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 sm:max-w-md motion-reduce:transition-none">
          {(state) => {
            const invoice = state.payload
            return (
              <>
                <div className="flex flex-col gap-1.5">
                  <DialogTitle className="m-0 text-base leading-none font-medium">
                    Remind {invoice?.customer}
                  </DialogTitle>
                  <DialogDescription className="m-0 text-sm text-muted-foreground">
                    {invoice?.id} for {invoice?.amount} is due. We'll email the billing contact.
                  </DialogDescription>
                </div>
                <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                  <DialogClose className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">
                    Cancel
                  </DialogClose>
                  <DialogClose
                    value="send"
                    className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-colors hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50"
                  >
                    Send reminder
                  </DialogClose>
                </div>
              </>
            )
          }}
        </DialogContent>
      </Dialog>
      <output className="mt-3 block min-h-5 text-sm text-muted-foreground">{status}</output>
    </>
  )
}

export { Example }

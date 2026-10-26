import * as React from "react"
import { definePrimitive, elements } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type CheckoutState = { missing: string | null }

const checkout = definePrimitive({
  name: "checkout",
  state: (): CheckoutState => ({ missing: null }),
  api: (context) => ({
    next() {
      const fields = elements<{ value: string }>(context, "field")
      const empty = fields.find((field) => (field.el as HTMLInputElement).value === "")
      empty?.el.focus()
      context.store.set({ missing: empty ? empty.props.value : null })
    },
  }),
  slots: (slot) => ({
    field: slot<{ value: string }>({
      props: { value: "string" },
      attrs: (_state, part) => ({ name: part.props.value }),
    }),
    next: slot<{}, CheckoutState>({
      state: (state) => ({ missing: state.missing }),
      attrs: () => ({ type: "button" }),
      press: ({ api }) => api.next(),
    }),
  }),
})

const parts = createParts(checkout, { field: "input", next: "button" })

const Checkout = parts.Root

const CheckoutField = parts.Field

const CheckoutNext = parts.Next

const field =
  "h-8 rounded-lg border border-border bg-transparent px-3 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"

function Example() {
  return (
    <Checkout>
      <div className="flex w-72 flex-col gap-2 text-sm">
        <CheckoutField
          value="name"
          aria-label="Name"
          placeholder="Name"
          defaultValue="Ada"
          className={field}
        />
        <CheckoutField value="email" aria-label="Email" placeholder="Email" className={field} />
        <CheckoutField value="address" aria-label="Address" placeholder="Address" className={field} />
        <CheckoutNext className="h-8 rounded-lg bg-foreground px-3 font-medium text-background outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
          {({ missing }) => (missing ? `Fill in ${missing}` : "Find the first empty field")}
        </CheckoutNext>
      </div>
    </Checkout>
  )
}

export { checkout, Checkout, CheckoutField, CheckoutNext, type CheckoutState, Example }

import * as React from "react"
import { createChange, createInlineEdit, definePrimitive } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type Product = { name: string; price: string; sku: string }

type ProductState = { product: Product; editing: string | null }

const order = ["name", "price", "sku"] as const

const product = definePrimitive({
  name: "product",
  state: (): ProductState => ({ product: { name: "Desk lamp", price: "49", sku: "LMP-204" }, editing: null }),
  api: (context) => {
    const { store } = context
    const change = createChange(context)
    const fields = new Map<string, HTMLElement>()
    const edit = createInlineEdit<ProductState>(context, {
      key: "editing",
      value: (id) => store.get().product[id as keyof Product],
      commit: (id, text, details) => {
        if (id === "price" && !Number.isFinite(Number(text))) return false
        return change("product", { ...store.get().product, [id]: text.trim() }, details)
      },
      disabled: (id) => id === "sku",
    })
    return {
      edit,
      bindField(el: HTMLElement, id: string) {
        fields.set(id, el)
        return () => void fields.delete(id)
      },
      inputKeydown(event: KeyboardEvent) {
        const id = store.get().editing
        if (event.key === "Tab" && id && edit.inputKeydown(event)) {
          const next = order[order.indexOf(id as (typeof order)[number]) + (event.shiftKey ? -1 : 1)]
          if (next) fields.get(next)?.focus()
          return
        }
        edit.inputKeydown(event)
      },
    }
  },
  slots: (slot) => ({
    root: slot({}),
    list: slot({ attrs: () => ({ role: "list" }) }),
    field: slot<{ value: string }, { text: string; editing: boolean }>({
      props: { value: "string" },
      state: (state, { key }) => ({
        text: state.product[key as keyof Product],
        editing: state.editing === key,
      }),
      attrs: (_state, { key }) => ({
        role: "listitem",
        tabindex: "0",
        "aria-readonly": key === "sku" ? "true" : undefined,
      }),
      on: {
        keydown: (event, { el, api, key }) => event.target === el && api.edit.keydown(event, key),
        dblclick: (event, { api, key }) => api.edit.dblclick(event, key),
      },
      bind: (el, { api, key }) => api.bindField(el, key),
    }),
    input: slot({
      attrs: () => ({ "aria-label": "Value" }),
      on: {
        keydown: (event, { api }) => api.inputKeydown(event),
        focusout: (event, { api }) => api.edit.end("focus-out", event),
      },
      bind: (el, { api }) => api.edit.bindInput(el as HTMLInputElement),
    }),
    rename: slot({
      attrs: () => ({ type: "button" }),
      press: ({ api }) => api.edit.start("name"),
    }),
  }),
})

const parts = createParts(product, {
  root: "div",
  list: "div",
  field: "div",
  input: "input",
  rename: "button",
})

const ProductDetails = parts.Root

const ProductList = parts.List

const ProductField = parts.Field

const ProductInput = parts.Input

const ProductRename = parts.Rename

const labels: Record<string, string> = { name: "Name", price: "Price", sku: "SKU" }

function Example() {
  return (
    <ProductDetails className="flex w-64 flex-col gap-2">
      <ProductList
        aria-label="Product"
        className="flex flex-col divide-y divide-border rounded-xl border border-border text-sm"
      >
        {order.map((id) => (
          <ProductField
            key={id}
            value={id}
            aria-label={labels[id]}
            className="flex h-10 items-center gap-3 px-3 outline-none focus-visible:ring-3 focus-visible:ring-ring/50 aria-readonly:text-muted-foreground"
          >
            {({ text, editing }) => (
              <>
                <span className="w-10 text-xs text-muted-foreground">{labels[id]}</span>
                {editing ? (
                  <ProductInput className="-mx-1.5 h-7 min-w-0 flex-1 rounded-sm border border-input bg-background px-1.5 outline-none focus:ring-2 focus:ring-ring/50" />
                ) : (
                  <span data-value>{id === "price" ? `$${text}` : text}</span>
                )}
              </>
            )}
          </ProductField>
        ))}
      </ProductList>
      <ProductRename className="self-start rounded-md border border-border px-2 py-1 text-xs">
        Rename
      </ProductRename>
    </ProductDetails>
  )
}

export {
  Example,
  product,
  ProductDetails,
  ProductField,
  ProductInput,
  ProductList,
  ProductRename,
  type Product,
  type ProductState,
}

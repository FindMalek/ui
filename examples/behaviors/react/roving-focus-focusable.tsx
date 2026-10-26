import * as React from "react"
import { createRovingFocus, definePrimitive, selects } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type FoldersState = { focused: string | null; open: boolean }

type FolderProps = { value: string; nested?: boolean }

const folders = definePrimitive({
  name: "folders",
  state: (): FoldersState => ({ focused: null, open: false }),
  api: (context) => ({
    roving: createRovingFocus<FoldersState, FolderProps>(context, {
      slot: "item",
      key: "focused",
      focusable: (item) => !item.props.nested || context.store.get().open,
    }),
    toggle: () => context.store.set({ open: !context.store.get().open }),
  }),
  slots: (slot) => ({
    root: slot({}),
    item: slot<FolderProps>({
      props: { value: "string", nested: "boolean" },
      selects: selects({ focused: ({ key }) => [key, null] }),
      attrs: (state, part) => ({
        type: "button",
        tabindex: part.api.roving.tabIndex(state, part),
        hidden: part.props.nested && !state.open ? "" : undefined,
      }),
      on: { keydown: (event, { el, api }) => api.roving.keydown(event, el!) },
      bind: (el, part) => part.api.roving.bind(el, part),
    }),
    toggle: slot<{ value: string }>({
      props: { value: "string" },
      selects: selects({ focused: ({ key }) => [key, null] }),
      attrs: (state, part) => ({
        type: "button",
        tabindex: part.api.roving.tabIndex(state, part),
        "aria-expanded": String(state.open),
      }),
      press: ({ api }) => api.toggle(),
      on: { keydown: (event, { el, api }) => api.roving.keydown(event, el!) },
      bind: (el, part) => part.api.roving.bind(el, part),
    }),
  }),
})

const parts = createParts(folders, { root: "div", item: "button", toggle: "button" })

const Folders = parts.Root

const FoldersItem = parts.Item

const FoldersToggle = parts.Toggle

const row =
  "rounded-md px-3 py-1.5 text-start text-sm outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"

function Example() {
  return (
    <Folders role="group" aria-label="Folders" className="flex min-h-60 w-40 flex-col gap-0.5">
      <FoldersItem value="Inbox" className={row}>
        Inbox
      </FoldersItem>
      <FoldersItem value="Drafts" className={row}>
        Drafts
      </FoldersItem>
      <FoldersToggle value="Labels" className={`${row} aria-expanded:font-medium`}>
        Labels
      </FoldersToggle>
      {["Work", "Family", "Travel"].map((label) => (
        <FoldersItem key={label} value={label} nested className={`${row} ps-7`}>
          {label}
        </FoldersItem>
      ))}
      <FoldersItem value="Trash" className={row}>
        Trash
      </FoldersItem>
    </Folders>
  )
}

export { Example, folders, Folders, FoldersItem, type FoldersState, FoldersToggle }

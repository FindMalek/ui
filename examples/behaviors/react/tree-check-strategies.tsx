import * as React from "react"
import {
  createTreeCollection,
  definePrimitive,
  toggleTreeChecked,
  treeCheckedStates,
  treeDataNodes,
  type TreeCheckStrategy,
  type TreeItemData,
} from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

const items: TreeItemData[] = [
  {
    value: "photos",
    label: "Photos",
    children: [
      { value: "beach.jpg", label: "beach.jpg" },
      { value: "city.jpg", label: "city.jpg" },
      { value: "locked.jpg", label: "locked.jpg", disabled: true },
    ],
  },
  { value: "notes.txt", label: "notes.txt" },
]

const nodes = treeDataNodes(items)
const tree = createTreeCollection(nodes)
const itemOf = new Map(nodes.map((node) => [node.key, node.item]))

type BackupState = { checked: string[]; strategy: TreeCheckStrategy }

const backup = definePrimitive({
  name: "backup",
  options: { strategy: "string" },
  state: (options: { strategy: TreeCheckStrategy }): BackupState => ({
    checked: [],
    strategy: options.strategy,
  }),
  sync: (options) => ({ strategy: options.strategy }),
  api: (context) => {
    const { store } = context
    return {
      toggle(key: string) {
        const { checked, strategy } = store.get()
        store.set({
          checked: toggleTreeChecked(tree, checked, key, {
            strategy,
            checkable: (node) => !itemOf.get(node)?.disabled,
          }),
        })
      },
    }
  },
  slots: (slot) => ({
    root: slot<{}, { checked: string[] }>({
      state: (state) => ({ checked: state.checked }),
      attrs: () => ({ role: "group" }),
    }),
    item: slot<{ value: string }>({
      props: { value: "string" },
      attrs: (state, { key }) => {
        const checked = treeCheckedStates(tree, state.checked, state.strategy)(key)
        return {
          type: "button",
          role: "checkbox",
          "aria-checked": checked === "indeterminate" ? "mixed" : String(checked),
          "aria-disabled": itemOf.get(key)?.disabled ? "true" : undefined,
          style: `padding-inline-start:${(tree.level(key) - 1) * 20}px`,
        }
      },
      press: ({ api, key }) => api.toggle(key),
    }),
  }),
})

const parts = createParts(backup, { root: "div", item: "button" })

const Backup = parts.Root

const BackupItem = parts.Item

const strategies: TreeCheckStrategy[] = ["leaf", "trunk", "branch", "independent"]

function Example() {
  const [strategy, setStrategy] = React.useState<TreeCheckStrategy>("leaf")
  return (
    <div className="flex w-72 flex-col gap-3 text-sm">
      <div role="radiogroup" aria-label="Strategy" className="flex flex-wrap gap-1">
        {strategies.map((option) => (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={strategy === option}
            onClick={() => setStrategy(option)}
            className="rounded-md border border-border px-2 py-1 text-xs aria-checked:bg-muted"
          >
            {option}
          </button>
        ))}
      </div>
      <Backup strategy={strategy} aria-label="Backup" className="flex flex-col">
        {({ checked }) => (
          <>
            {tree.keys().map((key) => (
              <BackupItem
                key={key}
                value={key}
                aria-label={itemOf.get(key)!.label}
                className="group flex items-center gap-2 rounded-md py-1 pr-2 text-left outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 aria-disabled:text-muted-foreground"
              >
                <span className="grid size-4 place-items-center rounded border border-input text-[10px] group-aria-checked:bg-foreground group-aria-checked:text-background group-aria-[checked=mixed]:bg-foreground/40">
                  <span className="hidden group-aria-checked:inline group-aria-[checked=mixed]:hidden">
                    ✓
                  </span>
                  <span className="hidden group-aria-[checked=mixed]:inline">–</span>
                </span>
                {itemOf.get(key)!.label}
              </BackupItem>
            ))}
            <p data-value className="mt-2 h-16 overflow-auto text-xs text-muted-foreground">
              Value: {checked.length ? checked.join(", ") : "none"}
            </p>
          </>
        )}
      </Backup>
    </div>
  )
}

export { backup, Backup, BackupItem, type BackupState, Example }

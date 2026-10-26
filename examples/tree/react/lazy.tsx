"use client"

import { Tree, TreeGroup, TreeItem, TreeItemIndicator, TreeItemLabel } from "@ui-sdk/react/tree"
import { ChevronRight, LoaderCircle, RotateCw } from "lucide-react"
import * as React from "react"

type Node = { value: string; label: string; branch?: boolean }

const top: Node[] = [
  { value: "users", label: "users", branch: true },
  { value: "orders", label: "orders", branch: true },
  { value: "archive", label: "archive", branch: true },
]

let archiveAsked = false
async function fetchChildren(value: string, signal: AbortSignal) {
  await new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, 800)
    signal.addEventListener("abort", () => (clearTimeout(timer), reject(signal.reason)))
  })
  if (value === "archive" && !archiveAsked) {
    archiveAsked = true
    throw new Error("Network error")
  }
  return Array.from({ length: 3 }, (_, index) => ({
    value: `${value}/${index + 1}`,
    label: `${value.slice(0, -1)}_${index + 1}.json`,
  }))
}

function Items({ items, loaded }: { items: Node[]; loaded: Record<string, Node[]> }) {
  return items.map((item) => (
    <TreeItem key={item.value} value={item.value} branch={item.branch} className="outline-none">
      <TreeItemLabel className="flex h-7 min-w-0 cursor-default items-center gap-1.5 rounded-xl px-2 text-sm leading-5 select-none hover:bg-muted data-disabled:opacity-50 data-selected:bg-accent data-selected:text-accent-foreground [:focus-visible>&]:ring-3 [:focus-visible>&]:ring-ring/30 [:focus-visible>&]:ring-inset data-failed:font-medium">
        {item.branch ? (
          <TreeItemIndicator className="flex size-4 cursor-default shrink-0 items-center justify-center text-muted-foreground">
            {(state) =>
              state.loading ? (
                <LoaderCircle
                  aria-hidden="true"
                  className="pointer-events-none block size-3.5 shrink-0 animate-spin"
                />
              ) : state.failed ? (
                <RotateCw aria-hidden="true" className="pointer-events-none block size-3.5 shrink-0" />
              ) : (
                <ChevronRight
                  aria-hidden="true"
                  className="pointer-events-none block size-4 shrink-0 transition-transform duration-200 [[data-expanded]>&]:rotate-90 rtl:rotate-180 rtl:[[data-expanded]>&]:rotate-90"
                />
              )
            }
          </TreeItemIndicator>
        ) : (
          <span className="size-4 shrink-0" />
        )}
        {item.label}
      </TreeItemLabel>
      {loaded[item.value] && (
        <TreeGroup className="h-(--tree-group-height) overflow-hidden ps-4 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
          <Items items={loaded[item.value]} loaded={loaded} />
        </TreeGroup>
      )}
    </TreeItem>
  ))
}

function Example() {
  const [loaded, setLoaded] = React.useState<Record<string, Node[]>>({})
  return (
    <Tree
      aria-label="Database"
      loadChildren={async (value, { signal }) => {
        const children = await fetchChildren(value, signal)
        setLoaded((loaded) => ({ ...loaded, [value]: children }))
      }}
      announcement={({ type, label }) =>
        ({
          expanded: "Expanded",
          collapsed: "Collapsed",
          loading: `Loading ${label}`,
          "load-failed": `${label} didn't load. Try again.`,
        })[type]
      }
      className="flex h-80 w-72 max-w-full flex-col overflow-y-auto rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground"
    >
      <Items items={top} loaded={loaded} />
    </Tree>
  )
}

export { Example }

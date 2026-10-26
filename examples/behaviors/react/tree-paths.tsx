import * as React from "react"
import { createTreeCollection, treeDataNodes, treeFromPaths } from "@ui-sdk/core"

function Example() {
  const [text, setText] = React.useState("src/index.ts\nsrc/lib/util.ts\nREADME.md\nassets/")
  const items = treeFromPaths(text.split("\n").filter(Boolean))
  const nodes = treeDataNodes(items)
  const tree = createTreeCollection(nodes)
  return (
    <div className="flex w-80 gap-3 text-sm">
      <textarea
        aria-label="Paths"
        value={text}
        onChange={(event) => setText(event.target.value)}
        className="h-36 w-40 resize-none rounded-md border border-input bg-background p-2 font-mono text-xs outline-none focus:ring-2 focus:ring-ring/50"
      />
      <div data-tree className="flex h-36 min-w-0 flex-1 flex-col overflow-auto">
        {nodes.map(({ key, item }) => (
          <span
            key={key}
            className="shrink-0"
            style={{ paddingInlineStart: `${(tree.level(key) - 1) * 14}px` }}
          >
            {item.children ? "📁 " : ""}
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}

export { Example }

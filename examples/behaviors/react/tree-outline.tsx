import * as React from "react"
import { createTreeCollection } from "@ui-sdk/core"

const titles: Record<string, string> = {
  basics: "Basics",
  setup: "Setup",
  hello: "Hello world",
  layout: "Layout",
  grids: "Grids",
  extras: "Extras",
}

const outline = createTreeCollection([
  { key: "basics", parent: null },
  { key: "setup", parent: "basics" },
  { key: "hello", parent: "basics" },
  { key: "layout", parent: null },
  { key: "grids", parent: "layout" },
  { key: "extras", parent: null, branch: true },
])

function Example() {
  return (
    <div className="flex w-72 flex-col gap-1 text-sm">
      {outline.keys().map((key) => {
        const { index, size } = outline.position(key)
        const parent = outline.parent(key)
        return (
          <div
            key={key}
            data-section={key}
            className="flex items-baseline justify-between gap-2 rounded-md px-2 py-1 hover:bg-muted"
            style={{ paddingInlineStart: `${(outline.level(key) - 1) * 16 + 8}px` }}
          >
            <span className={outline.isBranch(key) ? "font-medium" : undefined}>
              {outline.isBranch(key) ? "▸ " : ""}
              {titles[key]}
            </span>
            <span className="text-xs text-muted-foreground tabular-nums">
              Level {outline.level(key)}, {index} of {size}
              {parent ? ` in ${titles[parent]}` : ""}
            </span>
          </div>
        )
      })}
      <p className="mt-2 text-xs text-muted-foreground">
        {outline.size} sections{outline.has("appendix") ? ", with an appendix" : ", no appendix yet"}
      </p>
    </div>
  )
}

export { Example }

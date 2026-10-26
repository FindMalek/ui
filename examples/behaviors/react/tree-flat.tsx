import * as React from "react"
import { visibleTreeRows, type TreeItemData } from "@ui-sdk/core"

const items: TreeItemData[] = [
  {
    value: "start",
    label: "Getting started",
    children: [
      { value: "install", label: "Install", href: "#install" },
      { value: "old-setup", label: "Old setup", disabled: true },
    ],
  },
  { value: "guides", label: "Guides", children: [{ value: "theming", label: "Theming", href: "#theming" }] },
  { value: "faq", label: "FAQ", href: "#faq" },
]

function Example() {
  const [expanded, setExpanded] = React.useState<string[]>(["start"])
  const rows = visibleTreeRows(items, expanded)
  const toggle = (value: string) =>
    setExpanded((current) =>
      current.includes(value) ? current.filter((other) => other !== value) : [...current, value],
    )
  return (
    <div className="flex min-h-44 w-64 flex-col text-sm">
      {rows.map(({ item, level, index, parent }) => {
        const style = { paddingInlineStart: `${(level - 1) * 16 + 8}px` }
        const className =
          "flex justify-between rounded-md py-1 pr-2 text-left hover:bg-muted aria-disabled:text-muted-foreground aria-disabled:line-through"
        const note = (
          <span className="text-xs text-muted-foreground tabular-nums">
            row {index + 1}
            {parent ? `, in ${parent}` : ""}
          </span>
        )
        return item.children ? (
          <button
            key={item.value}
            type="button"
            aria-expanded={expanded.includes(item.value)}
            onClick={() => toggle(item.value)}
            className={`${className} font-medium`}
            style={style}
          >
            {item.label}
            {note}
          </button>
        ) : item.href ? (
          <a key={item.value} href={item.href} className={className} style={style}>
            {item.label}
            {note}
          </a>
        ) : (
          <span key={item.value} aria-disabled={item.disabled} className={className} style={style}>
            {item.label}
            {note}
          </span>
        )
      })}
    </div>
  )
}

export { Example }

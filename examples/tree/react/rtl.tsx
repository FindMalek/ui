import { Tree, TreeGroup, TreeItem, TreeItemIndicator, TreeItemLabel } from "@ui-sdk/react/tree"
import { ChevronLeft } from "lucide-react"

type Node = { value: string; label: string; children?: Node[] }

const folders: Node[] = [
  {
    value: "documents",
    label: "المستندات",
    children: [
      { value: "reports", label: "التقارير" },
      { value: "invoices", label: "الفواتير" },
    ],
  },
  {
    value: "photos",
    label: "الصور",
    children: [
      { value: "trips", label: "الرحلات" },
      { value: "family", label: "العائلة" },
    ],
  },
  { value: "downloads", label: "التنزيلات" },
]

function Items({ items }: { items: Node[] }) {
  return items.map((item) => (
    <TreeItem key={item.value} value={item.value} className="outline-none">
      <TreeItemLabel className="flex h-7 cursor-default items-center gap-1.5 rounded-xl px-2 select-none hover:bg-muted data-selected:bg-accent data-selected:text-accent-foreground [:focus-visible>&]:ring-3 [:focus-visible>&]:ring-ring/30">
        {item.children ? (
          <TreeItemIndicator className="flex size-4 shrink-0 items-center justify-center text-muted-foreground transition-transform duration-200 data-expanded:-rotate-90">
            <ChevronLeft className="size-4" />
          </TreeItemIndicator>
        ) : (
          <span className="size-4 shrink-0" />
        )}
        {item.label}
      </TreeItemLabel>
      {item.children && (
        <TreeGroup className="h-(--tree-group-height) overflow-hidden ps-4 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
          <Items items={item.children} />
        </TreeGroup>
      )}
    </TreeItem>
  ))
}

export function Example() {
  return (
    <div dir="rtl">
      <Tree
        aria-label="الملفات"
        defaultExpanded={["documents"]}
        className="flex w-64 flex-col rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-sm ring-1 ring-foreground/5 dark:ring-foreground/10"
      >
        <Items items={folders} />
      </Tree>
    </div>
  )
}

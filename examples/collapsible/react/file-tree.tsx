import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from "@ui-sdk/react/collapsible"
import { ChevronRight, File, Folder } from "lucide-react"

type TreeNode = { name: string; children?: TreeNode[] }

const fileTree: TreeNode[] = [
  {
    name: "components",
    children: [
      { name: "ui", children: [{ name: "button.tsx" }, { name: "card.tsx" }, { name: "dialog.tsx" }] },
      { name: "header.tsx" },
      { name: "footer.tsx" },
    ],
  },
  { name: "lib", children: [{ name: "utils.ts" }] },
  { name: "hooks", children: [{ name: "use-media-query.ts" }, { name: "use-mobile.ts" }] },
  { name: "types", children: [{ name: "index.d.ts" }] },
  { name: "public", children: [{ name: "favicon.ico" }, { name: "logo.svg" }] },
  { name: "app.tsx" },
  { name: "layout.tsx" },
  { name: "globals.css" },
  { name: "package.json" },
  { name: "tsconfig.json" },
  { name: "README.md" },
  { name: ".gitignore" },
]

function Tree({ nodes, nested }: { nodes: TreeNode[]; nested?: boolean }) {
  return (
    <ul
      className={
        nested ? "ms-3.5 flex flex-col gap-0.5 border-s border-border ps-1.5" : "flex flex-col gap-0.5"
      }
    >
      {nodes.map((node) => (
        <li key={node.name}>
          {node.children ? (
            <Collapsible defaultOpen={node.name === "components"}>
              <CollapsibleTrigger className="group flex h-7 w-full items-center gap-1.5 rounded-xl px-2 text-start cursor-default outline-none select-none not-data-disabled:hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset">
                <ChevronRight className="size-3.5 shrink-0 text-muted-foreground transition-transform duration-200 group-data-open:rotate-90 motion-reduce:transition-none rtl:-scale-x-100" />
                <Folder className="size-4 shrink-0 text-muted-foreground" />
                {node.name}
              </CollapsibleTrigger>
              <CollapsiblePanel className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0 motion-reduce:transition-none">
                <Tree nodes={node.children} nested />
              </CollapsiblePanel>
            </Collapsible>
          ) : (
            <span className="flex h-7 items-center gap-1.5 ps-7 pe-2">
              <File className="size-4 shrink-0 text-muted-foreground" />
              {node.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

function Example() {
  return (
    <div className="w-full max-w-xs rounded-3xl border border-border bg-card p-2 text-sm text-card-foreground">
      <Tree nodes={fileTree} />
    </div>
  )
}

export { Example }

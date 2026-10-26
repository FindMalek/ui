import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from "@ui-sdk/solid/collapsible"
import { For } from "solid-js"

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
      class={nested ? "ms-3.5 flex flex-col gap-0.5 border-s border-border ps-1.5" : "flex flex-col gap-0.5"}
    >
      <For each={nodes}>
        {(node) => (
          <li>
            {node.children ? (
              <Collapsible defaultOpen={node.name === "components"}>
                <CollapsibleTrigger class="group flex h-7 w-full items-center gap-1.5 rounded-xl px-2 text-start cursor-default outline-none select-none not-data-disabled:hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                    class="size-3.5 shrink-0 text-muted-foreground transition-transform duration-200 group-data-open:rotate-90 motion-reduce:transition-none rtl:-scale-x-100"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                    class="size-4 shrink-0 text-muted-foreground"
                  >
                    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                  </svg>
                  {node.name}
                </CollapsibleTrigger>
                <CollapsiblePanel class="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0 motion-reduce:transition-none">
                  <Tree nodes={node.children} nested />
                </CollapsiblePanel>
              </Collapsible>
            ) : (
              <span class="flex h-7 items-center gap-1.5 ps-7 pe-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  class="size-4 shrink-0 text-muted-foreground"
                >
                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                </svg>
                {node.name}
              </span>
            )}
          </li>
        )}
      </For>
    </ul>
  )
}

function Example() {
  return (
    <div class="w-full max-w-xs rounded-3xl border border-border bg-card p-2 text-sm text-card-foreground">
      <Tree nodes={fileTree} />
    </div>
  )
}

export { Example }

import "@ui-sdk/web/collapsible"
import { ChevronRight, File, Folder, createElement } from "lucide"

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

function tree(nodes: TreeNode[], nested = false) {
  let items = ""
  for (const node of nodes) {
    items += node.children
      ? `<li>
          <ui-collapsible${node.name === "components" ? " default-open" : ""}>
            <ui-collapsible-trigger>
              <button class="group flex h-7 w-full items-center gap-1.5 rounded-xl px-2 text-start cursor-default outline-none select-none not-data-disabled:hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset">
                ${createElement(ChevronRight, { class: "size-3.5 shrink-0 text-muted-foreground transition-transform duration-200 group-data-open:rotate-90 motion-reduce:transition-none rtl:-scale-x-100", "aria-hidden": "true" }).outerHTML}
                ${createElement(Folder, { class: "size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
                ${node.name}
              </button>
            </ui-collapsible-trigger>
            <ui-collapsible-panel class="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0 motion-reduce:transition-none">
              ${tree(node.children, true)}
            </ui-collapsible-panel>
          </ui-collapsible>
        </li>`
      : `<li>
          <span class="flex h-7 items-center gap-1.5 ps-7 pe-2">
            ${createElement(File, { class: "size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
            ${node.name}
          </span>
        </li>`
  }
  return `<ul class="${nested ? "ms-3.5 flex flex-col gap-0.5 border-s border-border ps-1.5" : "flex flex-col gap-0.5"}">${items}</ul>`
}

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="w-full max-w-xs rounded-3xl border border-border bg-card p-2 text-sm text-card-foreground">
      ${tree(fileTree)}
    </div>
  `
}

export { mount }

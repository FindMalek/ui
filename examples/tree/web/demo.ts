import "@ui-sdk/web/tree"
import { ChevronRight, createElement, File, Folder, FolderOpen, type IconNode } from "lucide"

type Node = { value: string; label: string; children?: Node[] }

const files: Node[] = [
  {
    value: "app",
    label: "app",
    children: [
      { value: "app/layout.tsx", label: "layout.tsx" },
      { value: "app/page.tsx", label: "page.tsx" },
      {
        value: "app/settings",
        label: "settings",
        children: [{ value: "app/settings/page.tsx", label: "page.tsx" }],
      },
    ],
  },
  {
    value: "components",
    label: "components",
    children: [
      { value: "components/button.tsx", label: "button.tsx" },
      { value: "components/card.tsx", label: "card.tsx" },
    ],
  },
  { value: "package.json", label: "package.json" },
  { value: "README.md", label: "README.md" },
]

const icon = (node: IconNode, className: string) =>
  createElement(node, { class: className, "aria-hidden": "true" }).outerHTML

function items(list: Node[]) {
  let html = ""
  for (const item of list)
    html += `
      <ui-tree-item value="${item.value}" class="outline-none">
        <ui-tree-item-label class="group flex h-7 min-w-0 cursor-default items-center gap-1.5 rounded-xl px-2 text-sm leading-5 select-none hover:bg-muted data-disabled:opacity-50 data-selected:bg-accent data-selected:text-accent-foreground [:focus-visible>&]:ring-3 [:focus-visible>&]:ring-ring/30 [:focus-visible>&]:ring-inset">
          ${
            item.children
              ? `<ui-tree-item-indicator class="flex size-4 cursor-default shrink-0 items-center justify-center text-muted-foreground transition-transform duration-200 data-expanded:rotate-90 rtl:rotate-180 rtl:data-expanded:rotate-90">${icon(ChevronRight, "size-4")}</ui-tree-item-indicator>
                ${icon(Folder, "size-4 shrink-0 text-muted-foreground group-data-expanded:hidden")}
                ${icon(FolderOpen, "hidden size-4 shrink-0 text-muted-foreground group-data-expanded:block")}`
              : `<span class="size-4 shrink-0"></span>
                ${icon(File, "size-4 shrink-0 text-muted-foreground")}`
          }
          <span class="truncate">${item.label}</span>
        </ui-tree-item-label>
        ${
          item.children
            ? `<ui-tree-group class="h-(--tree-group-height) overflow-hidden ps-4 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">${items(item.children)}</ui-tree-group>`
            : ""
        }
      </ui-tree-item>`
  return html
}

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-tree aria-label="Files" default-expanded="app" default-value="app/page.tsx" class="flex h-80 w-72 max-w-full flex-col overflow-y-auto rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground">
      ${items(files)}
    </ui-tree>
  `
}

export { mount }

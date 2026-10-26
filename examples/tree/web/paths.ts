import { treeFromPaths, type TreeItemData } from "@ui-sdk/core/tree"
import "@ui-sdk/web/tree"
import { ChevronRight, createElement, LoaderCircle, type IconNode } from "lucide"

const paths = [
  "src/index.ts",
  "src/lib/format.ts",
  "src/lib/parse.ts",
  "src/routes/home.tsx",
  "src/routes/about.tsx",
  "tests/",
  "package.json",
  "tsconfig.json",
]

const items = treeFromPaths(paths)
const files = new Set(paths.filter((path) => !path.endsWith("/")))

const icon = (node: IconNode, className: string) =>
  createElement(node, { class: className, "aria-hidden": "true" }).outerHTML

function markup(list: TreeItemData[]) {
  let html = ""
  for (const item of list)
    html += `
      <ui-tree-item value="${item.value}" class="outline-none">
        <ui-tree-item-label class="group flex h-7 min-w-0 cursor-default items-center gap-1.5 rounded-xl px-2 text-sm leading-5 select-none hover:bg-muted data-disabled:opacity-50 data-selected:bg-accent data-selected:text-accent-foreground [:focus-visible>&]:ring-3 [:focus-visible>&]:ring-ring/30 [:focus-visible>&]:ring-inset">
          ${
            item.children
              ? `<ui-tree-item-indicator class="flex size-4 cursor-default shrink-0 items-center justify-center text-muted-foreground transition-transform duration-200 data-expanded:rotate-90 rtl:rotate-180 rtl:data-expanded:rotate-90">${icon(ChevronRight, "size-4")}</ui-tree-item-indicator>`
              : `<span class="size-4 shrink-0"></span>`
          }
          <span class="truncate">${item.label}</span>
          ${icon(LoaderCircle, "ms-auto hidden size-3.5 animate-spin text-muted-foreground group-data-pending:block")}
        </ui-tree-item-label>
        ${
          item.children
            ? `<ui-tree-group class="h-(--tree-group-height) overflow-hidden ps-4 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">${markup(item.children)}</ui-tree-group>`
            : ""
        }
      </ui-tree-item>`
  return html
}

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <ui-tree aria-label="Project" default-expanded="src" default-value="src/index.ts" activation="automatic" class="flex h-80 w-full shrink-0 sm:w-56 flex-col overflow-y-auto rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground">
        ${markup(items)}
      </ui-tree>
      <div class="flex min-h-20 min-w-0 flex-1 flex-col gap-1 rounded-2xl border border-border p-3 text-sm leading-5">
        <span class="text-xs leading-4 break-all text-muted-foreground">src/index.ts</span>
        <span>Press Enter to open a file.</span>
      </div>
    </div>
  `
  const tree = root.querySelector("ui-tree")!
  const [selected, opened] = root.querySelectorAll("div > div > span")
  tree.paths = paths
  tree.addEventListener("valuechange", (event) => {
    selected.textContent = (event.detail.value as string | null) ?? "Nothing selected"
  })
  tree.addEventListener("action", (event) => {
    const { value, waitUntil } = event.detail
    if (!files.has(value)) return
    waitUntil(
      new Promise((resolve) => setTimeout(resolve, 600)).then(() => {
        opened.textContent = `Opened ${value}`
      }),
    )
  })
}

export { mount }

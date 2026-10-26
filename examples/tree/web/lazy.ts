import "@ui-sdk/web/tree"
import { ChevronRight, createElement, LoaderCircle, RotateCw, type IconNode } from "lucide"

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

const icon = (node: IconNode, className: string) =>
  createElement(node, { class: className, "aria-hidden": "true" }).outerHTML

const markup = (items: Node[]) =>
  items
    .map(
      (item) => `
        <ui-tree-item value="${item.value}"${item.branch ? " branch" : ""} class="outline-none">
          <ui-tree-item-label class="flex h-7 min-w-0 cursor-default items-center gap-1.5 rounded-xl px-2 text-sm leading-5 select-none hover:bg-muted data-disabled:opacity-50 data-selected:bg-accent data-selected:text-accent-foreground [:focus-visible>&]:ring-3 [:focus-visible>&]:ring-ring/30 [:focus-visible>&]:ring-inset data-failed:font-medium">
            ${
              item.branch
                ? `<ui-tree-item-indicator class="flex size-4 cursor-default shrink-0 items-center justify-center text-muted-foreground">
                    ${icon(LoaderCircle, "hidden size-3.5 animate-spin [[data-loading]>&]:block")}
                    ${icon(RotateCw, "hidden size-3.5 [[data-failed]:not([data-loading])>&]:block")}
                    ${icon(ChevronRight, "size-4 transition-transform duration-200 [[data-expanded]>&]:rotate-90 [[data-failed]>&]:hidden [[data-loading]>&]:hidden")}
                  </ui-tree-item-indicator>`
                : `<span class="size-4 shrink-0"></span>`
            }
            ${item.label}
          </ui-tree-item-label>
        </ui-tree-item>`,
    )
    .join("")

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-tree aria-label="Database" class="flex h-80 w-72 max-w-full flex-col overflow-y-auto rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground">
      ${markup(top)}
    </ui-tree>
  `
  const tree = root.querySelector("ui-tree")!
  tree.loadChildren = async (value, { signal }) => {
    const children = await fetchChildren(value, signal)
    tree
      .querySelector(`ui-tree-item[value="${value}"]`)!
      .insertAdjacentHTML(
        "beforeend",
        `<ui-tree-group class="h-(--tree-group-height) overflow-hidden ps-4 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">${markup(children)}</ui-tree-group>`,
      )
  }
  tree.announcement = ({ type, label }) =>
    ({
      expanded: "Expanded",
      collapsed: "Collapsed",
      loading: `Loading ${label}`,
      "load-failed": `${label} didn't load. Try again.`,
    })[type]
}

export { mount }

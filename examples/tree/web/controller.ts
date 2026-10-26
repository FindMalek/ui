import type { TreeController } from "@ui-sdk/core/tree"
import "@ui-sdk/web/tree"
import { ChevronRight, createElement } from "lucide"

type Node = { value: string; label: string; children?: Node[] }

const sections: Node[] = [
  {
    value: "account",
    label: "Account",
    children: [
      { value: "profile", label: "Profile" },
      {
        value: "security",
        label: "Security",
        children: [
          { value: "password", label: "Password" },
          { value: "two-factor", label: "Two-factor authentication" },
        ],
      },
    ],
  },
  {
    value: "workspace",
    label: "Workspace",
    children: [
      { value: "members", label: "Members" },
      { value: "billing", label: "Billing" },
    ],
  },
]

function markup(list: Node[]) {
  let html = ""
  for (const item of list)
    html += `
      <ui-tree-item value="${item.value}" class="outline-none">
        <ui-tree-item-label class="group flex h-7 min-w-0 cursor-default items-center gap-1.5 rounded-xl px-2 text-sm leading-5 select-none hover:bg-muted data-disabled:opacity-50 data-selected:bg-accent data-selected:text-accent-foreground [:focus-visible>&]:ring-3 [:focus-visible>&]:ring-ring/30 [:focus-visible>&]:ring-inset">
          ${
            item.children
              ? `<ui-tree-item-indicator class="flex size-4 cursor-default shrink-0 items-center justify-center text-muted-foreground transition-transform duration-200 data-expanded:rotate-90 rtl:rotate-180 rtl:data-expanded:rotate-90">${createElement(ChevronRight, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-tree-item-indicator>`
              : `<span class="size-4 shrink-0"></span>`
          }
          ${item.label}
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
    <div class="flex w-72 max-w-full flex-col gap-3">
      <div class="flex flex-wrap gap-2">
        <button type="button" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50">Expand all</button>
        <button type="button" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50">Collapse all</button>
        <button type="button" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50">Find two-factor</button>
      </div>
      <ui-tree aria-label="Settings" keep-mounted class="flex h-80 w-full flex-col overflow-y-auto rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground">
        ${markup(sections)}
      </ui-tree>
      <p class="m-0 block min-h-10 text-sm leading-5 text-muted-foreground">Expanded: none</p>
    </div>
  `
  const tree = root.querySelector("ui-tree")!
  const output = root.querySelector("p")!
  const [expand, collapse, find] = root.querySelectorAll("button")
  expand.addEventListener("click", () => tree.api.expandAll())
  collapse.addEventListener("click", () => tree.api.collapseAll())
  find.addEventListener("click", () => tree.api.reveal("two-factor"))
  tree.addEventListener("expandedchange", (event) => {
    output.textContent = `Expanded: ${event.detail.value.join(", ") || "none"}`
  })
}

export { mount }

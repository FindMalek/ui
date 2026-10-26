import "@ui-sdk/web/tree"
import { ChevronLeft, createElement } from "lucide"

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

function markup(list: Node[]) {
  let html = ""
  for (const item of list)
    html += `
      <ui-tree-item value="${item.value}" class="outline-none">
        <ui-tree-item-label class="flex h-7 cursor-default items-center gap-1.5 rounded-xl px-2 select-none hover:bg-muted data-selected:bg-accent data-selected:text-accent-foreground [:focus-visible>&]:ring-3 [:focus-visible>&]:ring-ring/30">
          ${
            item.children
              ? `<ui-tree-item-indicator class="flex size-4 shrink-0 items-center justify-center text-muted-foreground transition-transform duration-200 data-expanded:-rotate-90">${createElement(ChevronLeft, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-tree-item-indicator>`
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

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div dir="rtl">
      <ui-tree aria-label="الملفات" default-expanded="documents" class="flex w-64 flex-col rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-sm ring-1 ring-foreground/5 dark:ring-foreground/10">
        ${markup(folders)}
      </ui-tree>
    </div>
  `
}

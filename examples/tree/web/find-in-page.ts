import type { TreeItemData } from "@ui-sdk/core/tree"
import "@ui-sdk/web/tree"

const items: TreeItemData[] = [
  {
    value: "planets",
    label: "Planets",
    children: [
      { value: "mercury", label: "Mercury" },
      { value: "venus", label: "Venus" },
      { value: "earth", label: "Earth", children: [{ value: "moon", label: "The Moon" }] },
      {
        value: "mars",
        label: "Mars",
        children: [
          { value: "phobos", label: "Phobos" },
          { value: "deimos", label: "Deimos" },
        ],
      },
    ],
  },
  {
    value: "dwarf-planets",
    label: "Dwarf planets",
    children: [
      { value: "ceres", label: "Ceres" },
      { value: "pluto", label: "Pluto", children: [{ value: "charon", label: "Charon" }] },
    ],
  },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-tree aria-label="Solar system" hidden-until-found class="flex h-80 w-72 max-w-full flex-col overflow-y-auto rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground">
      <template>
        <ui-tree-item class="flex flex-wrap items-center outline-none">
          <ui-tree-item-indicator class="flex size-4 cursor-default shrink-0 items-center justify-center text-muted-foreground transition-transform duration-200 data-expanded:rotate-90 rtl:rotate-180 rtl:data-expanded:rotate-90 before:content-['›']"></ui-tree-item-indicator>
          <ui-tree-item-label class="flex h-7 min-w-0 cursor-default items-center gap-1.5 rounded-xl px-2 text-sm leading-5 select-none hover:bg-muted data-disabled:opacity-50 data-selected:bg-accent data-selected:text-accent-foreground [:focus-visible>&]:ring-3 [:focus-visible>&]:ring-ring/30 [:focus-visible>&]:ring-inset flex-1 not-data-branch:ms-4"></ui-tree-item-label>
          <ui-tree-group class="h-(--tree-group-height) overflow-hidden ps-4 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0 basis-full"></ui-tree-group>
        </ui-tree-item>
      </template>
    </ui-tree>
  `
  const tree = root.querySelector("ui-tree")!
  tree.items = items
}

export { mount }

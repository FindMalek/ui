<script setup lang="ts">
import { ChevronLeft } from "@lucide/vue"
import { Tree, TreeGroup, TreeItem, TreeItemIndicator, TreeItemLabel } from "@ui-sdk/vue/tree"
import { h, type FunctionalComponent } from "vue"

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

const Items: FunctionalComponent<{ items: Node[] }> = ({ items }) =>
  items.map(({ value, label, children }) =>
    h(TreeItem, { key: value, value, class: "outline-none" }, () => [
      h(
        TreeItemLabel,
        {
          class:
            "flex h-7 cursor-default items-center gap-1.5 rounded-xl px-2 select-none hover:bg-muted data-selected:bg-accent data-selected:text-accent-foreground [:focus-visible>&]:ring-3 [:focus-visible>&]:ring-ring/30",
        },
        () => [
          children
            ? h(
                TreeItemIndicator,
                {
                  class:
                    "flex size-4 shrink-0 items-center justify-center text-muted-foreground transition-transform duration-200 data-expanded:-rotate-90",
                },
                () => h(ChevronLeft, { class: "size-4" }),
              )
            : h("span", { class: "size-4 shrink-0" }),
          label,
        ],
      ),
      children &&
        h(
          TreeGroup,
          {
            class:
              "h-(--tree-group-height) overflow-hidden ps-4 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0",
          },
          () => h(Items, { items: children }),
        ),
    ]),
  )
</script>

<template>
  <div dir="rtl">
    <Tree
      aria-label="الملفات"
      :default-expanded="['documents']"
      class="flex w-64 flex-col rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-sm ring-1 ring-foreground/5 dark:ring-foreground/10"
    >
      <Items :items="folders" />
    </Tree>
  </div>
</template>

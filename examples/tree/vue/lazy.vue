<script setup lang="ts">
import type { TreeAnnouncement, TreeItemState } from "@ui-sdk/core/tree"
import { ChevronRight, LoaderCircle, RotateCw } from "@lucide/vue"
import { Tree, TreeGroup, TreeItem, TreeItemIndicator, TreeItemLabel } from "@ui-sdk/vue/tree"
import { h, ref, type FunctionalComponent } from "vue"

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

const Items: FunctionalComponent<{ items: Node[]; loaded: Record<string, Node[]> }> = ({ items, loaded }) =>
  items.map(({ value, label, branch }) =>
    h(TreeItem, { key: value, value, branch, class: "outline-none" }, () => [
      h(
        TreeItemLabel,
        {
          class:
            "flex h-7 min-w-0 cursor-default items-center gap-1.5 rounded-xl px-2 text-sm leading-5 select-none hover:bg-muted data-disabled:opacity-50 data-selected:bg-accent data-selected:text-accent-foreground [:focus-visible>&]:ring-3 [:focus-visible>&]:ring-ring/30 [:focus-visible>&]:ring-inset data-failed:font-medium",
        },
        () => [
          branch
            ? h(
                TreeItemIndicator,
                {
                  class:
                    "flex size-4 cursor-default shrink-0 items-center justify-center text-muted-foreground",
                },
                {
                  default: ({ state }: { state: TreeItemState }) =>
                    state.loading
                      ? h(LoaderCircle, { class: "pointer-events-none block size-3.5 shrink-0 animate-spin" })
                      : state.failed
                        ? h(RotateCw, { class: "pointer-events-none block size-3.5 shrink-0" })
                        : h(ChevronRight, {
                            class:
                              "pointer-events-none block size-4 shrink-0 transition-transform duration-200 [[data-expanded]>&]:rotate-90 rtl:rotate-180 rtl:[[data-expanded]>&]:rotate-90",
                          }),
                },
              )
            : h("span", { class: "size-4 shrink-0" }),
          label,
        ],
      ),
      loaded[value] &&
        h(
          TreeGroup,
          {
            class:
              "h-(--tree-group-height) overflow-hidden ps-4 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0",
          },
          () => h(Items, { items: loaded[value], loaded }),
        ),
    ]),
  )

const loaded = ref<Record<string, Node[]>>({})

async function loadChildren(value: string, { signal }: { signal: AbortSignal }) {
  const children = await fetchChildren(value, signal)
  loaded.value = { ...loaded.value, [value]: children }
}

function announcement({ type, label }: TreeAnnouncement) {
  return {
    expanded: "Expanded",
    collapsed: "Collapsed",
    loading: `Loading ${label}`,
    "load-failed": `${label} didn't load. Try again.`,
  }[type]
}
</script>

<template>
  <Tree
    aria-label="Database"
    :load-children="loadChildren"
    :announcement="announcement"
    class="flex h-80 w-72 max-w-full flex-col overflow-y-auto rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground"
  >
    <Items :items="top" :loaded="loaded" />
  </Tree>
</template>

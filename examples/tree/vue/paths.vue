<script setup lang="ts">
import type { TreeItemData, TreeItemState } from "@ui-sdk/core/tree"
import { ChevronRight, LoaderCircle } from "@lucide/vue"
import { Tree, TreeGroup, TreeItem, TreeItemIndicator, TreeItemLabel, treeFromPaths } from "@ui-sdk/vue/tree"
import { h, ref, type FunctionalComponent } from "vue"

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

const Items: FunctionalComponent<{ items: TreeItemData[] }> = ({ items }) =>
  items.map(({ value, label, children }) =>
    h(TreeItem, { key: value, value, class: "outline-none" }, () => [
      h(
        TreeItemLabel,
        {
          class:
            "group flex h-7 min-w-0 cursor-default items-center gap-1.5 rounded-xl px-2 text-sm leading-5 select-none hover:bg-muted data-disabled:opacity-50 data-selected:bg-accent data-selected:text-accent-foreground [:focus-visible>&]:ring-3 [:focus-visible>&]:ring-ring/30 [:focus-visible>&]:ring-inset",
        },
        {
          default: ({ state }: { state: TreeItemState }) => [
            children
              ? h(
                  TreeItemIndicator,
                  {
                    class:
                      "flex size-4 cursor-default shrink-0 items-center justify-center text-muted-foreground transition-transform duration-200 data-expanded:rotate-90 rtl:rotate-180 rtl:data-expanded:rotate-90",
                  },
                  () => h(ChevronRight, { class: "pointer-events-none block size-4 shrink-0" }),
                )
              : h("span", { class: "size-4 shrink-0" }),
            h("span", { class: "truncate" }, label),
            state.pending &&
              h(LoaderCircle, {
                class:
                  "pointer-events-none ms-auto block size-3.5 shrink-0 animate-spin text-muted-foreground",
              }),
          ],
        },
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

const selected = ref<string | null>("src/index.ts")
const opened = ref<string | null>(null)

async function open(value: string) {
  if (!files.has(value)) return
  await new Promise((resolve) => setTimeout(resolve, 600))
  opened.value = value
}
</script>

<template>
  <div class="flex w-full max-w-md flex-col gap-3 sm:flex-row">
    <Tree
      v-model:value="selected"
      aria-label="Project"
      :paths="paths"
      :default-expanded="['src']"
      activation="automatic"
      :on-action="open"
      class="flex h-80 w-full shrink-0 sm:w-56 flex-col overflow-y-auto rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground"
    >
      <Items :items="items" />
    </Tree>
    <div
      class="flex min-h-20 min-w-0 flex-1 flex-col gap-1 rounded-2xl border border-border p-3 text-sm leading-5"
    >
      <span class="text-xs leading-4 break-all text-muted-foreground">{{
        selected ?? "Nothing selected"
      }}</span>
      <span>{{ opened ? `Opened ${opened}` : "Press Enter to open a file." }}</span>
    </div>
  </div>
</template>

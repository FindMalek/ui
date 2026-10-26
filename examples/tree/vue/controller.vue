<script setup lang="ts">
import { ChevronRight } from "@lucide/vue"
import {
  createTreeController,
  Tree,
  TreeGroup,
  TreeItem,
  TreeItemIndicator,
  TreeItemLabel,
} from "@ui-sdk/vue/tree"
import { h, ref, type FunctionalComponent } from "vue"

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

const settings = createTreeController()

const Items: FunctionalComponent<{ items: Node[] }> = ({ items }) =>
  items.map(({ value, label, children }) =>
    h(TreeItem, { key: value, value, class: "outline-none" }, () => [
      h(
        TreeItemLabel,
        {
          class:
            "group flex h-7 min-w-0 cursor-default items-center gap-1.5 rounded-xl px-2 text-sm leading-5 select-none hover:bg-muted data-disabled:opacity-50 data-selected:bg-accent data-selected:text-accent-foreground [:focus-visible>&]:ring-3 [:focus-visible>&]:ring-ring/30 [:focus-visible>&]:ring-inset",
        },
        () => [
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

const expanded = ref<string[]>([])
</script>

<template>
  <div class="flex w-72 max-w-full flex-col gap-3">
    <div class="flex flex-wrap gap-2">
      <button
        type="button"
        class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
        @click="settings.expandAll()"
      >
        Expand all
      </button>
      <button
        type="button"
        class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
        @click="settings.collapseAll()"
      >
        Collapse all
      </button>
      <button
        type="button"
        class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
        @click="settings.reveal('two-factor')"
      >
        Find two-factor
      </button>
    </div>
    <Tree
      v-model:expanded="expanded"
      aria-label="Settings"
      :controller="settings"
      keep-mounted
      class="flex h-80 w-full flex-col overflow-y-auto rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground"
    >
      <Items :items="sections" />
    </Tree>
    <p class="m-0 block min-h-10 text-sm leading-5 text-muted-foreground">
      Expanded: {{ expanded.join(", ") || "none" }}
    </p>
  </div>
</template>

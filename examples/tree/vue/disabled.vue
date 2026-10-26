<script setup lang="ts">
import { Switch, SwitchThumb } from "@ui-sdk/vue/switch"
import {
  Tree,
  TreeGroup,
  TreeItem,
  TreeItemIndicator,
  TreeItemLabel,
  type TreeItemData,
} from "@ui-sdk/vue/tree"
import { h, ref, type FunctionalComponent } from "vue"

const items: TreeItemData[] = [
  {
    value: "plans",
    label: "Plans",
    children: [
      { value: "free", label: "Free" },
      { value: "pro", label: "Pro" },
      { value: "enterprise", label: "Enterprise", disabled: true },
    ],
  },
  {
    value: "legacy",
    label: "Legacy plans",
    disabled: true,
    children: [{ value: "starter", label: "Starter" }],
  },
  { value: "custom", label: "Custom" },
]

const Items: FunctionalComponent<{ items: TreeItemData[] }> = ({ items }) =>
  items.map(({ value, label, disabled, children }) =>
    h(TreeItem, { key: value, value, disabled, class: "flex flex-wrap items-center outline-none" }, () => [
      children &&
        h(TreeItemIndicator, {
          class:
            "flex size-4 cursor-default shrink-0 items-center justify-center text-muted-foreground transition-transform duration-200 data-expanded:rotate-90 rtl:rotate-180 rtl:data-expanded:rotate-90 before:content-['›'] data-disabled:opacity-50",
        }),
      h(
        TreeItemLabel,
        {
          class:
            "flex h-7 min-w-0 cursor-default items-center gap-1.5 rounded-xl px-2 text-sm leading-5 select-none hover:bg-muted data-disabled:opacity-50 data-selected:bg-accent data-selected:text-accent-foreground [:focus-visible>&]:ring-3 [:focus-visible>&]:ring-ring/30 [:focus-visible>&]:ring-inset flex-1 not-data-branch:ms-4 data-disabled:hover:bg-transparent",
        },
        () => label,
      ),
      children &&
        h(
          TreeGroup,
          {
            class:
              "h-(--tree-group-height) overflow-hidden ps-4 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0 basis-full",
          },
          () => h(Items, { items: children }),
        ),
    ]),
  )

const focusable = ref(true)
</script>

<template>
  <div class="flex w-72 max-w-full flex-col gap-3">
    <Tree
      aria-label="Plans"
      :items="items"
      :default-expanded="['plans']"
      :focusable-when-disabled="focusable"
      class="flex h-80 w-full flex-col overflow-y-auto rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground"
    >
      <Items :items="items" />
    </Tree>
    <label class="flex items-center gap-2 text-sm leading-5 font-medium">
      <Switch
        v-model:checked="focusable"
        class="inline-flex h-5 w-8 cursor-default shrink-0 items-center rounded-full border-2 border-transparent bg-input/90 p-0 outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary"
      >
        <SwitchThumb
          class="pointer-events-none block size-4 rounded-full bg-foreground shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] data-checked:bg-primary-foreground rtl:data-checked:-translate-x-[calc(100%-4px)]"
        />
      </Switch>
      Focusable when disabled
    </label>
  </div>
</template>

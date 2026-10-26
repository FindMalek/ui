<script setup lang="ts">
import { Check, ChevronRight } from "@lucide/vue"
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuItem,
  MenuItemIndicator,
  MenuSeparator,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
  type MenuData,
  type MenuDataItem,
} from "@ui-sdk/vue/menu"
import { Menubar } from "@ui-sdk/vue/menubar"
import { h, ref, type FunctionalComponent } from "vue"

const file: MenuData = [
  { value: "new", label: "New File", shortcut: "mod+alt+n" },
  { value: "open", label: "Open…" },
  { type: "separator" },
  { type: "submenu", label: "Share", items: [{ value: "email", label: "Email link" }] },
]
const view: MenuData = [
  { type: "checkbox", value: "minimap", label: "Minimap", defaultChecked: true },
  { type: "checkbox", value: "wrap", label: "Word Wrap" },
]

const fileContent =
  "min-w-48 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 **:data-[slot=menu-shortcut]:ms-auto **:data-[slot=menu-shortcut]:text-xs **:data-[slot=menu-shortcut]:tracking-widest **:data-[slot=menu-shortcut]:text-muted-foreground data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
const fileItem =
  "flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
const viewContent =
  "min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
const viewItem =
  "relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"

const MenuEntries: FunctionalComponent<{ items: MenuData; itemClass: string; contentClass: string }> = ({
  items,
  itemClass,
  contentClass,
}) =>
  items.map((entry, index) => {
    const item: MenuDataItem = typeof entry === "string" ? { value: entry, label: entry } : entry
    switch (item.type) {
      case undefined:
      case "item":
        return h(
          MenuItem,
          { key: item.value, value: item.value, shortcut: item.shortcut, class: itemClass },
          () => item.label,
        )
      case "separator":
        return h(MenuSeparator, { key: `separator-${index}`, class: "-mx-1 my-1 h-px bg-border/50" })
      case "checkbox":
        return h(
          MenuCheckboxItem,
          { key: item.value, value: item.value, defaultChecked: item.defaultChecked, class: itemClass },
          () => [
            h(
              MenuItemIndicator,
              { class: "pointer-events-none absolute start-1.5 flex size-4 items-center justify-center" },
              () => h(Check, { class: "size-4" }),
            ),
            item.label,
          ],
        )
      case "submenu":
        return h(MenuSub, { key: `submenu-${index}` }, () => [
          h(MenuSubTrigger, { class: itemClass }, () => [
            item.label,
            h(ChevronRight, { class: "size-4 ms-auto" }),
          ]),
          h(MenuSubContent, { class: contentClass }, () =>
            h(MenuEntries, { items: item.items, itemClass, contentClass }),
          ),
        ])
    }
  })

const last = ref("nothing yet")
</script>

<template>
  <div class="flex flex-col items-start gap-3">
    <Menubar class="flex h-8 w-fit items-center rounded-2xl border border-border p-[3px]">
      <Menu :items="file" @action="(value: string) => (last = value)">
        <MenuTrigger
          class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted"
          >File</MenuTrigger
        >
        <MenuContent :class="fileContent">
          <MenuEntries :items="file" :item-class="fileItem" :content-class="fileContent" />
        </MenuContent>
      </Menu>
      <Menu
        :items="view"
        @checked-change="(checked, details) => (last = `${details.value} ${checked ? 'on' : 'off'}`)"
      >
        <MenuTrigger
          class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted"
          >View</MenuTrigger
        >
        <MenuContent :class="viewContent">
          <MenuEntries :items="view" :item-class="viewItem" :content-class="viewContent" />
        </MenuContent>
      </Menu>
    </Menubar>
    <output class="text-sm text-muted-foreground block min-h-5">Last: {{ last }}</output>
  </div>
</template>

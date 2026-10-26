<script lang="ts">
  import { ChevronLeft } from "@lucide/svelte"
  import { Tree, TreeGroup, TreeItem, TreeItemIndicator, TreeItemLabel } from "@ui-sdk/svelte/tree"

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

</script>

{#snippet items(nodes: Node[])}
  {#each nodes as item (item.value)}
    <TreeItem value={item.value} branch={item.children !== undefined} class="outline-none">
      <TreeItemLabel
        class="flex h-7 cursor-default items-center gap-1.5 rounded-xl px-2 select-none hover:bg-muted data-selected:bg-accent data-selected:text-accent-foreground [:focus-visible>&]:ring-3 [:focus-visible>&]:ring-ring/30"
      >
        {#if item.children}
          <TreeItemIndicator
            class="flex size-4 shrink-0 items-center justify-center text-muted-foreground transition-transform duration-200 data-expanded:-rotate-90"
          >
            <ChevronLeft class="size-4" />
          </TreeItemIndicator>
        {:else}
          <span class="size-4 shrink-0"></span>
        {/if}
        {item.label}
      </TreeItemLabel>
      {#if item.children}
        <TreeGroup
          class="h-(--tree-group-height) overflow-hidden ps-4 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0"
        >
          {@render items(item.children)}
        </TreeGroup>
      {/if}
    </TreeItem>
  {/each}
{/snippet}

<div dir="rtl">
  <Tree
    aria-label="الملفات"
    defaultExpanded={["documents"]}
    class="flex w-64 flex-col rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-sm ring-1 ring-foreground/5 dark:ring-foreground/10"
  >
    {@render items(folders)}
  </Tree>
</div>

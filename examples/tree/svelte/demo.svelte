<script lang="ts">
  import { ChevronRight, File, Folder, FolderOpen } from "@lucide/svelte"
  import { Tree, TreeGroup, TreeItem, TreeItemIndicator, TreeItemLabel } from "@ui-sdk/svelte/tree"

  type Node = { value: string; label: string; children?: Node[] }

  const files: Node[] = [
    {
      value: "app",
      label: "app",
      children: [
        { value: "app/layout.tsx", label: "layout.tsx" },
        { value: "app/page.tsx", label: "page.tsx" },
        {
          value: "app/settings",
          label: "settings",
          children: [{ value: "app/settings/page.tsx", label: "page.tsx" }],
        },
      ],
    },
    {
      value: "components",
      label: "components",
      children: [
        { value: "components/button.tsx", label: "button.tsx" },
        { value: "components/card.tsx", label: "card.tsx" },
      ],
    },
    { value: "package.json", label: "package.json" },
    { value: "README.md", label: "README.md" },
  ]
</script>

{#snippet items(nodes: Node[])}
  {#each nodes as item (item.value)}
    <TreeItem value={item.value} branch={item.children !== undefined} class="outline-none">
      <TreeItemLabel
        class="group flex h-7 min-w-0 cursor-default items-center gap-1.5 rounded-xl px-2 text-sm leading-5 select-none hover:bg-muted data-disabled:opacity-50 data-selected:bg-accent data-selected:text-accent-foreground [:focus-visible>&]:ring-3 [:focus-visible>&]:ring-ring/30 [:focus-visible>&]:ring-inset"
      >
        {#if item.children}
          <TreeItemIndicator
            class="flex size-4 cursor-default shrink-0 items-center justify-center text-muted-foreground transition-transform duration-200 data-expanded:rotate-90 rtl:rotate-180 rtl:data-expanded:rotate-90"
          >
            <ChevronRight aria-hidden="true" class="pointer-events-none block size-4 shrink-0" />
          </TreeItemIndicator>
          <Folder aria-hidden="true" class="pointer-events-none block size-4 shrink-0 text-muted-foreground group-data-expanded:hidden" />
          <FolderOpen aria-hidden="true" class="pointer-events-none hidden size-4 shrink-0 text-muted-foreground group-data-expanded:block" />
        {:else}
          <span class="size-4 shrink-0"></span>
          <File aria-hidden="true" class="pointer-events-none block size-4 shrink-0 text-muted-foreground" />
        {/if}
        <span class="truncate">{item.label}</span>
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

<Tree
  aria-label="Files"
  defaultExpanded={["app"]}
  defaultValue="app/page.tsx"
  class="flex h-80 w-72 max-w-full flex-col overflow-y-auto rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground"
>
  {@render items(files)}
</Tree>

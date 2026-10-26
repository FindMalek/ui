<script lang="ts">
  import { ChevronRight, LoaderCircle } from "@lucide/svelte"
  import {
    Tree,
    TreeGroup,
    TreeItem,
    TreeItemIndicator,
    TreeItemLabel,
    treeFromPaths,
    type TreeItemData,
  } from "@ui-sdk/svelte/tree"

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

  let selected: string | null = $state("src/index.ts")
  let opened: string | null = $state(null)

  async function onAction(value: string) {
    if (!files.has(value)) return
    await new Promise((resolve) => setTimeout(resolve, 600))
    opened = value
  }
</script>

{#snippet treeItems(nodes: TreeItemData[])}
  {#each nodes as item (item.value)}
    <TreeItem value={item.value} branch={item.children !== undefined} class="outline-none">
      <TreeItemLabel
        class="group flex h-7 min-w-0 cursor-default items-center gap-1.5 rounded-xl px-2 text-sm leading-5 select-none hover:bg-muted data-disabled:opacity-50 data-selected:bg-accent data-selected:text-accent-foreground [:focus-visible>&]:ring-3 [:focus-visible>&]:ring-ring/30 [:focus-visible>&]:ring-inset"
      >
        {#snippet children(state)}
          {#if item.children}
            <TreeItemIndicator
              class="flex size-4 cursor-default shrink-0 items-center justify-center text-muted-foreground transition-transform duration-200 data-expanded:rotate-90 rtl:rotate-180 rtl:data-expanded:rotate-90"
            >
              <ChevronRight aria-hidden="true" class="pointer-events-none block size-4 shrink-0" />
            </TreeItemIndicator>
          {:else}
            <span class="size-4 shrink-0"></span>
          {/if}
          <span class="truncate">{item.label}</span>
          {#if state.pending}
            <LoaderCircle aria-hidden="true" class="pointer-events-none ms-auto block size-3.5 shrink-0 animate-spin text-muted-foreground" />
          {/if}
        {/snippet}
      </TreeItemLabel>
      {#if item.children}
        <TreeGroup
          class="h-(--tree-group-height) overflow-hidden ps-4 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0"
        >
          {@render treeItems(item.children)}
        </TreeGroup>
      {/if}
    </TreeItem>
  {/each}
{/snippet}

<div class="flex w-full max-w-md flex-col gap-3 sm:flex-row">
  <Tree
    aria-label="Project"
    {paths}
    defaultExpanded={["src"]}
    bind:value={selected}
    activation="automatic"
    {onAction}
    class="flex h-80 w-full shrink-0 sm:w-56 flex-col overflow-y-auto rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground"
  >
    {@render treeItems(items)}
  </Tree>
  <div class="flex min-h-20 min-w-0 flex-1 flex-col gap-1 rounded-2xl border border-border p-3 text-sm leading-5">
    <span class="text-xs leading-4 break-all text-muted-foreground">{selected ?? "Nothing selected"}</span>
    <span>{opened ? `Opened ${opened}` : "Press Enter to open a file."}</span>
  </div>
</div>

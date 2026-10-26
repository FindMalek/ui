<script lang="ts">
  import { ChevronRight, File, Folder } from "@lucide/svelte"
  import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from "@ui-sdk/svelte/collapsible"
  import Self from "./file-tree.svelte"

  type TreeNode = { name: string; children?: TreeNode[] }

  let { nodes, nested }: { nodes?: TreeNode[]; nested?: boolean } = $props()

  const fileTree: TreeNode[] = [
    {
      name: "components",
      children: [
        { name: "ui", children: [{ name: "button.tsx" }, { name: "card.tsx" }, { name: "dialog.tsx" }] },
        { name: "header.tsx" },
        { name: "footer.tsx" },
      ],
    },
    { name: "lib", children: [{ name: "utils.ts" }] },
    { name: "hooks", children: [{ name: "use-media-query.ts" }, { name: "use-mobile.ts" }] },
    { name: "types", children: [{ name: "index.d.ts" }] },
    { name: "public", children: [{ name: "favicon.ico" }, { name: "logo.svg" }] },
    { name: "app.tsx" },
    { name: "layout.tsx" },
    { name: "globals.css" },
    { name: "package.json" },
    { name: "tsconfig.json" },
    { name: "README.md" },
    { name: ".gitignore" },
  ]
</script>

{#if !nodes}
  <div
    class="w-full max-w-xs rounded-3xl border border-border bg-card p-2 text-sm text-card-foreground"
  >
    <Self nodes={fileTree} />
  </div>
{:else}
  <ul
    class={nested ? "ms-3.5 flex flex-col gap-0.5 border-s border-border ps-1.5" : "flex flex-col gap-0.5"}
  >
    {#each nodes as node (node.name)}
      <li>
        {#if node.children}
          <Collapsible defaultOpen={node.name === "components"}>
            <CollapsibleTrigger
              class="group flex h-7 w-full items-center gap-1.5 rounded-xl px-2 text-start cursor-default outline-none select-none not-data-disabled:hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset"
            >
              <ChevronRight
                class="size-3.5 shrink-0 text-muted-foreground transition-transform duration-200 group-data-open:rotate-90 motion-reduce:transition-none rtl:-scale-x-100"
              />
              <Folder class="size-4 shrink-0 text-muted-foreground" />
              {node.name}
            </CollapsibleTrigger>
            <CollapsiblePanel
              class="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0 motion-reduce:transition-none"
            >
              <Self
                nodes={node.children}
                nested
              />
            </CollapsiblePanel>
          </Collapsible>
        {:else}
          <span class="flex h-7 items-center gap-1.5 ps-7 pe-2">
            <File class="size-4 shrink-0 text-muted-foreground" />
            {node.name}
          </span>
        {/if}
      </li>
    {/each}
  </ul>
{/if}

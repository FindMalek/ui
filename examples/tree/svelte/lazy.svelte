<script lang="ts">
  import { ChevronRight, LoaderCircle, RotateCw } from "@lucide/svelte"
  import {
    Tree,
    TreeGroup,
    TreeItem,
    TreeItemIndicator,
    TreeItemLabel,
    type TreeAnnouncement,
  } from "@ui-sdk/svelte/tree"

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

  let loaded: Record<string, Node[]> = $state({})

  async function loadChildren(value: string, { signal }: { signal: AbortSignal }) {
    loaded[value] = await fetchChildren(value, signal)
  }

  const announcement = ({ type, label }: TreeAnnouncement) =>
    ({
      expanded: "Expanded",
      collapsed: "Collapsed",
      loading: `Loading ${label}`,
      "load-failed": `${label} didn't load. Try again.`,
    })[type]
</script>

{#snippet items(nodes: Node[])}
  {#each nodes as item (item.value)}
    <TreeItem value={item.value} branch={item.branch} class="outline-none">
      <TreeItemLabel
        class="flex h-7 min-w-0 cursor-default items-center gap-1.5 rounded-xl px-2 text-sm leading-5 select-none hover:bg-muted data-disabled:opacity-50 data-selected:bg-accent data-selected:text-accent-foreground [:focus-visible>&]:ring-3 [:focus-visible>&]:ring-ring/30 [:focus-visible>&]:ring-inset data-failed:font-medium"
      >
        {#if item.branch}
          <TreeItemIndicator class="flex size-4 cursor-default shrink-0 items-center justify-center text-muted-foreground">
            {#snippet children(state)}
              {#if state.loading}
                <LoaderCircle aria-hidden="true" class="pointer-events-none block size-3.5 shrink-0 animate-spin" />
              {:else if state.failed}
                <RotateCw aria-hidden="true" class="pointer-events-none block size-3.5 shrink-0" />
              {:else}
                <ChevronRight aria-hidden="true" class="pointer-events-none block size-4 shrink-0 transition-transform duration-200 [[data-expanded]>&]:rotate-90 rtl:rotate-180 rtl:[[data-expanded]>&]:rotate-90" />
              {/if}
            {/snippet}
          </TreeItemIndicator>
        {:else}
          <span class="size-4 shrink-0"></span>
        {/if}
        {item.label}
      </TreeItemLabel>
      {#if loaded[item.value]}
        <TreeGroup
          class="h-(--tree-group-height) overflow-hidden ps-4 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0"
        >
          {@render items(loaded[item.value])}
        </TreeGroup>
      {/if}
    </TreeItem>
  {/each}
{/snippet}

<Tree
  aria-label="Database"
  {loadChildren}
  {announcement}
  class="flex h-80 w-72 max-w-full flex-col overflow-y-auto rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground"
>
  {@render items(top)}
</Tree>

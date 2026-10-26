<script lang="ts">
  import { Toolbar, ToolbarButton } from "@ui-sdk/svelte"
  import { perfItems, perfSize } from "tests/fixtures/perf.ts"

  // A toolbar with many buttons for the counts specs.
  const items = perfItems(perfSize())
</script>

<div class="fixture">
  <button>Before</button>
  <Toolbar class="toolbar" aria-label="Formatting" style="flex-wrap: wrap">
    {#each items as item (item.value)}
      <ToolbarButton>{item.label}</ToolbarButton>
    {/each}
  </Toolbar>
  <button>After</button>
</div>

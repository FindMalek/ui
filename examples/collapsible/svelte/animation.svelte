<script lang="ts">
  import { ChevronDown } from "@lucide/svelte"
  import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from "@ui-sdk/svelte/collapsible"

  const notes = [
    "Search now matches file contents, not only names.",
    "Shared links remember the folder they were opened from.",
    "Uploads resume after the connection drops.",
  ]

  let settled = $state("")
</script>

<div class="w-full max-w-sm text-sm">
  <Collapsible
    class="rounded-3xl border border-border bg-card p-2 text-card-foreground"
    onOpenChangeComplete={(open) => (settled = open ? "opening" : "closing")}
  >
    <CollapsibleTrigger
      class="group flex h-8 w-full items-center justify-between gap-1.5 rounded-2xl border border-transparent px-3 text-start font-medium cursor-default outline-none select-none transition-[color,background-color,box-shadow] motion-reduce:transition-none bg-secondary text-secondary-foreground not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
    >
      Release notes
      <ChevronDown
        class="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-data-open:rotate-180 motion-reduce:transition-none"
      />
    </CollapsibleTrigger>
    <CollapsiblePanel
      class="h-(--collapsible-panel-height) overflow-hidden transition-[height,opacity] duration-300 ease-in-out data-starting-style:h-0 data-starting-style:opacity-0 data-ending-style:h-0 data-ending-style:opacity-0 motion-reduce:transition-none"
    >
      <ul class="flex list-disc flex-col gap-1 ps-8 pe-3 pt-1 pb-2 text-muted-foreground">
        {#each notes as note (note)}
          <li>{note}</li>
        {/each}
      </ul>
    </CollapsiblePanel>
  </Collapsible>
  <output class="mt-3 block text-muted-foreground">
    {settled ? `Finished ${settled}` : "Not animated yet"}
  </output>
</div>

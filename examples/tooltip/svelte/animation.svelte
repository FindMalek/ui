<script lang="ts">
  import { Tooltip, TooltipContent, TooltipTrigger } from "@ui-sdk/svelte/tooltip"

  const items = ["Inbox", "Drafts", "Sent"]
  let status = $state("Closed")

  function complete(item: string, open: boolean) {
    if (open) status = `${item} open`
    else if (status === `${item} closing`) status = `${item} closed`
  }
</script>

<div class="flex flex-col items-center">
  <div class="flex gap-2">
    {#each items as item (item)}
      <Tooltip
        onOpenChange={(open) => (status = open ? `${item} opening` : `${item} closing`)}
        onOpenChangeComplete={(open) => complete(item, open)}
      >
        <TooltipTrigger
          class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none"
        >
          {item}
        </TooltipTrigger>
        <TooltipContent
          class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale,translate] duration-300 ease-out data-starting-style:translate-y-1 data-starting-style:scale-90 data-starting-style:opacity-0 data-ending-style:scale-90 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none"
        >
          Open {item.toLowerCase()}
        </TooltipContent>
      </Tooltip>
    {/each}
  </div>
  <output class="mt-3 text-sm text-muted-foreground">{status}</output>
</div>

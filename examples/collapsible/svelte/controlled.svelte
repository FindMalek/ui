<script lang="ts">
  import { ChevronDown } from "@lucide/svelte"
  import {
    Collapsible,
    CollapsiblePanel,
    CollapsibleTrigger,
    createCollapsibleController,
  } from "@ui-sdk/svelte/collapsible"

  const recoveryCodes = ["7KQ2-M9XD", "P4TR-8HZC", "W3NB-6JUE", "C5YF-2LSA"]

  const collapsible = createCollapsibleController()

  let open = $state(false)
  let reason = $state("")
</script>

<div class="w-full max-w-sm text-sm">
  <Collapsible
    bind:open
    class="rounded-3xl border border-border bg-card p-2 text-card-foreground"
    controller={collapsible}
    onOpenChange={(_, details) => (reason = details.reason)}
  >
    <CollapsibleTrigger
      class="group flex h-8 w-full items-center justify-between gap-1.5 rounded-2xl border border-transparent px-3 text-start font-medium cursor-default outline-none select-none transition-[color,background-color,box-shadow] motion-reduce:transition-none bg-secondary text-secondary-foreground not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
    >
      Recovery codes
      <ChevronDown
        class="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180 motion-reduce:transition-none"
      />
    </CollapsibleTrigger>
    <CollapsiblePanel
      class="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0 motion-reduce:transition-none"
    >
      <div class="flex flex-col gap-3 px-3 pt-1 pb-2 text-muted-foreground">
        <p>Each code signs you in once if you lose your phone.</p>
        <ul class="grid grid-cols-2 gap-1 font-mono text-foreground">
          {#each recoveryCodes as code (code)}
            <li>{code}</li>
          {/each}
        </ul>
        <button
          class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 self-start rounded-2xl border border-transparent bg-secondary bg-clip-padding text-secondary-foreground px-3 font-medium whitespace-nowrap text-foreground cursor-default outline-none select-none transition-[color,background-color,box-shadow] motion-reduce:transition-none not-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px motion-reduce:transform-none motion-reduce:transition-none"
          onclick={() => collapsible.close()}
        >
          Done
        </button>
      </div>
    </CollapsiblePanel>
  </Collapsible>
  <button
    class="mt-3 inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding text-secondary-foreground px-3 font-medium whitespace-nowrap cursor-default outline-none select-none transition-[color,background-color,box-shadow] motion-reduce:transition-none not-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px motion-reduce:transform-none motion-reduce:transition-none"
    onclick={() => collapsible.toggle()}
  >
    Toggle from outside
  </button>
  <output class="mt-1 block text-muted-foreground">
    {open ? "Open" : "Closed"}{reason ? `, last change: ${reason}` : ""}
  </output>
</div>

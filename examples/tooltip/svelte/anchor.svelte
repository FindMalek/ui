<script lang="ts">
  import { Info } from "@lucide/svelte"
  import { Tooltip, TooltipContent, TooltipTrigger } from "@ui-sdk/svelte/tooltip"

  const id = $props.id()
  let field: HTMLDivElement | undefined = $state()
</script>

<div class="grid w-full max-w-xs gap-2">
  <label
    for={id}
    class="text-sm leading-none font-medium"
  >Webhook URL</label>
  <div
    bind:this={field}
    class="flex h-8 items-center gap-1 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-0.5 transition-[color,box-shadow] duration-200 focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/30 motion-reduce:transition-none"
  >
    <input
      {id}
      placeholder="https://"
      class="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground md:text-sm"
    />
    <Tooltip>
      <TooltipTrigger
        aria-label="About webhooks"
        class="inline-flex size-7 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none"
      >
        <Info class="size-4" />
      </TooltipTrigger>
      <TooltipContent
        anchor={field}
        align="start"
        class="inline-flex w-(--anchor-width) origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none"
      >
        We send a POST request to this URL for every new order.
      </TooltipContent>
    </Tooltip>
  </div>
</div>

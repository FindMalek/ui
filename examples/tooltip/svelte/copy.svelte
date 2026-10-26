<script lang="ts">
  import { Check, Copy } from "@lucide/svelte"
  import { Tooltip, TooltipContent, TooltipTrigger } from "@ui-sdk/svelte/tooltip"

  const command = "pnpm add @ui-sdk/svelte"
  let copied = $state(false)

  function copy() {
    navigator.clipboard?.writeText(command).catch(() => {})
    copied = true
  }
</script>

<div
  class="flex h-10 w-full max-w-xs items-center gap-2 rounded-2xl border border-border ps-3 pe-1 font-mono text-sm"
>
  <span class="min-w-0 flex-1 truncate">{command}</span>
  <Tooltip
    closeOnPress={false}
    onOpenChangeComplete={(open) => {
      if (!open) copied = false
    }}
  >
    <TooltipTrigger
      class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none"
      onclick={copy}
    >
      {#if copied}
        <Check class="size-4" />
      {:else}
        <Copy class="size-4" />
      {/if}
    </TooltipTrigger>
    <TooltipContent
      class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 font-sans text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none"
    >
      {copied ? "Copied" : "Copy"}
    </TooltipContent>
  </Tooltip>
</div>

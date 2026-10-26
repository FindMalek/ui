<script lang="ts">
  import { File } from "@lucide/svelte"
  import type { ChangeDetails } from "@ui-sdk/core"
  import { Tooltip, TooltipContent, TooltipTrigger } from "@ui-sdk/svelte/tooltip"

  const files = [
    "Quarterly report, final revised version for the board.pdf",
    "Notes.txt",
    "Design review recording, October 2nd.mp4",
    "Budget.xlsx",
  ]

  function onlyTruncated(open: boolean, details: ChangeDetails<string>) {
    const target = details.event?.target
    const name = target instanceof Element ? target.closest("button")?.querySelector("span") : null
    if (open && name && name.scrollWidth <= name.clientWidth) {
      details.cancel()
    }
  }
</script>

<ul class="w-64 divide-y divide-border overflow-hidden rounded-2xl border border-border">
  {#each files as file (file)}
    <li>
      <Tooltip
        type="label"
        onOpenChange={onlyTruncated}
      >
        <TooltipTrigger
          class="flex w-full items-center gap-2 px-3 py-2 text-start text-sm outline-none transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset motion-reduce:transition-none"
        >
          <File class="size-4 shrink-0 text-muted-foreground" />
          <span class="truncate">{file}</span>
        </TooltipTrigger>
        <TooltipContent
          class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none"
        >
          {file}
        </TooltipContent>
      </Tooltip>
    </li>
  {/each}
</ul>

<script setup lang="ts">
import { Archive, Mail, Trash } from "@lucide/vue"
import { Toolbar, ToolbarButton, ToolbarInput } from "@ui-sdk/vue/toolbar"
</script>

<template>
  <div class="flex flex-col items-start gap-3">
    <Toolbar aria-label="Message" class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1">
      <ToolbarButton
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
      >
        <Mail class="size-4" />
        Reply
      </ToolbarButton>
      <ToolbarButton
        disabled
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
      >
        <Archive class="size-4" />
        Archive
      </ToolbarButton>
      <ToolbarButton
        aria-label="Delete"
        disabled
        :focusable-when-disabled="false"
        class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
      >
        <Trash class="size-4" />
      </ToolbarButton>
    </Toolbar>
    <Toolbar
      disabled
      aria-label="Comment"
      class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1"
    >
      <ToolbarInput
        aria-label="Comment"
        value="Read only for now"
        class="h-8 w-40 min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm motion-reduce:transition-none"
      />
      <ToolbarButton
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
        >Send</ToolbarButton
      >
    </Toolbar>
  </div>
</template>

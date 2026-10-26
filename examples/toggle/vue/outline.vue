<script setup lang="ts">
import { Bold, Italic } from "@lucide/vue"
import { Toggle, ToggleIcon } from "@ui-sdk/vue/toggle"
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Toggle
      class="inline-flex h-8 min-w-8 shrink-0 items-center justify-center gap-1 rounded-2xl border border-input bg-transparent ps-2 pe-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50"
    >
      <ToggleIcon class="flex">
        <Italic class="size-4" />
      </ToggleIcon>
      Italic
    </Toggle>
    <Toggle
      class="inline-flex h-8 min-w-8 shrink-0 items-center justify-center gap-1 rounded-2xl border border-input bg-transparent ps-2 pe-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50"
    >
      <ToggleIcon class="flex">
        <Bold class="size-4" />
      </ToggleIcon>
      Bold
    </Toggle>
  </div>
</template>

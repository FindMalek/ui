<script setup lang="ts">
import { LoaderCircle } from "@lucide/vue"
import { Button } from "@ui-sdk/vue/button"

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
const save = () => wait(1500)
</script>

<template>
  <Button
    @click="save"
    pending-announcement="Saving"
    class="group inline-flex h-8 shrink-0 cursor-default appearance-none items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-clip-padding px-3 py-0 text-sm leading-5 font-medium whitespace-nowrap outline-none select-none transition-all focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 data-disabled:opacity-50 motion-reduce:transition-none bg-secondary text-secondary-foreground hover:not-aria-disabled:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] enabled:active:not-aria-disabled:translate-y-px data-pending:cursor-progress"
  >
    <LoaderCircle
      aria-hidden="true"
      class="invisible pointer-events-none size-4 shrink-0 animate-spin group-data-pending:visible motion-reduce:animate-none"
    />
    Save
  </Button>
</template>

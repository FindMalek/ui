<script setup lang="ts">
import { Button } from "@ui-sdk/vue/button"
import { ref } from "vue"

const count = ref(0)
</script>

<template>
  <div class="flex w-full max-w-xs flex-col items-center gap-3 text-foreground">
    <Button
      @click="count++"
      class="inline-flex h-8 shrink-0 cursor-default appearance-none items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-clip-padding px-3 py-0 text-sm leading-5 font-medium whitespace-nowrap outline-none select-none transition-all focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 data-disabled:opacity-50 motion-reduce:transition-none bg-secondary text-secondary-foreground hover:not-aria-disabled:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] enabled:active:not-aria-disabled:translate-y-px"
      >Button</Button
    >
    <output class="block min-h-5 text-sm leading-5 text-muted-foreground tabular-nums"
      >Pressed {{ count }} {{ count === 1 ? "time" : "times" }}</output
    >
  </div>
</template>

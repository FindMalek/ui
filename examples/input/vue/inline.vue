<script setup lang="ts">
import { Input } from "@ui-sdk/vue/input"
</script>

<template>
  <form role="search" class="flex w-full max-w-sm items-center gap-2" @submit.prevent>
    <Input
      type="search"
      name="q"
      aria-label="Search"
      placeholder="Search…"
      class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm"
    />
    <button
      type="submit"
      class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px"
    >
      Search
    </button>
  </form>
</template>

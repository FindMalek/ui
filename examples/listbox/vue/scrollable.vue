<script setup lang="ts">
import { Check } from "@lucide/vue"
import { Listbox, ListboxItem, ListboxItemIndicator } from "@ui-sdk/vue/listbox"
import { ref } from "vue"

const timezones = Array.from({ length: 27 }, (_, index) => {
  const offset = index - 12
  const label = `UTC${offset < 0 ? "−" : "+"}${String(Math.abs(offset)).padStart(2, "0")}:00`
  return { value: `utc${offset}`, label }
})

const highlighted = ref<unknown>(null)
</script>

<template>
  <div class="flex w-full max-w-64 flex-col gap-3">
    <Listbox
      default-value="utc9"
      aria-label="Time zone"
      class="box-border max-h-56 scroll-py-1 overflow-y-auto flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none"
      @highlight="(value) => (highlighted = value)"
    >
      <ListboxItem
        v-for="(zone, index) in timezones"
        :key="zone.value"
        :value="zone.value"
        :index="index"
        class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 tabular-nums"
      >
        {{ zone.label }}
        <ListboxItemIndicator
          class="pointer-events-none absolute end-2 flex size-4 items-center justify-center"
        >
          <Check aria-hidden="true" class="pointer-events-none block size-4 shrink-0" />
        </ListboxItemIndicator>
      </ListboxItem>
    </Listbox>
    <output class="m-0 block min-h-10 text-sm leading-5 break-words text-muted-foreground"
      >Focused: {{ highlighted ?? "none" }}</output
    >
  </div>
</template>

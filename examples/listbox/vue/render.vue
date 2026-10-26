<script setup lang="ts">
import { ExternalLink } from "@lucide/vue"
import { Listbox, ListboxItem } from "@ui-sdk/vue/listbox"

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "nuxt", label: "Nuxt" },
  { value: "sveltekit", label: "SvelteKit" },
]
</script>

<template>
  <Listbox
    default-value="next"
    activation="manual"
    aria-label="Framework docs"
    class="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none"
  >
    <ListboxItem
      v-for="framework in frameworks"
      :key="framework.value"
      :href="`#${framework.value}`"
      :value="framework.value"
      :label="framework.label"
      class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 text-inherit no-underline data-selected:font-medium"
    >
      <template #render="{ props, state }">
        <a v-bind="props">
          <span>{{ framework.label }}</span>
          <ExternalLink
            aria-hidden="true"
            v-if="state.selected"
            class="pointer-events-none block size-4 shrink-0 ms-auto text-muted-foreground"
          />
        </a>
      </template>
    </ListboxItem>
  </Listbox>
</template>

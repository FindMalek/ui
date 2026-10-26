<script setup lang="ts">
import { Check, ChevronDown, X } from "@lucide/vue"
import {
  Combobox,
  ComboboxChip,
  ComboboxChipRemove,
  ComboboxChips,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@ui-sdk/vue/combobox"

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt", label: "Nuxt" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "solidstart", label: "SolidStart" },
  { value: "qwik", label: "Qwik City" },
]

const frameworkLabel = (value: string) =>
  frameworks.find((framework) => framework.value === value)?.label ?? value
</script>

<template>
  <Combobox multiple :default-value="['next', 'astro']" :item-to-label="frameworkLabel">
    <div class="flex w-80 max-w-full flex-col gap-2">
      <ComboboxLabel class="text-sm leading-none font-medium">Frameworks</ComboboxLabel>
      <div class="relative">
        <ComboboxChips
          class="box-border flex min-h-8 w-full flex-wrap items-center gap-1 rounded-2xl border border-transparent bg-input/50 bg-clip-padding py-1 ps-1 pe-8 text-sm leading-5 transition-[color,box-shadow] duration-200 focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/30"
        >
          <ComboboxValue v-slot="{ state }">
            <ComboboxChip
              v-for="(value, index) in state.value as string[]"
              :key="value"
              :value="value"
              class="box-border flex h-5.25 w-fit items-center justify-center gap-1 rounded-2xl bg-input ps-1.5 pe-0.5 text-xs leading-4 font-medium whitespace-nowrap text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
            >
              {{ state.labels[index] }}
              <ComboboxChipRemove
                :aria-label="`Remove ${state.labels[index]}`"
                class="-ms-0.5 flex size-4.5 cursor-default items-center justify-center rounded-full border-0 bg-transparent p-0 text-inherit opacity-50 outline-none hover:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none"
              >
                <X aria-hidden="true" class="pointer-events-none block size-3 shrink-0" />
              </ComboboxChipRemove>
            </ComboboxChip>
          </ComboboxValue>
          <ComboboxInput
            placeholder="Add a framework"
            class="h-6 min-w-16 flex-1 border-0 bg-transparent px-1.5 py-0 text-base leading-6 text-inherit outline-none placeholder:text-muted-foreground md:text-sm md:leading-5"
          />
        </ComboboxChips>
        <ComboboxTrigger
          aria-label="Show frameworks"
          class="group inline-flex size-6 cursor-default items-center justify-center rounded-xl border border-transparent bg-transparent p-0 text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50 absolute end-1 top-1/2 -translate-y-1/2"
        >
          <ChevronDown
            aria-hidden="true"
            class="pointer-events-none block size-4 shrink-0 transition-transform group-data-open:rotate-180"
          />
        </ComboboxTrigger>
      </div>
    </div>
    <ComboboxContent
      class="max-h-[min(18rem,var(--available-height))] scroll-py-1 overflow-x-hidden overflow-y-auto box-border w-(--anchor-width) min-w-36 rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0"
    >
      <ComboboxEmpty class="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden"
        >No frameworks found.</ComboboxEmpty
      >
      <ComboboxList>
        <ComboboxItem
          v-for="framework in frameworks"
          :key="framework.value"
          :value="framework.value"
          :label="framework.label"
          class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          {{ framework.label }}
          <ComboboxItemIndicator
            class="pointer-events-none absolute end-2 flex size-4 items-center justify-center"
          >
            <Check aria-hidden="true" class="pointer-events-none block size-4 shrink-0" />
          </ComboboxItemIndicator>
        </ComboboxItem>
      </ComboboxList>
    </ComboboxContent>
  </Combobox>
</template>

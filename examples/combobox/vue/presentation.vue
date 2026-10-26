<script setup lang="ts">
import { Check, ChevronDown } from "@lucide/vue"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxList,
  ComboboxTrigger,
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
</script>

<template>
  <Combobox presentation="sheet">
    <div class="flex w-64 max-w-full flex-col gap-2">
      <ComboboxLabel class="text-sm leading-none font-medium">Framework</ComboboxLabel>
      <div class="relative">
        <ComboboxInput
          placeholder="Select a framework"
          class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-8 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
        />
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
      class="group data-[presentation=popover]:max-h-[min(18rem,var(--available-height))] data-[presentation=popover]:scroll-py-1 data-[presentation=popover]:overflow-x-hidden data-[presentation=popover]:overflow-y-auto data-[presentation=popover]:box-border data-[presentation=popover]:w-(--anchor-width) data-[presentation=popover]:min-w-36 data-[presentation=popover]:rounded-2xl data-[presentation=popover]:border-0 data-[presentation=popover]:bg-popover data-[presentation=popover]:p-1 data-[presentation=popover]:text-sm data-[presentation=popover]:leading-5 data-[presentation=popover]:text-popover-foreground data-[presentation=popover]:shadow-lg data-[presentation=popover]:ring-1 data-[presentation=popover]:ring-foreground/5 data-[presentation=popover]:outline-none data-[presentation=popover]:origin-(--transform-origin) data-[presentation=popover]:transition-[opacity,scale] data-[presentation=popover]:duration-100 data-[presentation=popover]:data-starting-style:scale-95 data-[presentation=popover]:data-starting-style:opacity-0 data-[presentation=popover]:data-ending-style:scale-95 data-[presentation=popover]:data-ending-style:opacity-0 data-[presentation=sheet]:box-border data-[presentation=sheet]:h-[85dvh] data-[presentation=sheet]:overflow-y-auto data-[presentation=sheet]:scroll-pt-12 data-[presentation=sheet]:rounded-t-3xl data-[presentation=sheet]:border-0 data-[presentation=sheet]:bg-popover data-[presentation=sheet]:px-2 data-[presentation=sheet]:pt-2 data-[presentation=sheet]:pb-[max(env(safe-area-inset-bottom),0.75rem)] data-[presentation=sheet]:text-base data-[presentation=sheet]:leading-6 data-[presentation=sheet]:text-popover-foreground data-[presentation=sheet]:ring-1 data-[presentation=sheet]:ring-foreground/5 data-[presentation=sheet]:outline-none data-[presentation=sheet]:[--sheet-backdrop:rgb(0_0_0/0.3)] data-[presentation=sheet]:*:data-[slot=combobox-header]:sticky data-[presentation=sheet]:*:data-[slot=combobox-header]:top-0 data-[presentation=sheet]:*:data-[slot=combobox-header]:z-10 data-[presentation=sheet]:*:data-[slot=combobox-header]:bg-popover data-[presentation=sheet]:*:data-[slot=combobox-header]:pt-1 data-[presentation=sheet]:*:data-[slot=combobox-header]:pb-2"
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
          class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2 group-data-[presentation=sheet]:py-3"
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

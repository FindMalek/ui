<script setup lang="ts">
import { ChevronRight } from "@lucide/vue"
import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from "@ui-sdk/vue/collapsible"
</script>

<template>
  <Collapsible>
    <template #render="{ props, state }">
      <div
        v-bind="props"
        :class="
          state.open
            ? 'w-full max-w-sm rounded-3xl border border-border bg-muted/50 p-2 text-sm text-card-foreground transition-colors'
            : 'w-full max-w-sm rounded-3xl border border-border bg-card p-2 text-sm text-card-foreground transition-colors'
        "
      >
        <CollapsibleTrigger
          class="group flex h-8 items-center gap-1.5 rounded-2xl border border-transparent px-3 text-start font-medium cursor-default outline-none select-none transition-[color,background-color,box-shadow] motion-reduce:transition-none bg-secondary text-secondary-foreground not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
        >
          <template #render="{ props: triggerProps, state: triggerState }">
            <h3 class="flex items-center justify-between gap-4 text-sm font-normal">
              <button v-bind="triggerProps">
                <ChevronRight
                  class="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-open:rotate-90 motion-reduce:transition-none rtl:-scale-x-100"
                />
                Track parcel
              </button>
              <span class="pe-3 text-muted-foreground tabular-nums">
                {{ triggerState.open ? "3 updates" : "Arrives Thursday" }}
              </span>
            </h3>
          </template>
        </CollapsibleTrigger>
        <CollapsiblePanel
          class="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0 motion-reduce:transition-none"
        >
          <template #render="{ props }">
            <ol v-bind="props">
              <li class="flex justify-between gap-4 px-3 pt-2 pb-1 text-muted-foreground">
                Out for delivery <span class="tabular-nums">07:40</span>
              </li>
              <li class="flex justify-between gap-4 px-3 py-1 text-muted-foreground">
                Arrived at the local depot <span class="tabular-nums">05:12</span>
              </li>
              <li class="flex justify-between gap-4 px-3 pt-1 pb-2 text-muted-foreground">
                Left the sorting center <span class="tabular-nums">Wed 21:03</span>
              </li>
            </ol>
          </template>
        </CollapsiblePanel>
      </div>
    </template>
  </Collapsible>
</template>

<script setup lang="ts">
import {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHandle,
  DrawerShortcut,
  DrawerTitle,
  DrawerTrigger,
} from "@ui-sdk/vue/drawer"
</script>

<template>
  <Drawer :snap-points="[0.5, 1]">
    <DrawerTrigger shortcut="mod+j">
      <template #render="{ props, state }">
        <button
          v-bind="props"
          class="inline-flex h-8 shrink-0 items-center justify-center gap-2 rounded-2xl border border-border bg-background bg-clip-padding ps-3 pe-1.5 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30"
        >
          {{ state.open ? "Viewing" : "View details" }}
          <DrawerShortcut
            v-slot="{ state: shortcut }"
            class="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-muted px-1 font-sans text-xs font-medium text-muted-foreground"
            >{{ shortcut.text }}</DrawerShortcut
          >
        </button>
      </template>
    </DrawerTrigger>
    <DrawerBackdrop
      class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm data-closed:pointer-events-none data-nested:bg-black/15 data-nested-open:bg-black/15"
    />
    <DrawerContent
      v-slot="{ state }"
      class="relative mx-auto flex h-[calc(100dvh-3rem)] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit data-dragging:cursor-grabbing data-dragging:shadow-2xl dark:ring-foreground/10"
    >
      <DrawerHandle
        aria-label="Resize"
        class="relative mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted outline-none after:absolute after:-inset-x-2 after:-inset-y-3 focus-visible:ring-3 focus-visible:ring-ring/30"
      />
      <div class="flex flex-col gap-0.5 p-4 text-center md:gap-1.5 md:text-start">
        <DrawerTitle class="text-base font-medium text-foreground">
          <template #render="{ props }">
            <h3 v-bind="props">Details</h3>
          </template>
        </DrawerTitle>
        <DrawerDescription class="text-sm text-muted-foreground">
          {{
            state.dragging
              ? "Dragging."
              : state.expanded
                ? "Expanded to its largest snap point."
                : `Resting at ${state.snapPoint}, from the ${state.side}.`
          }}
          {{ state.stack }} open above it.
        </DrawerDescription>
      </div>
      <div class="flex flex-col gap-2 p-4 pt-0">
        <DrawerClose
          href="https://example.com/details"
          class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          <template #render="{ props }">
            <a v-bind="props">Open the full page</a>
          </template>
        </DrawerClose>
      </div>
    </DrawerContent>
  </Drawer>
</template>

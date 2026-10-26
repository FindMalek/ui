<script setup lang="ts">
import { Bell, ExternalLink } from "@lucide/vue"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@ui-sdk/vue/popover"
import { Tooltip, TooltipContent, TooltipTrigger } from "@ui-sdk/vue/tooltip"
</script>

<template>
  <div class="flex items-center gap-3">
    <Popover>
      <Tooltip>
        <TooltipTrigger
          class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none data-open:bg-muted"
        >
          <template #render="{ props }">
            <PopoverTrigger v-bind="props">
              <Bell class="size-4" />
            </PopoverTrigger>
          </template>
        </TooltipTrigger>
        <TooltipContent
          class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none"
          >Notifications</TooltipContent
        >
      </Tooltip>
      <PopoverContent
        :side-offset="8"
        class="flex w-64 origin-(--transform-origin) flex-col gap-1 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
      >
        <PopoverTitle class="text-base font-medium">Notifications</PopoverTitle>
        <PopoverDescription class="text-muted-foreground">You're all caught up.</PopoverDescription>
      </PopoverContent>
    </Popover>
    <Tooltip>
      <TooltipTrigger
        href="https://example.com/changelog"
        class="inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30"
      >
        <template #render="{ props }">
          <a v-bind="props">
            Changelog
            <ExternalLink class="size-3.5" />
          </a>
        </template>
      </TooltipTrigger>
      <TooltipContent>
        <template #render="{ props, state }">
          <div
            v-bind="props"
            :class="
              state.instant
                ? 'inline-flex w-fit max-w-xs items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background'
                : 'inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none'
            "
          >
            What's new in 2.0
          </div>
        </template>
      </TooltipContent>
    </Tooltip>
  </div>
</template>

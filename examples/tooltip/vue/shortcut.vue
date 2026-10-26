<script setup lang="ts">
import { Save, Share2 } from "@lucide/vue"
import { registerShortcut } from "@ui-sdk/core/shortcuts"
import { Tooltip, TooltipContent, TooltipShortcut, TooltipTrigger } from "@ui-sdk/vue/tooltip"
import { onMounted, onUnmounted, ref } from "vue"

const status = ref("Nothing yet")
const save = () => (status.value = "Saved")
const share = () => (status.value = "Shared")

const offs: (() => void)[] = []
onMounted(() => offs.push(registerShortcut("mod+s", save), registerShortcut("mod+shift+e", share)))
onUnmounted(() => offs.forEach((off) => off()))
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="flex gap-2">
      <Tooltip shortcut="mod+s">
        <TooltipTrigger
          class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none"
          @click="save"
        >
          <Save class="size-4" />
        </TooltipTrigger>
        <TooltipContent
          class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 has-data-[slot=tooltip-shortcut]:pe-1.5 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none"
        >
          Save
          <TooltipShortcut
            class="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-background/20 px-1 font-sans text-xs font-medium text-background dark:bg-background/10"
          />
        </TooltipContent>
      </Tooltip>
      <Tooltip shortcut="mod+shift+e">
        <TooltipTrigger
          class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none"
          @click="share"
        >
          <Share2 class="size-4" />
          Share
        </TooltipTrigger>
        <TooltipContent
          class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 has-data-[slot=tooltip-shortcut]:pe-1.5 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none"
        >
          Share with your team
          <TooltipShortcut
            class="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-background/20 px-1 font-sans text-xs font-medium text-background dark:bg-background/10"
          >
            <template #render="{ props }">
              <kbd v-bind="props" />
            </template>
          </TooltipShortcut>
        </TooltipContent>
      </Tooltip>
    </div>
    <output class="mt-3 text-sm text-muted-foreground">{{ status }}</output>
  </div>
</template>

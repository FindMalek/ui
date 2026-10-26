<script setup lang="ts">
import { CircleQuestionMark } from "@lucide/vue"
import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from "@ui-sdk/vue/tooltip"
import { ref } from "vue"

const sides = ["top", "right", "bottom", "left"] as const
const aligns = ["start", "center", "end"] as const
const open = ref(false)
const pinned = ref(false)
const side = ref<(typeof sides)[number]>("top")
const align = ref<(typeof aligns)[number]>("center")

function onOpenChange(next: boolean, details: { cancel: () => void }) {
  open.value = next
  if (!next && pinned.value) details.cancel()
}
</script>

<template>
  <div class="flex flex-col items-center gap-8">
    <div class="flex flex-col items-center gap-3">
      <div class="grid grid-cols-[auto_auto] items-center gap-x-3 gap-y-2">
        <span class="text-end text-sm text-muted-foreground">side</span>
        <div
          role="group"
          aria-label="side"
          class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
        >
          <button
            v-for="value in sides"
            :key="value"
            type="button"
            :aria-pressed="side === value"
            class="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:border-border aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
            @click="side = value"
          >
            {{ value }}
          </button>
        </div>
        <span class="text-end text-sm text-muted-foreground">align</span>
        <div
          role="group"
          aria-label="align"
          class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
        >
          <button
            v-for="value in aligns"
            :key="value"
            type="button"
            :aria-pressed="align === value"
            class="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:border-border aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
            @click="align = value"
          >
            {{ value }}
          </button>
        </div>
      </div>
      <label class="flex items-center gap-2 text-sm text-muted-foreground">
        <input v-model="pinned" type="checkbox" class="size-4 accent-primary" />
        Keep open
      </label>
    </div>
    <Tooltip :open="pinned || open" @open-change="onOpenChange">
      <TooltipTrigger
        class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none"
      >
        <CircleQuestionMark class="size-4" />
      </TooltipTrigger>
      <TooltipContent
        :side="side"
        :align="align"
        :side-offset="8"
        :arrow-padding="8"
        class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none"
      >
        <TooltipArrow
          class="size-2.5 rotate-45 rounded-[2px] bg-foreground data-[side=bottom]:-top-1 data-[side=left]:-right-1 data-[side=right]:-left-1 data-[side=top]:-bottom-1"
        />
        Keyboard shortcuts
      </TooltipContent>
    </Tooltip>
  </div>
</template>

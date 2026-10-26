<script setup lang="ts">
import { MoveHorizontal } from "@lucide/vue"
import {
  createNumberInputController,
  NumberInput,
  NumberInputControl,
  NumberInputGroup,
  NumberInputScrubArea,
  NumberInputScrubAreaCursor,
} from "@ui-sdk/vue/number-input"

const controller = createNumberInputController()
</script>

<template>
  <div
    role="toolbar"
    aria-label="Text"
    class="flex items-center gap-1 rounded-2xl border border-border bg-background p-1 text-foreground"
  >
    <NumberInputScrubArea
      :controller="controller"
      title="Drag to change the letter spacing"
      class="flex size-8 cursor-ew-resize items-center justify-center rounded-xl text-muted-foreground select-none hover:bg-muted hover:text-foreground data-scrubbing:bg-muted data-scrubbing:text-foreground"
    >
      <MoveHorizontal aria-hidden="true" class="size-4 shrink-0" />
      <NumberInputScrubAreaCursor class="z-50 -mt-2.5 -ml-2.5 text-foreground drop-shadow-sm">
        <MoveHorizontal aria-hidden="true" class="size-5" />
      </NumberInputScrubAreaCursor>
    </NumberInputScrubArea>
    <NumberInput :controller="controller" :default-value="0" :min="-5" :max="20" :step="0.1">
      <NumberInputGroup
        class="flex h-8 w-20 items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 px-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 motion-reduce:transition-none"
      >
        <NumberInputControl
          aria-label="Letter spacing"
          class="h-full w-full min-w-0 border-0 bg-transparent px-1 py-0 text-center text-base text-foreground tabular-nums outline-none data-disabled:opacity-50 md:text-sm"
        />
      </NumberInputGroup>
    </NumberInput>
  </div>
</template>

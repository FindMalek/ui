<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipTrigger } from "@ui-sdk/vue"
import { countRender, perfSize } from "tests/fixtures/perf.ts"

// N tooltip triggers in a row, like a toolbar of icon buttons, for the counts
// specs. Keyboard focus opens a tooltip at once, so Tab shows
// each in turn. Triggers and contents count their renders, so specs can tell
// what a focus move rendered.
const tips = Array.from({ length: perfSize() }, (_, index) => index + 1)
const count = (kind: "trigger" | "tooltip") => (countRender(kind), "")
</script>

<template>
  <div class="fixture tooltip-page" style="flex-wrap: wrap">
    <button>Before</button>
    <div v-for="tip in tips" :key="tip" class="tooltip-row">
      <Tooltip :delay="0">
        <TooltipTrigger class="tooltip-trigger">
          <template #render="{ props }">
            <button v-bind="props">{{ count("trigger") }}Tip {{ tip }}</button>
          </template>
        </TooltipTrigger>
        <TooltipContent class="tooltip">
          <template #render="{ props }">
            <div v-bind="props">{{ count("tooltip") }}Hint {{ tip }}</div>
          </template>
        </TooltipContent>
      </Tooltip>
    </div>
    <button>After</button>
  </div>
</template>

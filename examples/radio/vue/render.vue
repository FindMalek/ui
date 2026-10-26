<script setup lang="ts">
import { Bell, Check, Mail, Moon } from "@lucide/vue"
import { Radio, RadioGroup } from "@ui-sdk/vue/radio"

const options = [
  { value: "all", label: "Everything", description: "Every message and update.", icon: Bell },
  { value: "mentions", label: "Mentions", description: "Only when someone mentions you.", icon: Mail },
  { value: "none", label: "Nothing", description: "Turn notifications off.", icon: Moon },
]
import { useId } from "vue"

const id = useId()
</script>

<template>
  <RadioGroup class="grid w-full max-w-sm gap-2" aria-label="Notify me about" default-value="mentions">
    <Radio
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :aria-labelledby="`${id}-notify-${option.value}-label`"
      :aria-describedby="`${id}-notify-${option.value}-description`"
    >
      <template #render="{ props, state }">
        <button
          v-bind="props"
          :class="
            state.checked
              ? 'flex w-full items-center gap-3 rounded-2xl border border-border px-4 py-3 text-start text-sm cursor-default outline-none transition-[color,background-color,box-shadow] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 bg-input/30 motion-reduce:transition-none'
              : 'flex w-full items-center gap-3 rounded-2xl border border-border px-4 py-3 text-start text-sm cursor-default outline-none transition-[color,background-color,box-shadow] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-input/40 motion-reduce:transition-none'
          "
        >
          <component :is="option.icon" class="size-4 shrink-0 text-muted-foreground" />
          <span class="flex flex-1 flex-col">
            <span :id="`${id}-notify-${option.value}-label`" class="font-medium">{{ option.label }}</span>
            <span :id="`${id}-notify-${option.value}-description`" class="text-muted-foreground">{{
              option.description
            }}</span>
          </span>
          <Check v-if="state.checked" class="size-4 shrink-0" />
        </button>
      </template>
    </Radio>
  </RadioGroup>
</template>

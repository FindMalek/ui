<script setup lang="ts">
import { Check, Plus } from "@lucide/vue"
import { Checkbox, CheckboxIndicator } from "@ui-sdk/vue/checkbox"

const topics = [
  { value: "design", label: "Design", checked: true },
  { value: "engineering", label: "Engineering", checked: false },
  { value: "marketing", label: "Marketing", checked: false },
  { value: "sales", label: "Sales", checked: false },
]
</script>

<template>
  <div class="flex w-full max-w-sm flex-col gap-5">
    <fieldset>
      <legend class="mb-3 text-sm font-medium">Topics you follow</legend>
      <div class="flex flex-wrap gap-2">
        <Checkbox
          v-for="topic in topics"
          :key="topic.value"
          name="topics"
          :value="topic.value"
          :default-checked="topic.checked"
        >
          <template #render="{ props, state }">
            <button
              v-bind="props"
              :class="
                state.checked
                  ? 'inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding ps-2.5 pe-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30'
                  : 'inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding ps-2.5 pe-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 dark:bg-transparent dark:hover:bg-input/30'
              "
            >
              <Check v-if="state.checked" class="size-3.5" />
              <Plus v-else class="size-3.5" />
              {{ topic.label }}
            </button>
          </template>
        </Checkbox>
      </div>
    </fieldset>
    <label class="flex items-center gap-3 text-sm font-medium">
      <Checkbox
        class="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:opacity-50"
      >
        <template #render="{ props }">
          <span v-bind="props">
            <CheckboxIndicator class="grid place-content-center">
              <Check class="size-3.5" />
            </CheckboxIndicator>
          </span>
        </template>
      </Checkbox>
      Notify me about new topics
    </label>
  </div>
</template>

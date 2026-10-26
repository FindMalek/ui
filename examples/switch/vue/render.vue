<script setup lang="ts">
import { Moon, Sun } from "@lucide/vue"
import { Switch, SwitchThumb } from "@ui-sdk/vue/switch"
</script>

<template>
  <label class="flex items-center gap-2 text-sm font-medium">
    <Switch>
      <template #render="{ props, state }">
        <button
          v-bind="props"
          :class="[
            'inline-flex h-5 w-8 shrink-0 items-center rounded-full border-2 outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30',
            state.checked ? 'border-primary bg-primary' : 'border-transparent bg-input/90',
          ]"
        >
          <SwitchThumb
            class="flex size-4 items-center justify-center rounded-full bg-background text-foreground shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] dark:bg-foreground dark:text-background dark:data-checked:bg-primary-foreground dark:data-checked:text-foreground"
          >
            <template #render="{ props, state: thumbState }">
              <span v-bind="props">
                <Moon v-if="thumbState.checked" class="size-3" />
                <Sun v-else class="size-3" />
              </span>
            </template>
          </SwitchThumb>
        </button>
      </template>
    </Switch>
    Dark mode
  </label>
</template>

<script setup lang="ts">
import { OTPInput, OTPInputGroup, OTPInputSlot } from "@ui-sdk/vue/otp-input"
</script>

<template>
  <OTPInput
    v-slot="{ state }"
    :max-length="5"
    aria-label="Invite code"
    class="flex items-center gap-2 rounded-3xl p-1 transition-colors data-complete:bg-muted data-focused:not-data-complete:bg-muted/50"
  >
    <OTPInputGroup class="flex items-center gap-1.5">
      <OTPInputSlot
        v-for="index in state.slots.length"
        :key="index"
        :index="index - 1"
        class="flex size-10 items-center justify-center rounded-2xl border border-transparent bg-input/50 text-lg font-medium transition-[color,box-shadow] duration-200 data-active:border-ring data-active:ring-3 data-active:ring-ring/30"
      >
        <template #render="{ props, state: slot }">
          <span v-bind="props">
            <template v-if="slot.char">{{ slot.char }}</template>
            <span v-else-if="slot.hasFakeCaret" class="h-5 w-px animate-caret-blink bg-foreground" />
          </span>
        </template>
      </OTPInputSlot>
    </OTPInputGroup>
  </OTPInput>
</template>

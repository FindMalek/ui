<script setup lang="ts">
import { OTPInput, OTPInputGroup, OTPInputSlot } from "@ui-sdk/vue/otp-input"
</script>

<template>
  <div class="flex flex-col gap-4">
    <OTPInput
      disabled
      default-value="123456"
      aria-label="Disabled code"
      class="flex items-center gap-2 text-foreground data-disabled:opacity-50"
    >
      <OTPInputGroup class="flex items-center">
        <OTPInputSlot
          v-for="index in 6"
          :key="index"
          :index="index - 1"
          class="relative flex size-8 items-center justify-center border-y border-e border-input bg-input/50 text-sm transition-[color,box-shadow] duration-200 outline-none first:rounded-s-2xl first:border-s last:rounded-e-2xl data-active:z-10 data-active:border-ring data-active:ring-3 data-active:ring-ring/30 data-fake-caret:after:absolute data-fake-caret:after:h-4 data-fake-caret:after:w-px data-fake-caret:after:animate-caret-blink data-fake-caret:after:bg-foreground motion-reduce:transition-none motion-reduce:after:animate-none"
        />
      </OTPInputGroup>
    </OTPInput>
    <OTPInput
      read-only
      default-value="654321"
      aria-label="Read-only code"
      class="flex items-center gap-2 text-foreground data-disabled:opacity-50"
    >
      <OTPInputGroup class="flex items-center">
        <OTPInputSlot
          v-for="index in 6"
          :key="index"
          :index="index - 1"
          class="relative flex size-8 items-center justify-center border-y border-e border-input bg-input/50 text-sm transition-[color,box-shadow] duration-200 outline-none first:rounded-s-2xl first:border-s last:rounded-e-2xl data-active:z-10 data-active:border-ring data-active:ring-3 data-active:ring-ring/30 data-fake-caret:after:absolute data-fake-caret:after:h-4 data-fake-caret:after:w-px data-fake-caret:after:animate-caret-blink data-fake-caret:after:bg-foreground motion-reduce:transition-none motion-reduce:after:animate-none"
        />
      </OTPInputGroup>
    </OTPInput>
  </div>
</template>

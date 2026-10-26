<script setup lang="ts">
import { OTPInput, OTPInputGroup, OTPInputSeparator, OTPInputSlot } from "@ui-sdk/vue/otp-input"
import { Minus } from "@lucide/vue"
</script>

<template>
  <OTPInput
    :max-length="8"
    pattern="alphanumeric"
    aria-label="Recovery code"
    class="flex items-center gap-2 text-foreground data-disabled:opacity-50"
  >
    <OTPInputGroup class="flex items-center">
      <OTPInputSlot
        v-for="index in 4"
        :key="index"
        :index="index - 1"
        class="relative flex size-8 items-center justify-center border-y border-e border-input bg-input/50 text-sm transition-[color,box-shadow] duration-200 outline-none first:rounded-s-2xl first:border-s last:rounded-e-2xl data-active:z-10 data-active:border-ring data-active:ring-3 data-active:ring-ring/30 data-fake-caret:after:absolute data-fake-caret:after:h-4 data-fake-caret:after:w-px data-fake-caret:after:animate-caret-blink data-fake-caret:after:bg-foreground motion-reduce:transition-none motion-reduce:after:animate-none"
      />
    </OTPInputGroup>
    <OTPInputSeparator class="flex items-center text-muted-foreground">
      <Minus aria-hidden="true" class="size-4 shrink-0" />
    </OTPInputSeparator>
    <OTPInputGroup class="flex items-center">
      <OTPInputSlot
        v-for="index in 4"
        :key="index"
        :index="index + 3"
        class="relative flex size-8 items-center justify-center border-y border-e border-input bg-input/50 text-sm transition-[color,box-shadow] duration-200 outline-none first:rounded-s-2xl first:border-s last:rounded-e-2xl data-active:z-10 data-active:border-ring data-active:ring-3 data-active:ring-ring/30 data-fake-caret:after:absolute data-fake-caret:after:h-4 data-fake-caret:after:w-px data-fake-caret:after:animate-caret-blink data-fake-caret:after:bg-foreground motion-reduce:transition-none motion-reduce:after:animate-none"
      />
    </OTPInputGroup>
  </OTPInput>
</template>

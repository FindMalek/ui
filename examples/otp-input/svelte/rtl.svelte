<script lang="ts">
  import { OTPInput, OTPInputGroup, OTPInputSlot } from "@ui-sdk/svelte/otp-input"

</script>

<div dir="rtl" class="flex min-w-0 flex-col gap-2 text-foreground">
  <span id="otp-rtl-label" class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">رمز التحقق</span>
  <OTPInput
    maxLength={6}
    aria-labelledby="otp-rtl-label"
    class="flex items-center gap-2 text-foreground data-disabled:opacity-50"
  >
    <OTPInputGroup class="flex items-center">
      {#each { length: 6 } as _, index}
        <OTPInputSlot
          index={index}
          class="relative flex size-8 items-center justify-center border-y border-e border-input bg-input/50 text-sm transition-[color,box-shadow] duration-200 outline-none first:rounded-s-2xl first:border-s last:rounded-e-2xl data-active:z-10 data-active:border-ring data-active:ring-3 data-active:ring-ring/30 data-fake-caret:after:absolute data-fake-caret:after:h-4 data-fake-caret:after:w-px data-fake-caret:after:animate-caret-blink data-fake-caret:after:bg-foreground motion-reduce:transition-none motion-reduce:after:animate-none"
        />
      {/each}
    </OTPInputGroup>
  </OTPInput>
</div>

<script lang="ts">
  import { OTPInput, OTPInputGroup, OTPInputSlot } from "@ui-sdk/svelte/otp-input"

</script>

<OTPInput maxLength={5} aria-label="Invite code" class="flex items-center gap-2 rounded-3xl p-1 transition-colors data-complete:bg-muted data-focused:not-data-complete:bg-muted/50">
  {#snippet children(state)}
    <OTPInputGroup class="flex items-center gap-1.5">
      {#each { length: state.slots.length } as _, index}
        <OTPInputSlot {index} class="flex size-10 items-center justify-center rounded-2xl border border-transparent bg-input/50 text-lg font-medium transition-[color,box-shadow] duration-200 data-active:border-ring data-active:ring-3 data-active:ring-ring/30">
          {#snippet render({ props, state: slot })}
            <span {...props}>
              {#if slot.char}
                {slot.char}
              {:else if slot.hasFakeCaret}
                <span class="h-5 w-px animate-caret-blink bg-foreground"></span>
              {/if}
            </span>
          {/snippet}
        </OTPInputSlot>
      {/each}
    </OTPInputGroup>
  {/snippet}
</OTPInput>

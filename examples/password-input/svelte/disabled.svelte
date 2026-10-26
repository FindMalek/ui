<script lang="ts">
  import { Eye, EyeOff } from "@lucide/svelte"
  import { Field, FieldDescription, FieldLabel } from "@ui-sdk/svelte/field"
  import { PasswordInput, PasswordInputControl, PasswordInputToggle } from "@ui-sdk/svelte/password-input"
</script>

<Field disabled name="password" class="flex w-full max-w-sm flex-col gap-2 text-foreground">
  <FieldLabel class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">Password</FieldLabel>
  <PasswordInput
    defaultValue="hunter22"
    class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50 motion-reduce:transition-none"
  >
    <PasswordInputControl
      class="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm"
    />
    <PasswordInputToggle
      aria-label="Show password"
      class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none aria-pressed:text-foreground data-disabled:pointer-events-none"
    >
      {#snippet children(state)}
        {#if state.visible}
          <EyeOff aria-hidden="true" class="size-4 shrink-0" />
        {:else}
          <Eye aria-hidden="true" class="size-4 shrink-0" />
        {/if}
      {/snippet}
    </PasswordInputToggle>
  </PasswordInput>
  <FieldDescription class="min-h-5 text-sm text-muted-foreground">
    Your administrator manages this password.
  </FieldDescription>
</Field>

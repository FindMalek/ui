<script lang="ts">
  import { Eye, EyeOff } from "@lucide/svelte"
  import { Field, FieldLabel } from "@ui-sdk/svelte/field"
  import { PasswordInput, PasswordInputControl, PasswordInputToggle } from "@ui-sdk/svelte/password-input"

  let value = $state("")

  const score = $derived(
    [
      value.length >= 8,
      value.length >= 12,
      /[a-z]/.test(value) && /[A-Z]/.test(value),
      /\d/.test(value) && /[^a-zA-Z\d]/.test(value),
    ].filter(Boolean).length,
  )
</script>

<Field name="new-password" class="flex w-full max-w-sm flex-col gap-2">
  <FieldLabel class="text-sm leading-none font-medium data-disabled:opacity-50">New password</FieldLabel>
  <PasswordInput
    bind:value
    autoComplete="new-password"
    class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50"
  >
    <PasswordInputControl
      class="h-full min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground md:text-sm"
    />
    <PasswordInputToggle
      aria-label="Show password"
      class="inline-flex size-6 shrink-0 items-center justify-center rounded-xl text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:text-foreground data-disabled:pointer-events-none dark:hover:bg-muted/50"
    >
      {#snippet children(state)}
        {#if state.visible}
          <EyeOff class="size-4" />
        {:else}
          <Eye class="size-4" />
        {/if}
      {/snippet}
    </PasswordInputToggle>
  </PasswordInput>
  <div aria-hidden="true" class="flex gap-1">
    {#each [1, 2, 3, 4] as level (level)}
      <div
        class={score >= level ? 'h-1 flex-1 rounded-full bg-primary' : 'h-1 flex-1 rounded-full bg-muted'}
      ></div>
    {/each}
  </div>
  <output class="text-sm text-muted-foreground">
    {value
        ? `Strength: ${["Weak", "Weak", "Fair", "Good", "Strong"][score]} (${value.length} characters)`
        : "Type a password to rate it."}
  </output>
</Field>

<script lang="ts">
  import { Check, Eye, EyeOff, X } from "@lucide/svelte"
  import { Field, FieldLabel } from "@ui-sdk/svelte/field"
  import { PasswordInput, PasswordInputControl, PasswordInputToggle } from "@ui-sdk/svelte/password-input"

  const rules = [
    { label: "At least 8 characters", test: (password: string) => password.length >= 8 },
    { label: "A number", test: (password: string) => /\d/.test(password) },
    {
      label: "An uppercase and a lowercase letter",
      test: (password: string) => /[a-z]/.test(password) && /[A-Z]/.test(password),
    },
  ]

  let password = $state("")
</script>

<Field name="new-password" class="flex w-full max-w-sm flex-col gap-2 text-foreground">
  <FieldLabel class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50"
    >Create a password</FieldLabel
  >
  <PasswordInput
    value={password}
    autoComplete="new-password"
    class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50 motion-reduce:transition-none"
    onValueChange={(value: string) => (password = value)}
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
  <ul aria-label="Password requirements" class="flex flex-col gap-1 text-sm">
    {#each rules as rule (rule.label)}
      {#if rule.test(password)}
        <li class="flex items-center gap-2 text-foreground">
          <Check aria-hidden="true" class="size-4 shrink-0" />
          <span class="sr-only">Done:</span>
          {rule.label}
        </li>
      {:else}
        <li class="flex items-center gap-2 text-muted-foreground">
          <X aria-hidden="true" class="size-4 shrink-0" />
          <span class="sr-only">To do:</span>
          {rule.label}
        </li>
      {/if}
    {/each}
  </ul>
</Field>

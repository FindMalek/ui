<script lang="ts">
  import { Field, FieldDescription, FieldError, FieldLabel } from "@ui-sdk/svelte/field"
  import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/svelte/radio"

  const options = [
    { value: "email", label: "Email only" },
    { value: "sms", label: "SMS only" },
    { value: "both", label: "Both email and SMS" },
  ]

  let saved = $state("")

  function submit(event: SubmitEvent) {
    event.preventDefault()
    saved = String(new FormData(event.currentTarget as HTMLFormElement).get("notifications"))
  }
</script>

<form
  class="flex w-full max-w-sm flex-col gap-4"
  onsubmit={submit}
>
  <Field class="flex flex-col gap-3">
    <FieldLabel class="text-sm font-medium data-invalid:text-foreground">Notification preferences</FieldLabel>
    <FieldDescription class="-mt-1 text-sm text-muted-foreground">
      Choose how you want to receive notifications.
    </FieldDescription>
    <RadioGroup
      class="flex flex-col gap-3"
      name="notifications"
      required
    >
      {#each options as option (option.value)}
        <label class="flex w-fit items-center gap-3 text-sm">
          <Radio
            class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none in-data-invalid:border-foreground in-data-invalid:ring-3 in-data-invalid:ring-foreground/20"
            value={option.value}
          >
            <RadioIndicator class="size-2 rounded-full bg-primary-foreground" />
          </Radio>
          {option.label}
        </label>
      {/each}
    </RadioGroup>
    <FieldError class="text-sm text-foreground">Choose how to receive notifications.</FieldError>
  </Field>
  <button
    class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px motion-reduce:transform-none motion-reduce:transition-none self-start"
    type="submit"
  >
    Save
  </button>
  {#if saved}
    <output class="text-sm text-muted-foreground">Saved: {saved}</output>
  {/if}
</form>
